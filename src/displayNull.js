export function displayNull(input, display = "null") {
  if (input === null) return display;
  if (input === "") return display;
  return input;
}
