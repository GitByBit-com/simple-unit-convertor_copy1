# Simple Unit Convertor

A simple and fast unit conversion library for JavaScript and TypeScript.

## Features

- Convert between mass units (kg, g, pounds, ounces)
- Convert between length units (meters, km, miles, feet, inches)
- Chainable API for easy use
- Zero dependencies
- TypeScript support

## Usage

### Basic conversions

```javascript
import { convert } from 'simple-convert';

// Mass conversions
convert(1, 'kg').to('pounds'); // { value: 2.20462, unit: 'pounds' }
convert(1000, 'g').to('kg'); // { value: 1, unit: 'kg' }

// Length conversions
convert(1, 'meters').to('feet'); // { value: 3.28084, unit: 'feet' }
convert(1, 'km').to('miles'); // { value: 0.621371, unit: 'miles' }
```

### Method chaining

```javascript
convert(1, 'kg').to('g').to('ounces');
// { value: 35.274, unit: 'ounces' }
```

## Supported Units

### Mass
- `kg` - Kilograms
- `g` - Grams
- `pounds` - Pounds
- `ounces` - Ounces

### Length
- `meters` - Meters
- `km` - Kilometers
- `miles` - Miles
- `feet` - Feet
- `inches` - Inches

## API

### `convert(value, unit)`

Returns a conversion result object with:
- `value`: The numeric value
- `unit`: The unit string
- `to(targetUnit)`: Method to convert to another unit

## License

MIT