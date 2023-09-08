import { base, baseUnits } from './compositions';
import { Library } from './library';
import { Combinable, combineUnits, Unit, Inverse } from './units';

class WorkspaceElement {
    inner: Combinable;
    symbol: string;
    name: string;

    node: HTMLDivElement;
    innerRect: HTMLDivElement;
    symbolElement: HTMLSpanElement;
    nameElement: HTMLSpanElement;

    isLibraryElement: boolean = false;

    constructor(inner: Combinable, symbol: string, name: string) {
        this.inner = inner;
        this.symbol = symbol;
        this.name = name;
    }

    get acceptsMerge() {
        return !this.isLibraryElement;
    }

    draw(root: HTMLElement, initialPosition: { x: number, y: number } = null) {
        this.node = document.createElement('div');
        this.innerRect = document.createElement('div');

        this.node.classList.add('combinable');

        this.innerRect.classList.add('card');
        this.innerRect.classList.add('unit-inner');

        this.symbolElement = document.createElement('span');
        this.symbolElement.classList.add('symbol');
        this.symbolElement.innerText = this.symbol;

        this.nameElement = document.createElement('span');
        this.nameElement.classList.add('name-label');
        this.nameElement.innerText = this.name;

        this.innerRect.appendChild(this.symbolElement);
        this.node.appendChild(this.innerRect);
        this.node.appendChild(this.nameElement);

        root.appendChild(this.node);
        this.initializeDragging(this.node);

        if (initialPosition) {
            this.node.style.left = `${initialPosition.x}px`;
            this.node.style.top = `${initialPosition.y}px`;
        }


    }

    mergeWith(otherElement: WorkspaceElement) {
        if (otherElement.inner.isUnit && this.inner.isUnit) {
            let newUnit = combineUnits(otherElement.inner as Unit, this.inner as Unit);
            this.inner = newUnit;
            this.name = newUnit.getName();
            this.symbol = newUnit.getSymbol();
            this.isLibraryElement = false;

            otherElement.consume();
        }
        if (!otherElement.inner.isUnit && this.inner.isUnit) {
            let newUnit = (this.inner as Unit).inverse();

            this.inner = newUnit;

            let match = newUnit.findExactCompositionMatch();
            if (match != null) {
                newUnit.assignedName = match.assignedName;
                newUnit.assignedSymbol = match.assignedSymbol;
            }
            this.name = newUnit.getName();
            this.symbol = newUnit.getSymbol();
            this.isLibraryElement = false;

            otherElement.consume();
        }
        if (otherElement.inner.isUnit && !this.inner.isUnit) {
            otherElement.mergeWith(this);
        }
        this.redraw();
    }

    redraw() {
        this.nameElement.innerText = this.name;
        this.symbolElement.innerText = `$$${this.symbol}$$`;

        this.innerRect.classList.remove('unit-inner-combined');
        this.innerRect.classList.remove('unit-inner-lib');
        this.innerRect.classList.remove('unit-inner-special');
        if (!this.inner.isUnit) {
            this.innerRect.classList.add('unit-inner-special');
        } else if (this.isLibraryElement) {
            this.innerRect.classList.add('unit-inner-lib');
        } else {
            this.innerRect.classList.add('unit-inner-combined');
        }


        // @ts-ignore
        if (MathJax) MathJax.typeset();
    }

    consume() {
        this.node.remove();
        window.ui.elements = window.ui.elements.filter(e => e != this);
    }

    clone() {
        let newElement = new WorkspaceElement(this.inner, this.symbol, this.name); // TODO: clone inner
        newElement.draw(document.getElementById('lib'), null);
        newElement.node.style.left = this.node.style.left;
        newElement.node.style.top = this.node.style.top;
        window.ui.elements.push(newElement);
        newElement.redraw();
        return newElement;
    }

    static zIndexCounter: number = 0;

