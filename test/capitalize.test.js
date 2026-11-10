import { expect, test } from "vitest";
import { capitalize } from "../src/capitalize.js";

test("should capitalize the first character of a string", () => {
  expect(capitalize("fred")).toBe("Fred");
  expect(capitalize("Fred")).toBe("Fred");
  expect(capitalize(" fred")).toBe(" fred");
});

test("returns an empty string for an empty string", () => {
  expect(capitalize("")).toBe("");
});
