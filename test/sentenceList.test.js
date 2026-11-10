import { expect, test } from "vitest";
import { sentenceList } from "../src/sentenceList.js";

test("returns a string on a single array element", () => {
  expect(sentenceList(["Bettye Norton"])).toBe("Bettye Norton");
});

test('combines two array elements with "and"', () => {
  expect(sentenceList(["Bettye Norton", "Melisa Reed"])).toBe(
    "Bettye Norton and Melisa Reed",
  );
});

test('combines three or more array elements with commas and "and"', () => {
  expect(sentenceList(["Bettye Norton", "Melisa Reed", "Kari Osborne"])).toBe(
    "Bettye Norton, Melisa Reed, and Kari Osborne",
  );
});

test("combines an array of objects using a key", () => {
  expect(
    sentenceList(
      [
        { name: "Bettye Norton" },
        { name: "Melisa Reed" },
        { name: "Kari Osborne" },
      ],
      "name",
    ),
  ).toBe("Bettye Norton, Melisa Reed, and Kari Osborne");

  expect(sentenceList([{ name: "Bettye Norton" }], "name")).toBe(
    "Bettye Norton",
  );

  expect(
    sentenceList([{ name: "Bettye Norton" }, { name: "Melisa Reed" }], "name"),
  ).toBe("Bettye Norton and Melisa Reed");
});
