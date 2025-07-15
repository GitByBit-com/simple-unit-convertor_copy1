import { describe, it, expect } from 'vitest';
import { convert } from '../src';

describe('Convert function', () => {
  it('should return a conversion result with value and unit', () => {
    const result = convert(5, 'kg');
    expect(result.value).toBe(5);
    expect(result.unit).toBe('kg');
    expect(typeof result.to).toBe('function');
  });

  it('should allow method chaining', () => {
    const result = convert(1, 'kg').to('g').to('ounces');
    expect(result.value).toBeCloseTo(35.274);
    expect(result.unit).toBe('ounces');
  });

  it('should handle decimal values', () => {
    const result = convert(2.5, 'kg').to('pounds');
    expect(result.value).toBeCloseTo(5.51155);
    expect(result.unit).toBe('pounds');
  });

  it('should handle zero values', () => {
    const result = convert(0, 'meters').to('feet');
    expect(result.value).toBe(0);
    expect(result.unit).toBe('feet');
  });

  it('should handle negative values', () => {
    const result = convert(-5, 'kg').to('pounds');
    expect(result.value).toBeCloseTo(-11.0231);
    expect(result.unit).toBe('pounds');
  });
});