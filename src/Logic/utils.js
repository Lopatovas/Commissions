// Exponential notation for number formatting.
const formatValue = (value, decimalPlaces) => Number(`${Math.ceil(`${value}e${decimalPlaces}`)}e-${decimalPlaces}`).toFixed(decimalPlaces);

export { formatValue };
