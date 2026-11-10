/**
 * Replaces `null` and the empty string with a display value, leaving all other
 * inputs unchanged.
 *
 * @param {*} input The value to check.
 * @param {string} [display="null"] The value to return when `input` is `null`
 * or `""`.
 * @returns {*} The display value for `null` or `""`; otherwise, the original
 * input.
 *
 * @example
 * displayNull(""); // "null"
 * @example
 * displayNull("Hello World"); // "Hello World"
 * @example
 * displayNull("", "empty"); // "empty"
 */
export function displayNull(input, display = "null") {
  if (input === null) return display;
  if (input === "") return display;
  return input;
}
