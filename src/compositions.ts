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
  { factors: { second: -1 }, name: 'hertz', symbol: 'Hz' },
  {
    factors: { second: 2, kilogram: 1, meter: 1 },
    name: 'newton',
    symbol: 'N',
  },
  {
    factors: { second: -2, kilogram: 1, meter: -1 },
    name: 'pascal',
    symbol: 'Pa',
  },
  {
    factors: { kilogram: 1, meter: 2, second: -2 },
    name: 'joule',
    symbol: 'J',
  },
  {
    factors: { kilogram: 1, meter: 2, second: -3 },
    name: 'watt',
    symbol: 'W',
  },
  { factors: { second: 1, ampere: 1 }, name: 'coulomb', symbol: 'C' },
  {
    factors: { kilogram: 1, meter: 2, seconds: -3, ampere: -1 },
    name: 'volt',
    symbol: 'V',
  },
  {
    factors: { kilogram: -1, meter: -2, seconds: 4, ampere: 2 },
    name: 'farad',
    symbol: 'F',
  },
  {
    factors: { kilogram: 1, meter: 2, seconds: -3, ampere: -2 },
    name: 'ohm',
    symbol: 'Ω',
  },
  {
    factors: { kilogram: -1, meter: -2, seconds: 3, ampere: 2 },
    name: 'siemens',
    symbol: 'S',
  },
  {
    factors: { kilogram: 1, meter: 2, seconds: -2, ampere: -1 },
    name: 'weber',
    symbol: 'Wb',
  },
  {
    factors: { kilogram: 1, seconds: -2, ampere: -1 },
    name: 'tesla',
    symbol: 'T',
  },
  {
    factors: { kilogram: 1, meter: 2, seconds: -2, ampere: -2 },
    name: 'henry',
    symbol: 'H',
  },
  { factors: { mol: 1, seconds: -1 }, name: 'katal', symbol: 'kat' },
];
