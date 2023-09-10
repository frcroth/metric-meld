export const base = {
    factors: {
        second: 0,
        meter: 0,
        kilogram: 0,
        ampere: 0,
        kelvin: 0,
        mole: 0,
        candela: 0,

        factor: 0,
    },
    name: "base",
    symbol: "1",
};

export const baseUnits = [
    { factors: { second: 1 }, name: "second", symbol: "s", isBase: true },
    { factors: { meter: 1 }, name: "meter", symbol: "m" },
    { factors: { kilogram: 1 }, name: "kilogram", symbol: "kg", isBase: true },
    { factors: { ampere: 1 }, name: "ampere", symbol: "A", isBase: true },
    { factors: { kelvin: 1 }, name: "Kelvin", symbol: "K", isBase: true },
    { factors: { mole: 1 }, name: "mole", symbol: "mol", isBase: true },
    { factors: { candela: 1 }, name: "candela", symbol: "can", isBase: true },
    { factors: { factor: 10 }, name: "deca", symbol: "\\cdot 10", isBase: true },
];

export const compositions = [
    { factors: { second: -1 }, name: "hertz", symbol: "Hz", quantity: "frequency", specialNamed: true },
    { factors: { meter: 1, second: -1 }, name: "meters per second", symbol: "\\frac{m}{s}", quantity: "velocity" },
    { factors: { meter: 1, second: -2 }, name: "meters per second squared", symbol: "\\frac{m}{s^2}", quantity: "acceleration" },
    {
        factors: { second: -2, kilogram: 1, meter: 1 },
        name: "newton",
        symbol: "N",
        quantity: "force", specialNamed: true
    },
    {
        factors: { kilogram: 1, meter: 2, second: -2 },
        name: "joule",
        symbol: "J",
        
        quantity: "work/energy", specialNamed: true
    },
    {
        factors: { kilogram: 1, meter: 2, second: -3 },
        name: "watt",
        symbol: "W",
        
        quantity: "power", specialNamed: true
    },
    {
        factors: { second: -2, kilogram: 1, meter: -1 },
        name: "pascal",
        symbol: "Pa",
        
        quantity: "pressure", specialNamed: true
    },
    
    { factors: { second: 1, ampere: 1 }, 
        name: "coulomb",
        symbol: "C", 
        
        quantity: "electric charge", specialNamed: true
    },
    {
        factors: { kilogram: 1, meter: 2, second: -3, ampere: -1 },
        name: "volt",
        symbol: "V",
        
        quantity: "voltage", specialNamed: true
    },
    {
        factors: { kilogram: -1, meter: -2, second: 4, ampere: 2 },
        name: "farad",
        symbol: "F",
        
        quantity: "electrical capacitance", specialNamed: true
    },
    {
        factors: { kilogram: 1, meter: 2, second: -3, ampere: -2 },
        name: "ohm",
        symbol: "Ω",
        
        quantity: "electrical resistance", specialNamed: true
    },
    {
        factors: { kilogram: -1, meter: -2, second: 3, ampere: 2 },
        name: "siemens",
        symbol: "S",
        
        quantity: "electrical conductance", specialNamed: true
    },
    {
        factors: { kilogram: 1, meter: 2, second: -2, ampere: -1 },
        name: "weber",
        symbol: "Wb",
        
        quantity: "magnetic flux", specialNamed: true
    },
    {
        factors: { kilogram: 1, second: -2, ampere: -1 },
        name: "tesla",
        symbol: "T",
        
        quantity: "magnetic induction", specialNamed: true
    },
    {
        factors: { kilogram: 1, meter: 2, second: -2, ampere: -2 },
        name: "henry",
        symbol: "H",
        
        quantity: "electrical inductance", specialNamed: true
    },
    {
        factors: { mole: 1, second: -1 }, name: "katal", symbol: "kat",
        
        quantity: "catalytic activity", specialNamed: true
    },
    {
        factors: { candela: 1, meter: -2 }, name: "lux", symbol: "lx",
        
        quantity: "illuminance", specialNamed: true
    },
    
    

    // List from https://en.wikipedia.org/wiki/SI_derived_unit#By_field_of_application (velocity and acceleration moved up for better gameplay)
    { factors: { meter: 1, second: -3 }, name: "meters per second cubed", symbol: "\\frac{m}{s^3}", quantity: "jerk" },
    { factors: { meter: 1, second: -4 }, name: "meters per second to the fourth", symbol: "\\frac{m}{s^4}", quantity: "snap" },
    { factors: { second: -2}, name: "hertz per second", symbol: "Hz/s", quantity: "frequency drift" },
    { factors: { meter: 3, second: -1 }, name: "cubic meter per second", symbol: "\\frac{m^3}{s}", quantity: "volumetric flow" },
    { factors: { meter: 2 }, name: "square meter", symbol: "m^2", quantity: "area" },
    { factors: { meter: 3 }, name: "cubic meter", symbol: "m^3", quantity: "volume" },
    { factors: { meter: 1, second: -1, kilogram: 1 }, name: "newton-second", symbol: "N\\cdot s", quantity: "momentum" },
    { factors: { meter: 2, second: -1, kilogram: 1 }, name: "newton-meter second", symbol: "N\\cdot m\\cdot s", quantity: "angular momentum" },
    { factors: { meter: 2, kilogram: 1, second: -2 }, name: "newton-meter", symbol: "N\\cdot m", quantity: "torque" },
    { factors: { meter: 1, kilogram: 1, second: -3 }, name: "newton per second", symbol: "\\frac{N}{s}", quantity: "yank" },
    { factors: { meter: -1 }, name: "reciprocal meter", symbol: "m^{-1}", quantity: "wavenumber" },
    { factors: { meter: -2, kilogram: 1 }, name: "kilogram per square meter", symbol: "\\frac{kg}{m^2}", quantity: "area density" },
    { factors: { meter: -3, kilogram: 1 }, name: "kilogram per cubic meter", symbol: "\\frac{kg}{m^3}", quantity: "density" },
    { factors: { meter: 3, kilogram: -1 }, name: "cubic meter per kilogram", symbol: "\\frac{m^3}{kg}", quantity: "specific volume" },
    { factors: { meter: 2, kilogram: 1, second: -1 }, name: "joule-second", symbol: "J\\cdot s", quantity: "action" },
    { factors: { meter: 2, kilogram: -1, second: -2 }, name: "joule per kilogram", symbol: "\\frac{J}{kg}", quantity: "specific energy" },
    { factors: { meter: -1, kilogram: 1, second: -2 }, name: "joule per cubic meter", symbol: "\\frac{J}{m^3}", quantity: "energy density" },
    { factors: { meter: -1, kilogram: 1, second: -2 }, name: "newton per meter", symbol: "\\frac{N}{m}", quantity: "surface tension" },
    { factors: { meter: -2, kilogram: 1, second: -3 }, name: "watt per square meter", symbol: "\\frac{W}{m^2}", quantity: "heat flux density" },
    { factors: { meter: 2, second: -1 }, name: "square meter per second", symbol: "\\frac{m^2}{s}", quantity: "kinematic viscosity" },
    { factors: { meter: -1, kilogram: 1, second: -1 }, name: "pascal-second", symbol: "Pa\\cdot s", quantity: "dynamic viscosity" },
    { factors: { meter: -1, kilogram: 1 }, name: "kilogram per meter", symbol: "\\frac{kg}{m}", quantity: "linear mass density" },
    { factors: { kilogram: 1, second: -1 }, name: "kilogram per second", symbol: "\\frac{kg}{s}", quantity: "mass flow rate" },
    { factors: { meter: 1, kilogram: 1, second: -3 }, name: "watt per meter", symbol: "\\frac{W}{m}", quantity: "spectral power" },
    { factors: { meter: 2, second: -3 }, name: "gray per second", symbol: "\\frac{Gy}{s}", quantity: "absorbed dose rate" },
    // { factors: { meter: -2 }, name: "meter per cubic meter", symbol: "\\frac{m}{m^3}", quantity: "fuel efficiency" }, // skip since it can be confusing
    { factors: { meter: -1, kilogram: 1, second: -3 }, name: "watt per cubic meter", symbol: "\\frac{W}{m^3}", quantity: "spectral irradiance" },
    { factors: { meter: -2, kilogram: 1, second: -3 }, name: "joule per square meter second", symbol: "\\frac{J}{m^2\\cdot s}", quantity: "energy flux density" },
    { factors: { meter: 1, kilogram: -1, second: 2 }, name: "reciprocal pascal", symbol: "\\frac{1}{Pa}", quantity: "compressibility" },
    { factors: { meter: -2, kilogram: 1, second: -2 }, name: "joule per square meter", symbol: "\\frac{J}{m^2}", quantity: "radiant exposure" },
    { factors: { meter: 2, kilogram: 1 }, name: "kilogram square meter", symbol: "kg\\cdot m^2", quantity: "moment of inertia" },
    { factors: { meter: 2, kilogram: -1, second: -1 }, name: "newton meter second per kilogram", symbol: "\\frac{N\\cdot m\\cdot s}{kg}", quantity: "specific angular momentum" },
    // Chemistry
    { factors: { meter: -3, mole: 1 }, name: "mole per cubic meter", symbol: "\\frac{mol}{m^3}", quantity: "molarity" },
    { factors: { meter: 3, mole: -1 }, name: "cubic meter per mole", symbol: "\\frac{m^3}{mol}", quantity: "molar volume" },
    { factors: { meter: 2, kilogram: 1, second: -2, kelvin: -1, mole: -1 }, name: "joule per kelvin mole", symbol: "\\frac{J}{K\\cdot mol}", quantity: "molar heat capacity" },
    { factors: { meter: 2, kilogram: 1, second: -2, mole: -1 }, name: "joule per mole", symbol: "\\frac{J}{mol}", quantity: "molar energy" },
    { factors: { meter: 2, kilogram: -1, second: 3, ampere: 2, mole: -1 }, name: "siemens square meter per mole", symbol: "\\frac{S\\cdot m^2}{mol}", quantity: "molar conductivity" },
    { factors: { kilogram: -1, mole: 1 }, name: "mole per kilogram", symbol: "\\frac{mol}{kg}", quantity: "molality" },
    { factors: { kilogram: 1, mole: -1 }, name: "kilogram per mole", symbol: "\\frac{kg}{mol}", quantity: "molar mass" },
    { factors: { meter: 3, second: -1, mole: -1 }, name: "cubic meter per mole second", symbol: "\\frac{m^3}{mol\\cdot s}", quantity: "catalytic efficiency" },
    // Electromagnetics
    { factors: { meter: -2, second: 1, ampere: 1 }, name: "coulomb per square meter", symbol: "\\frac{C}{m^2}", quantity: "electric displacement field" },
    { factors: { meter: -3, second: 1, ampere: 1 }, name: "coulomb per cubic meter", symbol: "\\frac{C}{m^3}", quantity: "electric charge density" },
    { factors: { meter: -2, ampere: 1 }, name: "ampere per square meter", symbol: "\\frac{A}{m^2}", quantity: "electric current density" },
    { factors: { meter: -1, kilogram: -1, second: 3, ampere: 2 }, name: "siemens per meter", symbol: "\\frac{S}{m}", quantity: "electrical conductivity" },
    { factors: { meter: -1, kilogram: -1, second: 4, ampere: 2 }, name: "farad per meter", symbol: "\\frac{F}{m}", quantity: "permittivity" },
    { factors: { meter: 1, kilogram: 1, second: -2, ampere: -2 }, name: "henry per meter", symbol: "\\frac{H}{m}", quantity: "magnetic permeability" },
    { factors: { meter: 1, kilogram: 1, second: -3, ampere: -1 }, name: "volt per meter", symbol: "\\frac{V}{m}", quantity: "electric field strength" },
    { factors: { meter: -1, ampere: 1 }, name: "ampere per meter", symbol: "\\frac{A}{m}", quantity: "magnetic field strength" },
    { factors: { kilogram: -1, second: 1, ampere: 1 }, name: "coulomb per kilogram", symbol: "\\frac{C}{kg}", quantity: "exposure (X and gamma rays)" },
    { factors: { meter: 3, kilogram: 1, second: -3, ampere: -2 }, name: "ohm meter", symbol: "\\Omega\\cdot m", quantity: "resistivity" },
    { factors: { meter: -1, second: 1, ampere: 1 }, name: "coulomb per meter", symbol: "\\frac{C}{m}", quantity: "linear charge density" },
    { factors: { meter: 2, ampere: 1 }, name: "joule per tesla", symbol: "\\frac{J}{T}", quantity: "magnetic dipole moment" },
    { factors: { meter: 2, volt: -1, second: -1 }, name: "square meter per volt second", symbol: "\\frac{m^2}{V\\cdot s}", quantity: "electron mobility" },
    { factors: { meter: -2, kilogram: -1, second: 2, ampere: 2 }, name: "reciprocal henry", symbol: "\\frac{1}{H}", quantity: "magnetic reluctance" },
    { factors: { meter: 1, kilogram: 1, second: -2, ampere: -1 }, name: "weber per meter", symbol: "\\frac{Wb}{m}", quantity: "magnetic vector potential" },
    { factors: { meter: 1, kilogram: 1, second: -2, ampere: -1 }, name: "weber meter", symbol: "Wb\\cdot m", quantity: "magnetic moment" },
    { factors: { meter: 1, kilogram: 1, second: -2, ampere: -1 }, name: "tesla meter", symbol: "T\\cdot m", quantity: "magnetic rigidity" },
    { factors: { meter: -1, kilogram: -1, second: 2, ampere: 2 }, name: "meter per henry", symbol: "\\frac{m}{H}", quantity: "magnetic susceptibility" },
    // Photometry
    { factors: { second: 1, candela: 1 }, name: "lumen second", symbol: "lm\\cdot s", quantity: "luminous energy" },
    { factors: { meter: -2, second: 1, candela: 1 }, name: "lux second", symbol: "lx\\cdot s", quantity: "luminous exposure" },
    { factors: { meter: -2, candela: 1 }, name: "candela per square meter", symbol: "\\frac{cd}{m^2}", quantity: "luminance" },
    { factors: { meter: -2, kilogram: -1, second: 3, candela: 1 }, name: "lumen per watt", symbol: "\\frac{lm}{W}", quantity: "luminous efficacy" },
    // Thermodynamics
    { factors: { meter: 2, kilogram: 1, second: -2, kelvin: -1 }, name: "joule per kelvin", symbol: "\\frac{J}{K}", quantity: "heat capacity, entropy" },
    { factors: { meter: 2, kilogram: -1, second: -2, kelvin: -1 }, name: "joule per kilogram kelvin", symbol: "\\frac{J}{K\\cdot kg}", quantity: "specific heat capacity, specific entropy" },
    { factors: { meter: 1, kilogram: 1, second: -3, kelvin: -1 }, name: "watt per meter kelvin", symbol: "\\frac{W}{m\\cdot K}", quantity: "thermal conductivity" },
    { factors: { meter: -2, second: 3, kilogram: -1, kelvin: 1 }, name: "kelvin per watt", symbol: "\\frac{K}{W}", quantity: "thermal resistance" },
    { factors: { kelvin: -1 }, name: "reciprocal kelvin", symbol: "\\frac{1}{K}", quantity: "thermal expansion coefficient" },
    { factors: { meter: -1, kelvin: 1 }, name: "kelvin per meter", symbol: "\\frac{K}{m}", quantity: "temperature gradient" },


    // Additional "fun" units
    { factors: { meter: 2, factor: 10000 }, name: "hectare", symbol: "ha" },
    { factors: { kilogram: 1, factor: 1000 }, name: "tonne", symbol: "t" },
    { factors: { kilogram: 1, factor: 1e-3 }, name: "gram", symbol: "g" },
    { factors: { meter: 3, factor: 1e-3 }, name: "liter", symbol: "l", quantity: "volume" },
];
