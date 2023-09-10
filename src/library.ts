import { compositions } from "./compositions";
import { Unit } from "./units";

export class Library {
    

    baseUnits: Array<Unit>;
    foundDerivedUnits: Array<Unit>;
    allCompositions: Array<Unit>;
    notFoundUnits: Map<string, Unit>;

    constructor() {
        this.baseUnits = [];
        this.foundDerivedUnits = [];
        this.allCompositions = compositions.map(spec => Unit.fromSpec(spec));
        this.notFoundUnits = new Map();
        this.allCompositions.forEach(unit => this.notFoundUnits.set(unit.assignedName, unit));
    }

    getNextComposition(): null | Unit {
        let nextNotFound = this.notFoundUnits.values().next()?.value;
        if(nextNotFound != null && nextNotFound != undefined) {
            return nextNotFound;
        }
    }

    getNextCompositionHint() {
        let nextNotFound = this.getNextComposition();
        if(nextNotFound != null) {
            return `Find a unit for <i>${nextNotFound.assignedQuantity}</i>.`;
        }
        return "All units found!";
    }

    getProgressHint(): string {
        let foundCount = this.foundDerivedUnits.length;
        let totalCount = this.allCompositions.length;
        return `${foundCount}/${totalCount} units found.`;
    }

    addFoundElement(unit: Unit) {
        this.foundDerivedUnits.push(unit);
        this.notFoundUnits.delete(unit.assignedName);
    }


    isUnitFound(unit: Unit): boolean {
        return this.baseUnits.some((u) => u.equals(unit)) || this.foundDerivedUnits.some((u) => u.equals(unit));
    }


}