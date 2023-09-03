import { base, baseUnits, compositions } from './compositions';

export class Unit {
    second: number;
    meter: number;
    kilogram: number;
    ampere: number;
    kelvin: number;
    mole: number;
    candela: number;

    factor: number;

    isSpecial: boolean = false;

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

    normalized() {
        let baseUnit = { ...base.factors };
        Object.assign(baseUnit, this);
        return baseUnit;
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
        ]
    }

    getPowerName(power: number, name: string) {
        if (power == 0) return "";
        if (power == 1) return name;
        if (power == 2) return `square ${name}`;
        if (power == 3) return `cubic ${name}`;
        return `${name}^${power}`;
    }

    // TOOD: Cache?
    getName() {
        let match = this.findExactCompositionMatch();
        if (match != null) {
            return match.name;
        }

        let units = this.getKeyedUnits().filter(u => u.value != 0);
        let negativeUnits = units.filter(u => u.value < 0);
        let positiveUnits = units.filter(u => u.value > 0);
        let positivePart = positiveUnits.map(u => this.getPowerName(Math.abs(u.value), u.name));
        let negativePart = negativeUnits.map(u => this.getPowerName(Math.abs(u.value), u.name));
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
        let factor = this.factor;
        if (factor == 1) return "";
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
        return this.factor;
    }

    getFactorSymbol() {
        if (this.factor == 1) return "";
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
        return "";
        // TODO: add silly ones
    }

    getCombination() {
        /*
        Find the combination of base units and composed units that matches this unit most closely.
        */
        // TODO: implement

    }

    findExactCompositionMatch() {
        /*
        Find the exact composition that matches this unit.
        */
        for (let unitSpec of namedUnitSpecs) {
            if (Unit.fromSpec(unitSpec.factors).equals(this)) {
                this.isSpecial = true;
                return unitSpec;
            }
        }
        return null;
    } // TODO: Put found matches in library


    getSymbol() {

        let match = this.findExactCompositionMatch();
        if (match != null) {
            return match.symbol;
        }

        let units = this.getKeyedUnits().filter(u => u.value != 0);
        let negativeUnits = units.filter(u => u.value < 0);
        let positiveUnits = units.filter(u => u.value > 0);
        let positivePart = positiveUnits.map(u => u.key + (u.value != 1 ? `^${u.value}` : ''));
        let negativePart = negativeUnits.map(u => u.key + (u.value != -1 ? `^${-u.value}` : ''));
        // put factor in front
        if (this.factor != 1) {
            positivePart.unshift(this.getFactorSymbol());
        }
        let name = positivePart.join('');
        if (negativePart.length > 0) {
            if (positivePart.length == 0) {
                name = '1';
            }
            name = `\\frac{${name}}{${negativePart.join('')}}`;
        }
        return name;
    }

    get isUnit() { return true; }

    static fromSpec(spec: any) {
        return new Unit(
            spec.second || 0,
            spec.meter || 0,
            spec.kilogram || 0,
            spec.ampere || 0,
            spec.kelvin || 0,
            spec.mole || 0,
            spec.candela || 0,
            spec.factor || 1,
        );
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
        let newUnit = new Unit(
            -this.second,
            -this.meter,
            -this.kilogram,
            -this.ampere,
            -this.kelvin,
            -this.mole,
            -this.candela,
            1 / this.factor,
        );
        newUnit.findExactCompositionMatch();
        if (!window.ui.libraryContains(newUnit) && newUnit.isSpecial) {
            window.ui.addLibraryElement(newUnit);
        }

        return newUnit;
    }
}

export class Inverse {

    get isUnit() { return false; }

    equals(other: any) {
        return other instanceof Inverse;
    }
}

export type Combinable = Unit | Inverse;

export function combineUnits(unit1: Unit, unit2: Unit) {
    let u1 = unit1.normalized();
    let u2 = unit2.normalized();
    let newUnit = new Unit(
        u1.second + u2.second,
        u1.meter + u2.meter,
        u1.kilogram + u2.kilogram,
        u1.ampere + u2.ampere,
        u1.kelvin + u2.kelvin,
        u1.mole + u2.mole,
        u1.candela + u2.candela,
        u1.factor * u2.factor,
    );
    newUnit.findExactCompositionMatch();
    if (!window.ui.libraryContains(newUnit) && newUnit.isSpecial) {
        window.ui.addLibraryElement(newUnit);
    }
    return newUnit;
}

let namedUnitSpecs = [...baseUnits, ...compositions];

// TODO: Name units, find units from compositions, factors
// TODO: Add quantity and explanation?
// TODO: Add goals? Write how many units can be found on library?


