# Pure Formatters

A collection of pure JS functions that return formatted data. Useful in any view
engine.

## Installation

### Node.js

```bash
npm install pure-formatters
```

### Browser

```html
<script type="module" src="https://unpkg.com/pure-formatters/index.js"></script>
```

## Usage

```javascript
import { toUpper } from "pure-formatters";

console.log(toUpper("hello world"));
// HELLO WORLD
```

## Formatters

| Symbol       | Description                                                                                                                                   | Input                                            | Output                                            |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------- |
| camelCase    | Converts string to camel case.                                                                                                                | 'Foo Bar'                                        | 'fooBar'                                          |
|              |                                                                                                                                               | '--foo-bar--'                                    | 'fooBar'                                          |
|              |                                                                                                                                               | '\_\_FOO_BAR\_\_'                                | 'fooBar'                                          |
| capitalize   | Converts the first character of string to upper case and the remaining to lower case                                                          | 'FRED'                                           | 'Fred'                                            |
| deburr       | Deburrs string by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and removing combining diacritical marks. | 'déjà vu'                                        | 'deja vu'                                         |
| displayNull  | If input is null or '', return 'null'                                                                                                         | ''                                               | 'null'                                            |
|              |                                                                                                                                               | 'Hello World'                                    | 'Hello World'                                     |
|              |                                                                                                                                               | '', 'empty'                                      | 'empty'                                           |
| escape       | Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities.                                           | 'fred, barney, & pebbles'                        | 'fred, barney, &amp; pebbles'                     |
| escapeRegExp | Escapes the RegExp special characters "^", "$", "", ".", "\*", "+", "?", "(", ")", "[", "]", "{", "}", and "\|" in string.                    | '\[lodash\]\(htt&#8203;tps://lodash.com/\)'      | '\\[lodash\\]\\(htt&#8203;tps://lodash\\.com/\\)' |
| kebabCase    | Converts string to kebab case.                                                                                                                | 'Foo Bar'                                        | 'foo-bar'                                         |
|              |                                                                                                                                               | 'fooBar'                                         | 'foo-bar'                                         |
|              |                                                                                                                                               | '\_\_FOO_BAR\_\_'                                | 'foo-bar'                                         |
| lowerFirst   | Converts the first character of string to lower case.                                                                                         | 'Fred'                                           | 'fred'                                            |
|              |                                                                                                                                               | 'FRED'                                           | 'fRED'                                            |
| sentenceList | Combines array elements with commas and "and"                                                                                                 | ['Bettye Norton']                                | 'Bettye Norton'                                   |
|              |                                                                                                                                               | ['Bettye Norton', 'Melisa Reed']                 | 'Bettye Norton and Melisa Reed'                   |
|              |                                                                                                                                               | ['Bettye Norton', 'Melisa Reed', 'Kari Osborne'] | 'Bettye Norton, Melisa Reed, and Kari Osborne'    |
|              |                                                                                                                                               | [{ name: 'Bettye Norton' }], 'name'              | 'Bettye Norton'                                   |
| usd          | Adds a dollar sign and rounds to 2 decimal places                                                                                             | 1.5                                              | '$1.50'                                           |
|              |                                                                                                                                               | 150, 'c'                                         | '$1.50'                                           |
| snakeCase    | Description, input, and output coming soon.                                                                                                   |                                                  |                                                   |
| startCase    | Description, input, and output coming soon.                                                                                                   |                                                  |                                                   |
| truncate     | Description, input, and output coming soon.                                                                                                   |                                                  |                                                   |
| unescape     | Description, input, and output coming soon.                                                                                                   |                                                  |                                                   |
| upperFirst   | Description, input, and output coming soon.                                                                                                   |                                                  |                                                   |

## Contributing

See
[CONTRIBUTING.md](https://github.com/travishorn/pure-formatters/blob/master/CONTRIBUTING.md)

## Licensee

The MIT License

Copyright 2026 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
