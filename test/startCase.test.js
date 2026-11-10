import { expect, test } from "vitest";
import { startCase } from "../src/startCase.js";

test("uppercases only the first character of each word", () => {
  expect(startCase("--foo-bar--")).toBe("Foo Bar");
  expect(startCase("fooBar")).toBe("Foo Bar");
  expect(startCase("__FOO_BAR__")).toBe("FOO BAR");
  expect(startCase("foo123bar345")).toBe("Foo 123 Bar 345");
});
