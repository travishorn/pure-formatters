/**
 * Formats an array as a sentence-style list, joining the final item with
 * "and". When `key` is provided, the value at that property is used for each
 * item instead of the item itself. An empty array produces an empty string.
 *
 * @param {Array<*>} inputArray Items to format.
 * @param {string} [key] Optional property name to read from each item.
 * @returns {*} The formatted list. For a one-item array, the original item (or
 * its selected property) is returned without string conversion.
 *
 * @example
 * sentenceList(["Bettye Norton"]); // "Bettye Norton"
 * @example
 * sentenceList(["Bettye Norton", "Melisa Reed"]);
 * // "Bettye Norton and Melisa Reed"
 * @example
 * sentenceList(["Bettye Norton", "Melisa Reed", "Kari Osborne"]);
 * // "Bettye Norton, Melisa Reed, and Kari Osborne"
 * @example
 * sentenceList([{ name: "Bettye Norton" }], "name"); // "Bettye Norton"
 */
export function sentenceList(inputArray, key) {
  let output = "";

  if (inputArray.length === 1) {
    if (!key) {
      output = inputArray[0];
    } else {
      output = inputArray[0][key];
    }
  } else if (inputArray.length === 2) {
    if (!key) {
      output = `${inputArray[0]} and ${inputArray[1]}`;
    } else {
      output = `${inputArray[0][key]} and ${inputArray[1][key]}`;
    }
  } else {
    inputArray.forEach((item, i) => {
      if (i === inputArray.length - 1) {
        output += "and ";
      }

      if (!key) {
        output += item;
      } else {
        output += item[key];
      }

      if (inputArray.length !== 2 && i < inputArray.length - 1) {
        output += ", ";
      }
    });
  }

  return output;
}
