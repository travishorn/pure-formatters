import assert from "assert";
import { camelCase } from "../src/camelCase.js";
import { capitalize } from "../src/capitalize.js";
import { deburr } from "../src/deburr.js";
import { displayNull } from "../src/displayNull.js";
import { escape } from "../src/escape.js";
import { escapeRegExp } from "../src/escapeRegExp.js";
import { kebabCase } from "../src/kebabCase.js";
import { lowerFirst } from "../src/lowerFirst.js";
import { sentenceList } from "../src/sentenceList.js";
import { snakeCase } from "../src/snakeCase.js";
import { startCase } from "../src/startCase.js";
import { truncate } from "../src/truncate.js";
import { unescape } from "../src/unescape.js";
import { upperFirst } from "../src/upperFirst.js";
import { usd } from "../src/usd.js";

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
      assert.equal(displayNull(""), "null");
    });

    it("should return 'null' on a null value", () => {
      assert.equal(displayNull(null), "null");
    });

    it("should return the value on a boolean", () => {
      assert.equal(displayNull(true), true);
      assert.equal(displayNull(false), false);
    });

    it("should return the value on a number", () => {
      assert.equal(displayNull(150), 150);
    });

    it("should return the value on a string", () => {
      assert.equal(displayNull("Hello World"), "Hello World");
    });

    it("should return undefined on an undefined value", () => {
      assert.equal(displayNull(undefined), undefined);
    });

    it("should return a custom string defined by second argument", () => {
      assert.equal(displayNull("", "empty"), "empty");
    });
  });

  describe("#escape()", () => {
    it(`should convert the characters "&", "<", ">", '"', and "'" in a string to their corresponding
        HTML entities`, () => {
      assert.equal(
        escape("fred, barney, & pebbles"),
        "fred, barney, &amp; pebbles",
      );
    });
  });

  describe("#escapeRegExp()", () => {
    it(`should escape the RegExp special characters "^", "$", "", ".", "*", "+", "?", "(", ")", "[",
        "]", "{", "}", and "|" in a string`, () => {
      assert.equal(
        escapeRegExp("[lodash](https://lodash.com/)"),
        "\\[lodash\\]\\(https://lodash\\.com/\\)",
      );
    });
  });

  describe("#kebabCase()", () => {
    it("should convert a string to kebab case", () => {
      assert.equal(kebabCase("Foo Bar"), "foo-bar");
      assert.equal(kebabCase("fooBar"), "foo-bar");
      assert.equal(kebabCase("__FOO_BAR__"), "foo-bar");
    });
  });

  describe("#lowerFirst()", () => {
    it("should convert the first character of a string to lower case", () => {
      assert.equal(lowerFirst("Fred"), "fred");
      assert.equal(lowerFirst("FRED"), "fRED");
    });
  });

  describe("#sentenceList", () => {
    it("should return a string on a single array element", () => {
      assert.equal(sentenceList(["Bettye Norton"]), "Bettye Norton");
    });

    it('should return a string combining two array elements with "and"', () => {
      assert.equal(
        sentenceList(["Bettye Norton", "Melisa Reed"]),
        "Bettye Norton and Melisa Reed",
      );
    });

    it('should return a string combining three+ array elements with commas and "and"', () => {
      assert.equal(
        sentenceList(["Bettye Norton", "Melisa Reed", "Kari Osborne"]),
        "Bettye Norton, Melisa Reed, and Kari Osborne",
      );
    });

    it("should return a string combining array of objects on a key", () => {
      assert.equal(
        sentenceList(
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
      assert.equal(snakeCase("Foo Bar"), "foo_bar");
      assert.equal(snakeCase("fooBar"), "foo_bar");
      assert.equal(snakeCase("--FOO-BAR--"), "foo_bar");
    });
  });

  describe("#startCase()", () => {
    it("should convert a string to start case", () => {
      assert.equal(startCase("--foo-bar--"), "Foo Bar");
      assert.equal(startCase("fooBar"), "Foo Bar");
      assert.equal(startCase("__FOO_BAR__"), "FOO BAR");
    });
  });

  describe("#truncate()", () => {
    it(`Truncates string if it's longer than the given maximum string length. The last characters of
        the truncated string are replaced with the omission string which defaults to
        "..."`, () => {
      assert.equal(
        truncate("hi-diddly-ho there, neighborino"),
        "hi-diddly-ho there, neighbo...",
      );

      assert.equal(
        truncate("hi-diddly-ho there, neighborino", {
          length: 24,
          separator: " ",
        }),
        "hi-diddly-ho there,...",
      );

      assert.equal(
        truncate("hi-diddly-ho there, neighborino", {
          length: 24,
          separator: /,? +/,
        }),
        "hi-diddly-ho there...",
      );

      assert.equal(
        truncate("hi-diddly-ho there, neighborino", {
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
        unescape("fred, barney, &amp; pebbles"),
        "fred, barney, & pebbles",
      );
    });
  });

  describe("#upperFirst()", () => {
    it("should convert the first character of a string to upper case", () => {
      assert.equal(upperFirst("fred"), "Fred");
      assert.equal(upperFirst("FRED"), "FRED");
    });
  });

  describe("#usd()", () => {
    it("should return a string formatted as USD from a dollar amount number", () => {
      assert.equal(usd(1.5), "$1.50");
    });

    it("should return a string formatted as USD from a cents amount number", () => {
      assert.equal(usd(150, "c"), "$1.50");
    });

    it("should return a string formatted as USD from a dollar amount string", () => {
      assert.equal(usd("1.5"), "$1.50");
    });

    it("should return a string formatted as USD from a cents amount string", () => {
      assert.equal(usd("150", "c"), "$1.50");
    });

    it("should return a string formatted as USD with many decimal places", () => {
      assert.equal(usd(1.49623456789), "$1.50");
    });
  });
});
