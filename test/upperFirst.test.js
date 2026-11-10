import { expect, test } from "vitest";
import { upperFirst } from "../src/upperFirst.js";

test("converts the first character of a string to upper case", () => {
  expect(upperFirst("fred")).toBe("Fred");
  expect(upperFirst("Fred")).toBe("Fred");
  expect(upperFirst("FRED")).toBe("FRED");
});
