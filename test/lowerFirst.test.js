import { expect, test } from "vitest";
import { lowerFirst } from "../src/lowerFirst.js";

test("converts the first character of a string to lower case", () => {
  expect(lowerFirst("fred")).toBe("fred");
  expect(lowerFirst("Fred")).toBe("fred");
  expect(lowerFirst("FRED")).toBe("fRED");
});
