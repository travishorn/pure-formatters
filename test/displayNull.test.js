import { expect, test } from "vitest";
import { displayNull } from "../src/displayNull.js";

test("returns 'null' on an empty value", () => {
  expect(displayNull("")).toBe("null");
});

test("returns 'null' on a null value", () => {
  expect(displayNull(null)).toBe("null");
});

test("returns the value on a boolean", () => {
  expect(displayNull(true)).toBe(true);
  expect(displayNull(false)).toBe(false);
});

test("returns the value on a number", () => {
  expect(displayNull(150)).toBe(150);
});

test("returns the value on a string", () => {
  expect(displayNull("Hello World")).toBe("Hello World");
});

test("returns undefined on an undefined value", () => {
  expect(displayNull(undefined)).toBe(undefined);
});

test("returns a custom string defined by the second argument", () => {
  expect(displayNull("", "empty")).toBe("empty");
});
