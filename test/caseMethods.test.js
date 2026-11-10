import { expect, test } from "vitest";
import { camelCase } from "../src/camelCase.js";
import { deburr } from "../src/deburr.js";
import { kebabCase } from "../src/kebabCase.js";
import { snakeCase } from "../src/snakeCase.js";

const strings = [
  "foo bar",
  "Foo bar",
  "foo Bar",
  "Foo Bar",
  "FOO BAR",
  "fooBar",
  "--foo-bar--",
  "__foo_bar__",
];

const burredLetters = [
  ...Array.from({ length: 0x17 }, (_, index) =>
    String.fromCharCode(0x00c0 + index),
  ),
  ...Array.from({ length: 0x1f }, (_, index) =>
    String.fromCharCode(0x00d8 + index),
  ),
  ...Array.from({ length: 0x08 }, (_, index) =>
    String.fromCharCode(0x00f8 + index),
  ),
  ...Array.from({ length: 0x80 }, (_, index) =>
    String.fromCharCode(0x0100 + index),
  ),
];

const postfixes = ["d", "ll", "m", "re", "s", "t", "ve"];
const apostrophes = ["'", "\u2019"];
const operators = ["\xd7", "\xf7"];
const caseMethods = [
  { name: "camelCase", method: camelCase, converted: "fooBar" },
  { name: "kebabCase", method: kebabCase, converted: "foo-bar" },
  { name: "snakeCase", method: snakeCase, converted: "foo_bar" },
];

for (const { name, method, converted } of caseMethods) {
  test(`${name} converts strings to the expected case`, () => {
    for (const string of strings) {
      expect(method(string)).toBe(converted);
    }
  });

  test(`${name} handles double-converting strings`, () => {
    for (const string of strings) {
      expect(method(method(string))).toBe(converted);
    }
  });

  test(`${name} deburrs Latin Unicode letters`, () => {
    for (const [index, letter] of burredLetters.entries()) {
      let expected = deburr(letter).replace(/[\u0027\u2019]/g, "");
      expected = expected.toLowerCase();

      expect(method(letter), `Unicode character at index ${index}`).toBe(
        expected,
      );
    }
  });

  for (const apostrophe of apostrophes) {
    test(`${name} removes contraction apostrophes (${apostrophe})`, () => {
      const actual = postfixes.map((postfix) =>
        method(`a b${apostrophe}${postfix} c`),
      );
      const expected = postfixes.map((postfix) => {
        switch (name) {
          case "camelCase":
            return `aB${postfix}C`;
          case "kebabCase":
            return `a-b${postfix}-c`;
          case "snakeCase":
            return `a_b${postfix}_c`;
        }
      });

      expect(actual).toEqual(expected);
    });
  }

  test(`${name} removes Latin mathematical operators`, () => {
    expect(operators.map((operator) => method(operator))).toEqual(["", ""]);
  });

  test(`${name} coerces values to strings`, () => {
    expect(method(Object("foo bar"))).toBe(converted);
    expect(method({ toString: () => "foo bar" })).toBe(converted);
  });
}
