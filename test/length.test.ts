import { describe, it, expect } from 'vitest';
import { convert } from '../src';

describe('Length conversions', () => {
  it('should convert meters to kilometers', () => {
    const result = convert(1000, 'meters').to('km');
    expect(result.value).toBe(1);
    expect(result.unit).toBe('km');
  });

  it('should convert kilometers to meters', () => {
    const result = convert(1, 'km').to('meters');
    expect(result.value).toBe(1000);
    expect(result.unit).toBe('meters');
  });

  it('should convert meters to feet', () => {
    const result = convert(1, 'meters').to('feet');
    expect(result.value).toBeCloseTo(3.28084);
    expect(result.unit).toBe('feet');
  });

  it('should convert feet to meters', () => {
    const result = convert(3.28084, 'feet').to('meters');
    expect(result.value).toBeCloseTo(1);
    expect(result.unit).toBe('meters');
  });

  it('should convert inches to meters', () => {
    const result = convert(39.3701, 'inches').to('meters');
    expect(result.value).toBeCloseTo(1);
    expect(result.unit).toBe('meters');
  });

  it('should convert miles to kilometers', () => {
    const result = convert(1, 'miles').to('km');
    expect(result.value).toBeCloseTo(1.60934);
    expect(result.unit).toBe('km');
  });

  it('should handle same unit conversion', () => {
    const result = convert(5, 'meters').to('meters');
    expect(result.value).toBe(5);
    expect(result.unit).toBe('meters');
  });
});