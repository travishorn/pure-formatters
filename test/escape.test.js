import { expect, test } from "vitest";
import { escape } from "../src/escape.js";

const escaped = "&amp;&lt;&gt;&quot;&#39;/";
const unescaped = `&<>"'/`;

test("escapes HTML characters", () => {
  expect(escape(unescaped + unescaped)).toBe(escaped + escaped);
});

test("returns strings with nothing to escape unchanged", () => {
  expect(escape("abc")).toBe("abc");
});

test("escapes the same characters handled by unescape", () => {
  expect(escape(unescaped)).toBe(escaped);
});

test.each(["`", "/"])("does not escape %s", (character) => {
  expect(escape(character)).toBe(character);
});
