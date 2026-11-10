import { expect, test } from "vitest";
import { truncate } from "../src/truncate.js";

const string = "hi-diddly-ho there, neighborino";

test("uses a default length of 30", () => {
  expect(truncate(string)).toBe("hi-diddly-ho there, neighbo...");
});

test("does not truncate when the string is within the given length", () => {
  expect(truncate(string, { length: string.length })).toBe(string);
  expect(truncate(string, { length: string.length + 2 })).toBe(string);
});

test("truncates the string to the given length", () => {
  expect(truncate(string, { length: 24 })).toBe("hi-diddly-ho there, n...");
});

test("supports a custom omission string", () => {
  expect(truncate(string, { omission: " [...]" })).toBe(
    "hi-diddly-ho there, neig [...]",
  );
});

test("coerces nullish omission values to strings", () => {
  expect(truncate(string, { omission: null })).toBe(
    "hi-diddly-ho there, neighbnull",
  );
  expect(truncate(string, { omission: undefined })).toBe(
    "hi-diddly-ho there, nundefined",
  );
});

test("supports a custom length option", () => {
  expect(truncate(string, { length: 4 })).toBe("h...");
});

test("supports string and regular expression separators", () => {
  expect(truncate(string, { length: 24, separator: " " })).toBe(
    "hi-diddly-ho there,...",
  );
  expect(truncate(string, { length: 24, separator: /,? +/ })).toBe(
    "hi-diddly-ho there...",
  );
  expect(truncate(string, { length: 24, separator: /,? +/g })).toBe(
    "hi-diddly-ho there...",
  );
});

test.each([0, -2])("treats length %s as zero", (length) => {
  expect(truncate(string, { length })).toBe("...");
});

test.each([
  ["", "..."],
  [NaN, "..."],
  [4.6, "h..."],
  ["4", "h..."],
])("coerces length %s to an integer", (length, expected) => {
  expect(truncate(string, { length: { valueOf: () => length } })).toBe(
    expected,
  );
});

test("coerces the input string to a string", () => {
  expect(truncate(Object(string), { length: 4 })).toBe("h...");
  expect(truncate({ toString: () => string }, { length: 5 })).toBe("hi...");
});

test("works as an iteratee", () => {
  const actual = [string, string, string].map((value) => truncate(value));

  expect(actual).toEqual(Array(3).fill("hi-diddly-ho there, neighbo..."));
});
