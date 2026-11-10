import { expect, test } from "vitest";
import { camelCase } from "../src/camelCase.js";

test("works with numbers", () => {
  expect(camelCase("12 feet")).toBe("12Feet");
  expect(camelCase("enable 6h format")).toBe("enable6HFormat");
  expect(camelCase("enable 24H format")).toBe("enable24HFormat");
  expect(camelCase("too legit 2 quit")).toBe("tooLegit2Quit");
  expect(camelCase("walk 500 miles")).toBe("walk500Miles");
  expect(camelCase("xhr2 request")).toBe("xhr2Request");
});

test("handles acronyms", () => {
  for (const string of ["safe HTML", "safeHTML"]) {
    expect(camelCase(string)).toBe("safeHtml");
  }

  for (const string of ["escape HTML entities", "escapeHTMLEntities"]) {
    expect(camelCase(string)).toBe("escapeHtmlEntities");
  }

  for (const string of ["XMLHttpRequest", "XmlHTTPRequest"]) {
    expect(camelCase(string)).toBe("xmlHttpRequest");
  }
});