    initializeDragging(node: HTMLElement) {
        let xOffset = 0,
            yOffset = 0,
            initialX = 0,
            initialY = 0;
        node.onmousedown = (e) => dragMouseDown(e);
        node.onclick = null;
        node.classList.add('grabbable');

        let originalTop = 0;
        let originalLeft = 0;

        let thisElement = this; //FIXME

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();

            if (thisElement.isLibraryElement) {
                // Duplicate this element and continue dragging this one
                let newElement = thisElement.clone();
                newElement.isLibraryElement = true;
                thisElement.isLibraryElement = false; // So we can merge this one.
                thisElement.redraw();
                newElement.redraw();
            }

            initialX = e.clientX;
            initialY = e.clientY;
            document.onmouseup = (e) => closeDragElement(e);

            document.onmousemove = (e) => elementDrag(e);
            originalTop = node.offsetTop;
            originalLeft = node.offsetLeft;
            node.style.zIndex = (WorkspaceElement.zIndexCounter++).toString();
        }

        let mergePartner = null;

        function elementDrag(e) {
            node.classList.add('grabbing');
            e = e || window.event;
            e.preventDefault();

            xOffset = initialX - e.clientX;
            yOffset = initialY - e.clientY;
            initialX = e.clientX;
            initialY = e.clientY;

            node.style.top = node.offsetTop - yOffset + 'px';
            node.style.left = node.offsetLeft - xOffset + 'px';

            let closestElement = [...window.ui.elements]
                .filter((element) => element != thisElement)
                .map((element) => {
                    return { elem: element, dist: element.distanceTo(thisElement) };
                })
                .sort((a, b) => a.dist - b.dist)[0];
            const distanceThreshold = 15;
            if (closestElement.dist <= distanceThreshold && closestElement.elem.acceptsMerge) {
                node.classList.add('merge-highlight');
                mergePartner = closestElement;
            } else {
                node.classList.remove('merge-highlight');
                mergePartner = null;
            }
        }

        function closeDragElement(e: MouseEvent) {
            document.onmouseup = null;
            document.onmousemove = null;
            e.preventDefault();
            node.classList.remove('grabbing');

            if (mergePartner) {
                // Do merge!
                thisElement.mergeWith(mergePartner.elem);
            }

            if (node.offsetTop == originalTop && node.offsetLeft == originalLeft) {
                // console.log("No drag")
                // No drag has happened
            }
        }
    }

    get position() {
        const { top, left, width, height } = this.innerRect.getBoundingClientRect();
        return {
            x: left + width / 2,
            y: top + height / 2,
        };
    }

    distanceTo(otherElement: WorkspaceElement) {
        let a = this.position;
        let b = otherElement.position;

        return Math.hypot(a.x - b.x, a.y - b.y);
    }
}

export class UI {
    elements: Array<WorkspaceElement>;
    library: Library;
    libraryWidth: number = 0;
    libraryHeight: number = 0;
    nextIndex = 0;

    constructor() {
        this.elements = new Array();
        this.library = new Library();
        this.libraryHeight = 600; //TODO: calculate this
        this.libraryWidth = 600;
    }

    getPositionForIndex(index: number) {
        let elementSpacing = 60;
        let elementHorizontalSpacing = 60;
        let topPadding = 50;

        let x = Math.floor(elementSpacing * index / this.libraryHeight) * elementHorizontalSpacing;
        let y = topPadding + index % Math.floor(this.libraryHeight / elementSpacing) * elementSpacing;

        return { x, y };
    }

    init() {
        baseUnits.forEach((baseUnit) => {
            let unit = Unit.fromSpec(baseUnit);
            this.library.baseUnits.push(unit);
            let we = new WorkspaceElement(unit, baseUnit.symbol, baseUnit.name);
            we.isLibraryElement = true;
            this.elements.push(we);
        });

        let inverseElement = new WorkspaceElement(new Inverse(), '\\frac{1}{x}', 'Inverse');
        inverseElement.isLibraryElement = true;
        this.elements.push(inverseElement);
        let initRoot = document.getElementById('lib');
        this.elements.forEach((element) => {
            element.draw(initRoot, this.getPositionForIndex(this.nextIndex));
            this.nextIndex++;
        });
        setTimeout(() => this.elements.forEach((element) => element.redraw()), 50);
    }

    libraryContains(unit: Unit) {
        return this.library.isUnitFound(unit)
    }

    addLibraryElement(unit: Unit) {
        let we = new WorkspaceElement(unit, unit.getSymbol(), unit.getName());
        we.isLibraryElement = true;
        this.elements.push(we);
        this.library.addFoundElement(unit);
        we.draw(document.getElementById('lib'), this.getPositionForIndex(this.nextIndex++));
        we.redraw();
    }
}

// TODO: Fix MathJax import
