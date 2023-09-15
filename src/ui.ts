import { baseUnits } from "./compositions";
import { Library } from "./library";
import { Combinable, combineUnits, Unit, Inverse } from "./units";

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

    draw(root: HTMLElement, childIndex = null) {
        this.node = document.createElement("div");
        this.innerRect = document.createElement("div");

        this.node.classList.add("combinable");

        this.innerRect.classList.add("card");
        this.innerRect.classList.add("unit-inner");
        this.innerRect.onmouseenter = () => window.ui.updateHoverText(this.inner);

        this.symbolElement = document.createElement("span");
        this.symbolElement.classList.add("symbol");
        this.symbolElement.innerText = this.symbol;

        this.nameElement = document.createElement("span");
        this.nameElement.classList.add("name-label");
        this.nameElement.innerText = this.name;

        this.innerRect.appendChild(this.symbolElement);
        this.node.appendChild(this.innerRect);
        this.node.appendChild(this.nameElement);

        if (childIndex != null) {
            root.insertBefore(this.node, root.children[childIndex]);
        } else {
            root.appendChild(this.node);
        }

        this.initializeDragging(this.node);
    }

    mergeWith(otherElement: WorkspaceElement) {
        if (otherElement.inner.isUnit && this.inner.isUnit) {
            const newUnit = combineUnits(otherElement.inner as Unit, this.inner as Unit);
            this.inner = newUnit;
            this.name = newUnit.getName();
            this.symbol = newUnit.getSymbol();
            this.isLibraryElement = false;

            otherElement.consume();
        }
        if (!otherElement.inner.isUnit && this.inner.isUnit) {
            const newUnit = (this.inner as Unit).inverse();

            this.inner = newUnit;

            const match = newUnit.findExactCompositionMatch();
            if (match != null) {
                newUnit.applyProperties(match);   
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

        this.innerRect.classList.remove("unit-inner-base");
        this.innerRect.classList.remove("unit-inner-inverse");
        this.innerRect.classList.remove("unit-inner-combined-named");
        this.innerRect.classList.remove("unit-inner-combined-defined");
        this.innerRect.classList.remove("unit-inner-combined-custom");
        this.node.classList.remove("merge-highlight");

        if (this.inner.isUnit) {
            let unit = this.inner as Unit;
            if (unit.isBase) {
                this.innerRect.classList.add("unit-inner-base");
            } else if (unit.isSpeciallyNamed) {
                this.innerRect.classList.add("unit-inner-combined-named");
            } else if (unit.isPredefinedComposition) {
                this.innerRect.classList.add("unit-inner-combined-defined");
            } else {
                this.innerRect.classList.add("unit-inner-combined-custom");
            }
        } else {
            this.innerRect.classList.add("unit-inner-inverse");
        }

        if (this.isLibraryElement) {
            this.node.classList.add("in-library");
        } else {
            this.node.classList.remove("in-library");
            /*if (this.node.parentElement.id == "lib") {
                this.node.remove();
                document.getElementById("workspace").appendChild(this.node);
            }*/ 
        }



        window.ui.redrawFormulas([this.node]);
    }

    consume() {
        this.node.remove();
        window.ui.elements = window.ui.elements.filter(e => e != this);
    }

    clone() {
        // new element takes the place of the current element, so that the drag can continue on the current element
        const newElement = new WorkspaceElement(this.inner.clone(), this.symbol, this.name);
        const thisElementChildIndex = Array.from(this.node.parentNode.children).indexOf(this.node);
        newElement.draw(document.getElementById("units-repo"), thisElementChildIndex);
        newElement.node.style.left = this.node.style.left;
        newElement.node.style.top = this.node.style.top;
        window.ui.elements.unshift(newElement);
        newElement.isLibraryElement = this.isLibraryElement;
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
        node.classList.add("grabbable");

        let originalTop = 0;
        let originalLeft = 0;

        const thisElement = this; //FIXME

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();

            

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
            if (thisElement.isLibraryElement) {
                // Duplicate this element and continue dragging this one
                const newElement = thisElement.clone();
                thisElement.isLibraryElement = false; // So we can merge this one.
                thisElement.redraw();
                newElement.redraw();

                thisElement.node.style.top = newElement.node.getBoundingClientRect().top - yOffset + "px";
                thisElement.node.style.left = newElement.node.offsetLeft - xOffset + "px";
            }

            node.classList.add("grabbing");
            e = e || window.event;
            e.preventDefault();

            xOffset = initialX - e.clientX;
            yOffset = initialY - e.clientY;
            initialX = e.clientX;
            initialY = e.clientY;

            node.style.top = node.offsetTop - yOffset + "px";
            node.style.left = node.offsetLeft - xOffset + "px";

            const closestElement = [...window.ui.elements]
                .filter((element) => element != thisElement)
                .map((element) => {
                    return { elem: element, dist: element.distanceTo(thisElement) };
                })
                .sort((a, b) => a.dist - b.dist)[0];
            const distanceThreshold = 15;
            if (closestElement.dist <= distanceThreshold && closestElement.elem.acceptsMerge) {
                node.classList.add("merge-highlight");
                mergePartner = closestElement;
            } else {
                node.classList.remove("merge-highlight");
                mergePartner = null;
            }
        }

        function closeDragElement(e: MouseEvent) {
            document.onmouseup = null;
            document.onmousemove = null;
            e.preventDefault();
            node.classList.remove("grabbing");

            if (mergePartner) {
                // Do merge!
                thisElement.mergeWith(mergePartner.elem);
                mergePartner = null;
            }

            if (node.offsetTop == originalTop && node.offsetLeft == originalLeft) {
                // console.log("No drag")
                // No drag has happened
            }

            let boundingRect = node.getBoundingClientRect();
            let repoBoundingRect = document.getElementById("units-repo").getBoundingClientRect();
            if(boundingRect.top > repoBoundingRect.top && boundingRect.left > repoBoundingRect.left) {
                // Delete unit if dropped on library
                thisElement.consume();
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
        const a = this.position;
        const b = otherElement.position;

        return Math.hypot(a.x - b.x, a.y - b.y);
    }
}

export class UI {
    elements: Array<WorkspaceElement>;
    library: Library;

    constructor() {
        this.elements = [];
        this.library = new Library();
    }


    init(loadFromLocalStorage: boolean = true) {
        baseUnits.forEach((baseUnit) => {
            const unit = Unit.fromSpec(baseUnit);
            this.library.baseUnits.push(unit);
            const we = new WorkspaceElement(unit, baseUnit.symbol, baseUnit.name);
            we.isLibraryElement = true;
            this.elements.push(we);
        });

        const inverseElement = new WorkspaceElement(new Inverse(), "\\frac{1}{x}", "Inverse");
        inverseElement.isLibraryElement = true;
        this.elements.push(inverseElement);
        const initRoot = document.getElementById("units-repo");
        this.elements.forEach((element) => {
            element.draw(initRoot);
        });
        if(loadFromLocalStorage) {
            window.ui.library.load();
        }
        setTimeout(() => this.elements.forEach((element) => element.redraw()), 50);
        this.updateText();
    }

    libraryContains(unit: Unit) {
        return this.library.isUnitFound(unit);
    }

    addLibraryElement(unit: Unit) {
        const we = new WorkspaceElement(unit, unit.getSymbol(), unit.getName());
        we.isLibraryElement = true;
        this.elements.push(we);
        this.library.addFoundElement(unit);
        we.draw(document.getElementById("units-repo"));
        we.redraw();
        this.updateText();
    }

    updateText() {
        document.getElementById("next-unit").innerHTML=this.library.getNextCompositionHint();
        document.getElementById("progress-indicator").innerHTML=this.library.getProgressHint();
    }

    currentlyHovered: Combinable = null;
    updateHoverText(hovered: Combinable) {
        if (this.currentlyHovered == hovered) return;
        this.currentlyHovered = hovered;
        document.getElementById("element-info").innerHTML=hovered.getHoverHint();
        this.redrawFormulas([document.getElementById("element-info")]);
    }

    redrawFormulas(elements: Array<HTMLElement> = []) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (MathJax) {
            if(elements.length != 0) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                MathJax.typesetPromise(elements);
            } else {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                MathJax.typesetPromise();
            }
        }
                
    }

    resetProgress() {
        this.library.resetProgress();
        document.getElementById("units-repo").innerText = "";
        this.elements = [];
        this.init(false);
        this.updateText();
    }
}
