export class Unit {
    second: number;
    meter: number;
    kilogram: number;
    ampere: number;
    kelvin: number;
    mole: number;
    candela: number;

    factor: number;

    isPredefinedComposition: boolean = false;
    assignedName: string | null = null;
    assignedSymbol: string | null = null;
    assignedQuantity: string | null = null;
    isSpeciallyNamed = false;
    isSI = true;

    constructor(
        second: number,
        meter: number,
        kilogram: number,
        ampere: number,
        kelvin: number,
        mole: number,
        candela: number,
        factor: number,
    ) {
        // SI-base exponents
        this.second = second;
        this.meter = meter;
        this.kilogram = kilogram;
        this.ampere = ampere;
        this.kelvin = kelvin;
        this.mole = mole;
        this.candela = candela;

        this.factor = factor;
    }
 

    get isBase() {
        // exactly one of the base units is one
        return this.getKeyedUnits().filter(u => u.value == 1).length == 1 && this.getKeyedUnits().filter(u => u.value == 0).length == 6 && this.factor == 1;
    }

    equals(other: Unit) {
        return (
            this.second == other.second &&
            this.meter == other.meter &&
            this.kilogram == other.kilogram &&
            this.ampere == other.ampere &&
            this.kelvin == other.kelvin &&
            this.mole == other.mole &&
            this.candela == other.candela &&
            this.factor == other.factor
        );
    }

    getKeyedUnits() {
        return [
            // Order is arranged to make names sound more natural (e.g. "ampere meter" instead of "meter ampere")
            { key: "kg", value: this.kilogram, name: "kilogram" },
            { key: "A", value: this.ampere, name: "ampere" },
            { key: "K", value: this.kelvin, name: "kelvin" },
            { key: "mol", value: this.mole, name: "mole" },
            { key: "cd", value: this.candela, name: "candela" },
            { key: "m", value: this.meter, name: "meter" },
            { key: "s", value: this.second, name: "second" },
        ];
    }

    getPowerName(power: number, name: string) {
        if (power == 0) return "";
        if (power == 1) return name;
        if (power == 2) return `square ${name}`;
        if (power == 3) return `cubic ${name}`;
        return `${name}^${power}`;
    }

    getName() {
        if (this.assignedName != null) {
            return this.assignedName;
        }

        const units = this.getKeyedUnits().filter(u => u.value != 0);
        const negativeUnits = units.filter(u => u.value < 0);
        const positiveUnits = units.filter(u => u.value > 0);
        const positivePart = positiveUnits.map(u => this.getPowerName(Math.abs(u.value), u.name));
        const negativePart = negativeUnits.map(u => this.getPowerName(Math.abs(u.value), u.name));
        let name = positivePart.join(" ");

        if (negativePart.length > 0) {
            if (positivePart.length == 0) {
                name = "inverse " + negativePart.join(" ");
            } else {
                name += " per " + negativePart.join(" ");
            }
        }


        return [this.getFactorName(), name].join(" ");
    }

    getFactorName() {
        const factor = this.factor;
        if (factor == 1) return "";
        if (factor == 1e30) return "quetta";
        if (factor == 1e27) return "ronna";
        if (factor == 1e24) return "yotta";
        if (factor == 1e21) return "zetta";
        if (factor == 1e18) return "exa";
        if (factor == 1e15) return "peta";
        if (factor == 1e12) return "tera";
        if (factor == 1e9) return "giga";
        if (factor == 1e6) return "mega";
        if (factor == 1e3) return "kilo";
        if (factor == 1e2) return "hecto";
        if (factor == 10) return "deca";
        if (factor == 1e-1) return "deci";
        if (factor == 1e-2) return "centi";
        if (factor == 1e-3) return "milli";
        if (factor == 1e-6) return "micro";
        if (factor == 1e-9) return "nano";
        if (factor == 1e-12) return "pico";
        if (factor == 1e-15) return "femto";
        if (factor == 1e-18) return "atto";
        if (factor == 1e-21) return "zepto";
        if (factor == 1e-24) return "yocto";
        if (factor == 1e-27) return "ronto";
        if (factor == 1e-30) return "quecto";
        return this.factor;
    }

    getFactorSymbol() {
        if (this.factor == 1) return "";
        if (this.factor == 1e30) return "Q";
        if (this.factor == 1e27) return "R";
        if (this.factor == 1e24) return "Y";
        if (this.factor == 1e21) return "Z";
        if (this.factor == 1e18) return "E";
        if (this.factor == 1e15) return "P";
        if (this.factor == 1e12) return "T";
        if (this.factor == 1e9) return "G";
        if (this.factor == 1e6) return "M";
        if (this.factor == 1e3) return "k";
        if (this.factor == 1e2) return "h";
        if (this.factor == 10) return "da";
        if (this.factor == 1e-1) return "d";
        if (this.factor == 1e-2) return "c";
        if (this.factor == 1e-3) return "m";
        if (this.factor == 1e-6) return "µ";
        if (this.factor == 1e-9) return "n";
        if (this.factor == 1e-12) return "p";
        if (this.factor == 1e-15) return "f";
        if (this.factor == 1e-18) return "a";
        if (this.factor == 1e-21) return "z";
        if (this.factor == 1e-24) return "y";
        if (this.factor == 1e-27) return "r";
        if (this.factor == 1e-30) return "q";

        return "";
    }

