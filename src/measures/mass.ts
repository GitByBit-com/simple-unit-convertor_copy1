import { Measure, MeasureKind } from '../types';

export const mass: Measure = {
  kind: MeasureKind.Mass,
  units: [
    { names: ['gram', 'grams'], symbols: ['g'], ratio: 1 },
    { names: ['kilogram', 'kilograms'], symbols: ['kg'], ratio: 0.001 },
    { names: ['pound', 'pounds'], symbols: ['lb', 'lbs'], ratio: 0.00220462 },
    { names: ['ounce', 'ounces'], symbols: ['oz'], ratio: 0.035274 },
  ],
};