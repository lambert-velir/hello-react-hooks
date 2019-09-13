export const CELCIUS = "celcius";
export const FAHRENHEIT = "fahrenheit";

const celciusToFahrenheit = celcius => celcius * (9 / 5) + 32;
const fahrenheitToCelcius = fahrenheit => (fahrenheit - 32) * (5 / 9);

export const convert = (scale, value) => {
  return scale === CELCIUS
    ? celciusToFahrenheit(value)
    : fahrenheitToCelcius(value);
};

export const summaryString = (scale, value) => {
  return scale === CELCIUS
    ? `${value}c === ${convert(scale, value)}f`
    : `${value}f === ${convert(scale, value)}c`;
};

export const otherScale = scale => (scale === CELCIUS ? FAHRENHEIT : CELCIUS);
