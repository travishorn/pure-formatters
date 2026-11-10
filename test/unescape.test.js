import { expect, test } from "vitest";
import { escape } from "../src/escape.js";
import { unescape } from "../src/unescape.js";

const escaped = "&amp;&lt;&gt;&quot;&#39;/";
const unescaped = `&<>"'/`;

test("unescapes entities in order", () => {
  expect(unescape("&amp;lt;")).toBe("&lt;");
});

test("unescapes the supported HTML entities", () => {
  expect(unescape(escaped + escaped)).toBe(unescaped + unescaped);
});

test("returns strings with nothing to unescape unchanged", () => {
  expect(unescape("abc")).toBe("abc");
});

test("unescapes the characters handled by escape", () => {
  expect(unescape(escape(unescaped))).toBe(unescaped);
});

test.each(["&#96;", "&#x2F;"])("does not unescape %s", (entity) => {
  expect(unescape(entity)).toBe(entity);
});
