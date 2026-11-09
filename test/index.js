import assert from "assert";
import pf from "../src/index.js";
import { camelCase } from "../src/camelCase.js";
import { capitalize } from "../src/capitalize.js";
import { deburr } from "../src/deburr.js";

describe("pureFormatters", () => {
  describe("#camelCase()", () => {
    it("should convert a string to camel case", () => {
      assert.equal(camelCase("Foo Bar"), "fooBar");
      assert.equal(camelCase("--foo-bar--"), "fooBar");
      assert.equal(camelCase("__FOO_BAR__"), "fooBar");
    });
  });

  describe("#capitalize()", () => {
    it(`should convert the first character of string to upper case and the remaining to lower
        case.`, () => {
      assert.equal(capitalize("FRED"), "Fred");
    });
  });

  describe("#deburr()", () => {
    it(`should deburr a string by converting Latin-1 Supplement and Latin Extended-A letters to
        basic Latin letters and removing combining diacritical marks.`, () => {
      assert.equal(deburr("déjà vu"), "deja vu");
    });
  });

  describe("#displayNull()", () => {
    it("should return 'null' on an empty value", () => {
      assert.equal(pf.displayNull(""), "null");
    });

    it("should return 'null' on a null value", () => {
      assert.equal(pf.displayNull(null), "null");
    });

    it("should return the value on a boolean", () => {
      assert.equal(pf.displayNull(true), true);
      assert.equal(pf.displayNull(false), false);
    });

    it("should return the value on a number", () => {
      assert.equal(pf.displayNull(150), 150);
    });

    it("should return the value on a string", () => {
      assert.equal(pf.displayNull("Hello World"), "Hello World");
    });

    it("should return undefined on an undefined value", () => {
      assert.equal(pf.displayNull(undefined), undefined);
    });

    it("should return a custom string defined by second argument", () => {
      assert.equal(pf.displayNull("", "empty"), "empty");
    });
  });

  describe("#escape()", () => {
    it(`should convert the characters "&", "<", ">", '"', and "'" in a string to their corresponding
        HTML entities`, () => {
      assert.equal(
        pf.escape("fred, barney, & pebbles"),
        "fred, barney, &amp; pebbles",
      );
    });
  });

  describe("#escapeRegExp()", () => {
    it(`should escape the RegExp special characters "^", "$", "", ".", "*", "+", "?", "(", ")", "[",
        "]", "{", "}", and "|" in a string`, () => {
      assert.equal(
        pf.escapeRegExp("[lodash](https://lodash.com/)"),
        "\\[lodash\\]\\(https://lodash\\.com/\\)",
      );
    });
  });

  describe("#kebabCase()", () => {
    it("should convert a string to kebab case", () => {
      assert.equal(pf.kebabCase("Foo Bar"), "foo-bar");
      assert.equal(pf.kebabCase("fooBar"), "foo-bar");
      assert.equal(pf.kebabCase("__FOO_BAR__"), "foo-bar");
    });
  });

  describe("#lowerFirst()", () => {
    it("should convert the first character of a string to lower case", () => {
      assert.equal(pf.lowerFirst("Fred"), "fred");
      assert.equal(pf.lowerFirst("FRED"), "fRED");
    });
  });

  describe("#sentenceList", () => {
    it("should return a string on a single array element", () => {
      assert.equal(pf.sentenceList(["Bettye Norton"]), "Bettye Norton");
    });

    it('should return a string combining two array elements with "and"', () => {
      assert.equal(
        pf.sentenceList(["Bettye Norton", "Melisa Reed"]),
        "Bettye Norton and Melisa Reed",
      );
    });

    it('should return a string combining three+ array elements with commas and "and"', () => {
      assert.equal(
        pf.sentenceList(["Bettye Norton", "Melisa Reed", "Kari Osborne"]),
        "Bettye Norton, Melisa Reed, and Kari Osborne",
      );
    });

    it("should return a string combining array of objects on a key", () => {
      assert.equal(
        pf.sentenceList(
          [
            { name: "Bettye Norton" },
            { name: "Melisa Reed" },
            { name: "Kari Osborne" },
          ],
          "name",
        ),
        "Bettye Norton, Melisa Reed, and Kari Osborne",
      );
    });
  });

  describe("#snakeCase()", () => {
    it("should convert a string to snake case", () => {
      assert.equal(pf.snakeCase("Foo Bar"), "foo_bar");
      assert.equal(pf.snakeCase("fooBar"), "foo_bar");
      assert.equal(pf.snakeCase("--FOO-BAR--"), "foo_bar");
    });
  });

  describe("#startCase()", () => {
    it("should convert a string to start case", () => {
      assert.equal(pf.startCase("--foo-bar--"), "Foo Bar");
      assert.equal(pf.startCase("fooBar"), "Foo Bar");
      assert.equal(pf.startCase("__FOO_BAR__"), "FOO BAR");
    });
  });

  describe("#truncate()", () => {
    it(`Truncates string if it's longer than the given maximum string length. The last characters of
        the truncated string are replaced with the omission string which defaults to
        "..."`, () => {
      assert.equal(
        pf.truncate("hi-diddly-ho there, neighborino"),
        "hi-diddly-ho there, neighbo...",
      );

      assert.equal(
        pf.truncate("hi-diddly-ho there, neighborino", {
          length: 24,
          separator: " ",
        }),
        "hi-diddly-ho there,...",
      );

      assert.equal(
        pf.truncate("hi-diddly-ho there, neighborino", {
          length: 24,
          separator: /,? +/,
        }),
        "hi-diddly-ho there...",
      );

      assert.equal(
        pf.truncate("hi-diddly-ho there, neighborino", {
          omission: " [...]",
        }),
        "hi-diddly-ho there, neig [...]",
      );
    });
  });

  describe("#unescape()", () => {
    it(`should converts the HTML entities &amp;, &lt;, &gt;, &quot;, and &#39; in string to their
        corresponding characters`, () => {
      assert.equal(
        pf.unescape("fred, barney, &amp; pebbles"),
        "fred, barney, & pebbles",
      );
    });
  });

  describe("#upperFirst()", () => {
    it("should convert the first character of a string to upper case", () => {
      assert.equal(pf.upperFirst("fred"), "Fred");
      assert.equal(pf.upperFirst("FRED"), "FRED");
    });
  });

  describe("#usd()", () => {
    it("should return a string formatted as USD from a dollar amount number", () => {
      assert.equal(pf.usd(1.5), "$1.50");
    });

    it("should return a string formatted as USD from a cents amount number", () => {
      assert.equal(pf.usd(150, "c"), "$1.50");
    });

    it("should return a string formatted as USD from a dollar amount string", () => {
      assert.equal(pf.usd("1.5"), "$1.50");
    });

    it("should return a string formatted as USD from a cents amount string", () => {
      assert.equal(pf.usd("150", "c"), "$1.50");
    });

    it("should return a string formatted as USD with many decimal places", () => {
      assert.equal(pf.usd(1.49623456789), "$1.50");
    });
  });
});
