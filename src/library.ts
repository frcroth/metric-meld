import { compositions } from "./compositions";
import { Unit } from "./units";

export class Library {

    baseUnits: Array<Unit>;
    foundDerivedUnits: Array<Unit>;
    allCompositions: Array<Unit>;

    constructor() {
        this.baseUnits = [];
        this.foundDerivedUnits = [];
        this.allCompositions = compositions.map(spec => Unit.fromSpec(spec));
    }


    getNextCompositionHint() {
        // TODO.
    }

    addFoundElement(unit: Unit) {
        this.foundDerivedUnits.push(unit);
    }


    isUnitFound(unit: Unit): boolean {
        return this.baseUnits.some((u) => u.equals(unit)) || this.foundDerivedUnits.some((u) => u.equals(unit));
    }


}