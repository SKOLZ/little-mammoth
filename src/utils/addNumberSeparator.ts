// Gets a number and returns it with a thousands separator
// in the format of the Argentinean locale (es-AR).
// This is useful for displaying large numbers in a more readable format.
// For example, 1000 becomes "1.000" and 1000000 becomes "1.000.000".
export const addNumberSeparator = (value: number): string => {
  return value.toLocaleString("es-AR");
};
