import { expect, test } from "vitest";
import { usd } from "../src/usd.js";

test("formats a dollar amount number as USD", () => {
  expect(usd(1.5)).toBe("$1.50");
});

test("formats a cents amount number as USD", () => {
  expect(usd(150, "c")).toBe("$1.50");
});

test("formats a dollar amount string as USD", () => {
  expect(usd("1.5")).toBe("$1.50");
});

test("formats a cents amount string as USD", () => {
  expect(usd("150", "c")).toBe("$1.50");
});

test("rounds amounts with many decimal places to two decimal places", () => {
  expect(usd(1.49623456789)).toBe("$1.50");
});
