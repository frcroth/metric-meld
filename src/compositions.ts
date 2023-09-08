export let base = {
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
  name: 'base',
  symbol: '1',
};

export let baseUnits = [
  { factors: { second: 1 }, name: 'second', symbol: 's' },
  { factors: { meter: 1 }, name: 'meter', symbol: 'm' },
  { factors: { kilogram: 1 }, name: 'kilogram', symbol: 'kg' },
  { factors: { ampere: 1 }, name: 'ampere', symbol: 'A' },
  { factors: { kelvin: 1 }, name: 'Kelvin', symbol: 'K' },
  { factors: { mole: 1 }, name: 'mole', symbol: 'mol' },
  { factors: { candela: 1 }, name: 'candela', symbol: 'can' },
  { factors: { factor: 10 }, name: 'deca', symbol: '\\cdot 10' },
];

export let compositions = [
  { factors: { second: -1 }, name: 'hertz', symbol: 'Hz', unlockable: true, quantity: "frequency" },
  {
    factors: { second: -2, kilogram: 1, meter: 1 },
    name: 'newton',
    symbol: 'N',
    unlockable: true, quantity: "force"
  },
  {
    factors: { second: -2, kilogram: 1, meter: -1 },
    name: 'pascal',
    symbol: 'Pa',
    unlockable: true,
    quantity: "pressure"
  },
  {
    factors: { kilogram: 1, meter: 2, second: -2 },
    name: 'joule',
    symbol: 'J',
    unlockable: true,
    quantity: "work/energy"
  },
  {
    factors: { kilogram: 1, meter: 2, second: -3 },
    name: 'watt',
    symbol: 'W',
    unlockable: true,
    quantity: "power"
  },
  { factors: { second: 1, ampere: 1 }, name: 'coulomb', symbol: 'C', unlockable: true, quantity: "electric charge" },
  {
    factors: { kilogram: 1, meter: 2, seconds: -3, ampere: -1 },
    name: 'volt',
    symbol: 'V',
    unlockable: true,
    quantity: "voltage"
  },
  {
    factors: { kilogram: -1, meter: -2, seconds: 4, ampere: 2 },
    name: 'farad',
    symbol: 'F',
    unlockable: true,
    quantity: "electrical capacitance"
  },
  {
    factors: { kilogram: 1, meter: 2, seconds: -3, ampere: -2 },
    name: 'ohm',
    symbol: 'Ω',
    unlockable: true,
    quantity: "electrical resistance"
  },
  {
    factors: { kilogram: -1, meter: -2, seconds: 3, ampere: 2 },
    name: 'siemens',
    symbol: 'S',
    unlockable: true,
    quantity: "electrical conductance"
  },
  {
    factors: { kilogram: 1, meter: 2, seconds: -2, ampere: -1 },
    name: 'weber',
    symbol: 'Wb',
    unlockable: true,
    quantity: "magnetic flux"
  },
  {
    factors: { kilogram: 1, seconds: -2, ampere: -1 },
    name: 'tesla',
    symbol: 'T',
    unlockable: true,
    quantity: "magnetic induction"
  },
  {
    factors: { kilogram: 1, meter: 2, seconds: -2, ampere: -2 },
    name: 'henry',
    symbol: 'H',
    unlockable: true,
    quantity: "electrical inductance"
  },
  {
    factors: { mol: 1, seconds: -1 }, name: 'katal', symbol: 'kat',
    unlockable: true,
    quantity: "catalytic activity"
  },
  {
    factors: { candela: 1, meter: -2 }, name: 'lux', symbol: 'lx',
    unlockable: true,
    quantity: "illuminance"
  },
  { factors: { meter: 2, factor: 10000 }, name: 'hectare', symbol: 'ha' },
  { factors: { kilogram: 1, factor: 1000 }, name: 'tonne', symbol: 't' },
  { factors: { kilogram: 1, factor: 1e-3 }, name: 'gram', symbol: 'g' },
  { factors: { meter: 1, second: -1 }, name: 'meters per second', symbol: '\\frac{m}{s}', quantity: 'velocity' },
  { factors: { meter: 3, factor: 1e-3 }, name: 'liter', symbol: 'l', quantity: 'volume' },
  { factors: { meter: -1 }, name: 'reciprocal meter', symbol: 'm^{-1}', quantity: 'spatial frequency' },
  { factors: { meter: -3, kilogram: 1 }, name: 'kilogram per cubic meter', symbol: '\\frac{kg}{m^3}', quantity: 'density' },
];