    findExactCompositionMatch(): Unit | null {
        /*
        Find the exact composition that matches this unit.
        */
        for (const unit of window.ui.library.allCompositions) {
            if (unit.equals(this)) {
                this.isPredefinedComposition = true;
                return unit;
            }
        }
        return null;
    }


    applyProperties(unit: Unit){
        this.assignedName = unit.assignedName;
        this.assignedSymbol = unit.assignedSymbol;
        this.assignedQuantity = unit.assignedQuantity;
        this.isPredefinedComposition = unit.isPredefinedComposition;
        this.isSI = unit.isSI;
        this.isSpeciallyNamed = unit.isSpeciallyNamed;
    }


    getSymbol() {
        if (this.assignedSymbol != null) {
            return this.assignedSymbol;
        }

        const units = this.getKeyedUnits().filter(u => u.value != 0);
        const negativeUnits = units.filter(u => u.value < 0);
        const positiveUnits = units.filter(u => u.value > 0);
        const positivePart = positiveUnits.map(u => u.key + (u.value != 1 ? `^${u.value}` : ""));
        const negativePart = negativeUnits.map(u => u.key + (u.value != -1 ? `^${-u.value}` : ""));
        // put factor in front
        if (this.factor != 1) {
            positivePart.unshift(this.getFactorSymbol());
        }
        let name = positivePart.join("");
        if (negativePart.length > 0) {
            if (positivePart.length == 0) {
                name = "1";
            }
            name = `\\frac{${name}}{${negativePart.join("")}}`;
        }
        return name;
    }

    get isUnit() { return true; }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromSpec(spec: any) {
        const newUnit = new Unit(
            spec.factors.second || 0,
            spec.factors.meter || 0,
            spec.factors.kilogram || 0,
            spec.factors.ampere || 0,
            spec.factors.kelvin || 0,
            spec.factors.mole || 0,
            spec.factors.candela || 0,
            spec.factors.factor || 1,
        );
        newUnit.assignedName = spec.name;
        newUnit.assignedSymbol = spec.symbol;
        newUnit.assignedQuantity = spec.quantity;
        newUnit.isSpeciallyNamed = spec.specialNamed || false;
        newUnit.isSI = !spec.nonSI;
        newUnit.isPredefinedComposition = true;
        return newUnit;
    }

    index(i: number): number {
        switch (i) {
        case 0: return this.second;
        case 1: return this.meter;
        case 2: return this.kilogram;
        case 3: return this.ampere;
        case 4: return this.kelvin;
        case 5: return this.mole;
        case 6: return this.candela;
        case 7: return this.factor;
        }
    }

    inverse() {
        const newUnit = new Unit(
            -this.second,
            -this.meter,
            -this.kilogram,
            -this.ampere,
            -this.kelvin,
            -this.mole,
            -this.candela,
            1 / this.factor,
        );
        const match = newUnit.findExactCompositionMatch();
        if (match != null) {
            newUnit.applyProperties(match);    
        }
        if (!window.ui.libraryContains(newUnit) && newUnit.isPredefinedComposition) {
            window.ui.addLibraryElement(newUnit);
        }

        return newUnit;
    }

    getHoverHint() {
        let quantityString = this.assignedQuantity != null ? `- A unit for ${this.assignedQuantity}. ` : "";
        let baseString = this.isBase ? "This is a base unit. " : "";
        let nameString = this.isSpeciallyNamed ? "This unit is a specially named derived unit." : "";
        return `\\(${this.getSymbol()}\\) : ${this.getName()} ${quantityString}${baseString}${nameString}$$s^{${this.second}}m^{${this.meter}}kg^{${this.kilogram}}A^{${this.ampere}}K^{${this.kelvin}}mol^{${this.mole}}cd^{${this.candela}}\\cdot${this.factor}$$`;
    }

    clone() {
        const newUnit = new Unit(
            this.second,
            this.meter,
            this.kilogram,
            this.ampere,
            this.kelvin,
            this.mole,
            this.candela,
            this.factor,
        );
        newUnit.applyProperties(this);
        return newUnit;
    }
}

export class Inverse {

    get isUnit() { return false; }

    equals(other: Combinable) {
        return other instanceof Inverse;
    }

    getHoverHint() {
        return "Use inverse to get the reciprocal of another unit.";
    }

    getName() {
        return "Inverse";
    }

    clone() {
        return new Inverse();
    }
}

export type Combinable = Unit | Inverse;

export function combineUnits(u1: Unit, u2: Unit) {
    const newUnit = new Unit(
        u1.second + u2.second,
        u1.meter + u2.meter,
        u1.kilogram + u2.kilogram,
        u1.ampere + u2.ampere,
        u1.kelvin + u2.kelvin,
        u1.mole + u2.mole,
        u1.candela + u2.candela,
        u1.factor * u2.factor,
    );
    const match = newUnit.findExactCompositionMatch();
    if (match != null) {
        newUnit.applyProperties(match);
    }
    if (!window.ui.libraryContains(newUnit) && newUnit.isPredefinedComposition) {
        window.ui.addLibraryElement(newUnit);
    }
    return newUnit;
}

// TODO: Add custom factor
