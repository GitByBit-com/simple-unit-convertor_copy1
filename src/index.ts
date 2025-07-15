import {length} from './measures/length';
import {mass} from './measures/mass';
import {ConversionResult, Measure} from './types';


export function convert(value: number, unit: string): ConversionResult {
    return {
        value,
        unit,
        to: (targetUnit: string) => {
            const convertedValue = convertValue(value, unit, targetUnit);
            return convert(convertedValue, targetUnit);
        }
    };
}

function convertValue(value: number, fromUnit: string, toUnit: string): number {
    const fromMeasure = getMeasure(fromUnit);
    const toMeasure = getMeasure(toUnit);

    if (!fromMeasure || !toMeasure || fromMeasure !== toMeasure) {
        return value;
    }

    const fromUnitEntry = findUnitInMeasure(fromMeasure, fromUnit);
    const toUnitEntry = findUnitInMeasure(toMeasure, toUnit);

    if (!fromUnitEntry || !toUnitEntry) {
        return value;
    }

    const fromRatio = fromUnitEntry.ratio;
    const toRatio = toUnitEntry.ratio;

    const baseValue = value / fromRatio;
    return baseValue * toRatio;
}

function getMeasure(unit: string): Measure | null {
    if (findUnitInMeasure(mass, unit)) {
        return mass;
    }
    if (findUnitInMeasure(length, unit)) {
        return length;
    }
    return null;
}

function findUnitInMeasure(measure: Measure, unit: string) {
    return measure.units.find(u =>
        u.names.includes(unit) ||
        (u.symbols && u.symbols.includes(unit))
    );
}
