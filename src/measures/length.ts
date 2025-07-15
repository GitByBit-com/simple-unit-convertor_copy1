import { Measure, MeasureKind } from '../types';

export const length: Measure = {
  kind: MeasureKind.Length,
  units: [
    { names: ['meter', 'meters'], symbols: ['m'], ratio: 1 },
    { names: ['kilometer', 'kilometers'], symbols: ['km'], ratio: 0.001 },
    { names: ['mile', 'miles'], symbols: ['mi'], ratio: 0.000621371 },
    { names: ['foot', 'feet'], symbols: ['ft'], ratio: 3.28084 },
    { names: ['inch', 'inches'], symbols: ['in'], ratio: 39.3701 },
  ],
};