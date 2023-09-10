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
    { factors: { second: 1 }, name: "second", symbol: "s", isBase: true, quantity: "time" },
    { factors: { meter: 1 }, name: "meter", symbol: "m", quantity: "length", isBase: true },
    { factors: { kilogram: 1 }, name: "kilogram", symbol: "kg", isBase: true, quantity: "mass" },
    { factors: { ampere: 1 }, name: "ampere", symbol: "A", isBase: true, quantity: "electric current" },
    { factors: { kelvin: 1 }, name: "Kelvin", symbol: "K", isBase: true, quantity: "temperature" },
    { factors: { mole: 1 }, name: "mole", symbol: "mol", isBase: true, quantity: "amount of substance" },
    { factors: { candela: 1 }, name: "candela", symbol: "can", isBase: true, quantity: "luminous intensity" },
    { factors: { factor: 10 }, name: "deca", symbol: "\\cdot 10", isBase: true },
];

export const compositions = [
    { factors: { meter: 2 }, name: "square meter", symbol: "m^2", quantity: "area" },
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
    
    

    // List from https://en.wikipedia.org/wiki/SI_derived_unit#By_field_of_application (area, velocity and acceleration moved up for better gameplay)
    { factors: { meter: 1, second: -3 }, name: "meters per second cubed", symbol: "\\frac{m}{s^3}", quantity: "jerk" },
    { factors: { meter: 1, second: -4 }, name: "meters per second to the fourth", symbol: "\\frac{m}{s^4}", quantity: "snap" },
    { factors: { second: -2}, name: "hertz per second", symbol: "Hz/s", quantity: "frequency drift" },
    { factors: { meter: 3, second: -1 }, name: "cubic meter per second", symbol: "\\frac{m^3}{s}", quantity: "volumetric flow" },
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
    { factors: { meter: 2, factor: 10000 }, name: "hectare", symbol: "ha" , nonSI: true},
    { factors: { kilogram: 1, factor: 1000 }, name: "tonne", symbol: "t" ,nonSI: true},
    { factors: { kilogram: 1, factor: 1e-3 }, name: "gram", symbol: "g" ,nonSI: true},
    { factors: { meter: 3, factor: 1e-3 }, name: "liter", symbol: "l", quantity: "volume" ,nonSI: true},
    { factors: { meter: 1, second: 2, factor:1e-2 }, name: "galileo", symbol: "Gal", quantity: "acceleration" ,nonSI: true},
    { factors: { meter: 1, kilogram: 1, second: -2, factor: 1e-5 }, name: "dyne", symbol: "dyn", quantity: "force" ,nonSI: true},
    { factors: { meter: 2, kilogram: 1, second: -2, factor: 1e-7 }, name: "erg", symbol: "erg", quantity: "energy" ,nonSI: true},
    { factors: { meter: -1, kilogram: 1, second: -1, factor: 0.1 }, name: "poise", symbol: "P", quantity: "dynamic viscosity" ,nonSI: true},
    { factors: { meter: 2, second: -1, factor: 1e-4 }, name: "stokes", symbol: "St", quantity: "kinematic viscosity" ,nonSI: true},
    { factors: { meter: -1, factor: 100 }, name: "kayser", symbol: "K", quantity: "wavenumber" ,nonSI: true},
    { factors: { meter: 1, kilogram: 1, second: -2, ampere: -1, factor: 1e-4 }, name: "gauss", symbol: "G", quantity: "magnetic flux density" ,nonSI: true},
    { factors: { meter: 1, kilogram: 1, second: -2, ampere: -1, factor: 1e-1 }, name: "oersted", symbol: "Oe", quantity: "magnetizing field" ,nonSI: true},
    { factors: { meter: 2, kilogram: 1, second: -2, ampere: -1, factor: 1e-8 }, name: "maxwell", symbol: "Mx", quantity: "magnetic flux" ,nonSI: true},
    { factors: { meter: -2, candela: 1, factor: 1e4 }, name: "stilb", symbol: "sb", quantity: "luminance" ,nonSI: true},
    { factors: { meter: -2, candela: 1, factor: 1e4 / Math.PI }, name: "lambert", symbol: "L_{\\pi}", quantity: "luminance" ,nonSI: true},
    { factors: { meter: -2, candela: 1, factor: 1e4 }, name: "phot", symbol: "ph", quantity: "illuminance" ,nonSI: true},
    { factors: { second: 1, factor: 60 }, name: "minute", symbol: "min" , quantity: "time" ,nonSI: true},
    { factors: { second: 1, factor: 3600 }, name: "hour", symbol: "h" , quantity: "time" ,nonSI: true},
    { factors: { second: 1, factor: 86400 }, name: "day", symbol: "d" , quantity: "time" ,nonSI: true},
    { factors: { second: 1, factor: 604800 }, name: "week", symbol: "wk" , quantity: "time" ,nonSI: true},
    { factors: { second: 1, factor: 31557600 }, name: "year", symbol: "a" , quantity: "time" ,nonSI: true},
    { factors: { second: 1, factor: 31556952.0 }, name: "Gregorian year", symbol: "a_{g}" , quantity: "time" ,nonSI: true},
    { factors: { second: 1, factor: 31558149.8 }, name: "sidereal year", symbol: "a_{s}" , quantity: "time" ,nonSI: true},
    { factors: { second: 1, factor: 31556925.2 }, name: "tropical year", symbol: "a_{t}" , quantity: "time" ,nonSI: true},
    { factors: { second: 1, factor: 31558434.3 }, name: "anomalistic year", symbol: "a_{A}" , quantity: "time" ,nonSI: true},
    { factors: { second: 1, factor: 31558432.0 }, name: "draconic year", symbol: "a_{D}" , quantity: "time" ,nonSI: true},
    { factors: { second: 1, factor: 31556926.0 }, name: "lunar year", symbol: "a_{L}" , quantity: "time" ,nonSI: true},
    { factors: { second: 1, factor: 31558149.6 }, name: "Gaussian year", symbol: "a_{G}" , quantity: "time" ,nonSI: true},
    { factors: { second: 1, factor: 4.55e17 }, name: "Hubble time", symbol: "t_{H}" , quantity: "time" ,nonSI: true},


    // Constants (currently not possible to achieve, as factors can only be powers of 10)
    /**
    { factors: { meter: 2, kilogram: 1, second: -3, kelvin: -4, factor: 5.670373e-8 }, name: "stefan-boltzmann constant", symbol: "\\sigma", quantity: "radiant flux density" },
    { factors: { meter: 2, kilogram: 1, second: -1, factor: 6.626070040e-34 }, name: "Planck constant", symbol: "h", quantity: "action" },
    { factors: { meter: 2, kilogram: 1, second: -1, factor: 1.054571800e-34 }, name: "Reduced Planck constant", symbol: "\\hbar", quantity: "action" },
    { factors: { meter: 2, kilogram: 1, second: -2, kelvin: -1, factor: 1.38064852e-23 }, name: "Boltzmann constant", symbol: "k_B", quantity: "temperature" },
    { factors: { factor: 6.022140857e23 }, name: "Avogadro constant", symbol: "N_A", quantity: "amount of substance" },
    { factors: { second: 1, ampere: 1, factor: 96485.33289 }, name: "Faraday constant", symbol: "F", quantity: "electric charge" },
    { factors: { meter: 2, kilogram: 1, second: -2, kelvin: -1, mole: -1, factor: 8.3144598 }, name: "Gas constant", symbol: "R", quantity: "temperature" },
    { factors: { meter: -1, factor: 10973731.568508 }, name: "Rydberg constant", symbol: "R_\\infty", quantity: "wavenumber" },
    { factors: { meter: 1, factor: 5.2917721067e-11 }, name: "Bohr radius", symbol: "a_0", quantity: "length" },
    { factors: { meter: 2, kilogram: 1, second: -2, ampere: -1, factor: 9.274009994e-24 }, name: "Bohr magneton", symbol: "\\mu_B", quantity: "magnetic dipole moment" },
    { factors: { meter: 2, kilogram: 1, second: -2, ampere: -1, factor: 5.050783699e-27 }, name: "Nuclear magneton", symbol: "\\mu_N", quantity: "magnetic dipole moment" },
    { factors: { kilogram: 1, factor: 9.10938356e-31 }, name: "Electron mass", symbol: "m_e", quantity: "mass" },
    { factors: { kilogram: 1, factor: 1.672621898e-27 }, name: "Proton mass", symbol: "m_p", quantity: "mass" },
    { factors: { kilogram: 1, factor: 1.674927471e-27 }, name: "Neutron mass", symbol: "m_n", quantity: "mass" },
    { factors: { meter: 2, kilogram: 1, second: -2, factor: 1.6021766208e-19 }, name: "Electron volt", symbol: "eV", quantity: "energy" },
    { factors: { kilogram: 1, factor: 1.660539040e-27 }, name: "Atomic mass unit", symbol: "u", quantity: "mass" },
    { factors: { kilogram: 1, factor: 1.660539040e-27 }, name: "Dalton", symbol: "Da", quantity: "mass" },
    { factors: { meter: 2, kilogram: 1, second: -2, ampere: -1, factor: 1.6021766208e-19 }, name: "Electron charge", symbol: "e", quantity: "electric charge" },
    { factors: { meter: 2, kilogram: 1, second: -2, ampere: -1, factor: 1.6021766208e-19 }, name: "Elementary charge", symbol: "e", quantity: "electric charge" },
    { factors: { meter: 1, second: -1, factor: 299792458 }, name: "Speed of light in vacuum", symbol: "c", quantity: "speed" },
    { factors: { meter: 3, kilogram: -1, second: -2, factor: 6.67408e-11 }, name: "Gravitational constant", symbol: "G", quantity: "gravitational constant" },
    { factors: { meter: 1, second: -2, factor: 9.80665 }, name: "Standard acceleration due to gravity", symbol: "g_n", quantity: "acceleration" },
    { factors: { meter: 1, factor: 1.616229e-35 }, name: "Planck length", symbol: "l_P", quantity: "length" },
    { factors: { kilogram: 1, factor: 2.176470e-8 }, name: "Planck mass", symbol: "m_P", quantity: "mass" },
    { factors: { second: 1, factor: 5.39116e-44 }, name: "Planck time", symbol: "t_P", quantity: "time" },
    { factors: { kelvin: 1, factor: 1.416808e32 }, name: "Planck temperature", symbol: "T_P", quantity: "temperature" },
    { factors: { meter: 2, kilogram: 1, second: -2, ampere: -1, factor: 5.291772e-19 }, name: "Planck charge", symbol: "q_P", quantity: "electric charge" },
    { factors: { meter: 2, kilogram: 1, second: -2, factor: 1.9561e9 }, name: "Planck energy", symbol: "E_P", quantity: "energy" },
    { factors: { meter: 1, kilogram: 1, second: -2, factor: 1.21027e44 }, name: "Planck force", symbol: "F_P", quantity: "force" },
    { factors: { meter: 2, kilogram: 1, second: -3, factor: 3.62831e52 }, name: "Planck power", symbol: "P_P", quantity: "power" },
    { factors: { meter: 2, factor: 2.61231e-70 }, name: "Planck area", symbol: "A_P", quantity: "area" },
    { factors: { meter: 3, factor: 4.2217e-105 }, name: "Planck volume", symbol: "V_P", quantity: "volume" },
    { factors: { kilogram: 1, meter: -3, factor: 5.1550e96 }, name: "Planck density", symbol: "\\rho_P", quantity: "density" },
    { factors: { kilogram: 1, meter: -1, second: -2, factor: 5.1550e96 }, name: "Planck energy density", symbol: "\\rho_P", quantity: "energy density" },
    { factors: { kilogram: 1, meter: -1, second: -2, factor: 4.63309e113 }, name: "Planck pressure", symbol: "P_P", quantity: "pressure" },
    { factors: { second: -1, factor: 1.85487e43 }, name: "Planck frequency", symbol: "\\nu_P", quantity: "frequency" },
    { factors: { meter: 1, kilogram: 1, second: -1, factor: 6.52413e-24 }, name: "Planck momentum", symbol: "p_P", quantity: "momentum" },
    { factors: { meter: 2, kilogram: 1, second: -3, factor: 3.62831e52 }, name: "Planck power", symbol: "P_P", quantity: "power" },
    **/

];
