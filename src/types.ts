export interface ConversionResult {
  value: number;
  unit: string;
  to: (targetUnit: string) => ConversionResult;
}

export enum MeasureKind {
  Mass = 'mass',
  Length = 'length',
}

export type Numeric = number;

export type MeasureEntry = {
  names: string[];
  symbols?: string[];
  ratio: Numeric;
  difference?: Numeric;
};

export type Measure = {
  kind: MeasureKind;
  units: MeasureEntry[];
};