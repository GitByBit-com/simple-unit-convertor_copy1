import { describe, it, expect } from 'vitest';
import { convert } from '../src';

describe('Mass conversions', () => {
  it('should convert kg to grams', () => {
    const result = convert(1, 'kg').to('g');
    expect(result.value).toBe(1000);
    expect(result.unit).toBe('g');
  });

  it('should convert kg to pounds', () => {
    const result = convert(1, 'kg').to('pounds');
    expect(result.value).toBeCloseTo(2.20462);
    expect(result.unit).toBe('pounds');
  });

  it('should convert pounds to kg', () => {
    const result = convert(2.20462, 'pounds').to('kg');
    expect(result.value).toBeCloseTo(1);
    expect(result.unit).toBe('kg');
  });

  it('should convert pounds to g', () => {
    const result = convert(2.20462, 'pounds').to('g');
    expect(result.value).toBeCloseTo(1000);
    expect(result.unit).toBe('g');
  });

  it('should convert grams to ounces', () => {
    const result = convert(1000, 'g').to('ounces');
    expect(result.value).toBeCloseTo(35.274);
    expect(result.unit).toBe('ounces');
  });

  it('should convert ounces to grams', () => {
    const result = convert(35.274, 'ounces').to('g');
    expect(result.value).toBeCloseTo(1000);
    expect(result.unit).toBe('g');
  });

  it('should handle same unit conversion', () => {
    const result = convert(5, 'kg').to('kg');
    expect(result.value).toBe(5);
    expect(result.unit).toBe('kg');
  });
});