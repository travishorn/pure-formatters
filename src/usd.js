/**
 * Formats a numeric amount as US dollars with two decimal places. By default,
 * `amount` is treated as dollars; pass `"c"` as `denomination` to treat it as
 * cents and convert it to dollars first.
 *
 * @param {number|string} amount Amount in dollars, or in cents when
 * `denomination` is `"c"`. Strings are parsed as floating-point numbers.
 * @param {string} [denomination] Use `"c"` to indicate that `amount` is in
 * cents; other values leave it interpreted as dollars.
 * @returns {string} The amount prefixed with `$` and formatted to two decimal
 * places.
 *
 * @example
 * usd(1.5); // "$1.50"
 * @example
 * usd(150, "c"); // "$1.50"
 */
export function usd(amount, denomination) {
  const isCents = denomination === "c";
  const stringAmount = typeof amount === "string" ? amount : amount.toString();

  const nAmount = isCents
    ? parseFloat(stringAmount) / 100
    : parseFloat(stringAmount);

  return `$${nAmount.toFixed(2)}`;
}
