import { expect, test } from "vitest";
import { escapeRegExp } from "../src/escapeRegExp.js";

const unescaped = "^$.*+?()[]{}|\\";
const escaped = "\\^\\$\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|\\\\";

test("escapes RegExp special characters", () => {
  expect(escapeRegExp(unescaped + unescaped)).toBe(escaped + escaped);
});

test("returns strings with nothing to escape unchanged", () => {
  expect(escapeRegExp("abc")).toBe("abc");
});

test.each([undefined, null, ""])("returns an empty string for %s", (value) => {
  expect(escapeRegExp(value)).toBe("");
});
