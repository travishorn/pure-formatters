# Pure Formatters

[![Build Status](https://travis-ci.org/travishorn/pure-formatters.svg?branch=master)](https://travis-ci.org/travishorn/pure-formatters)

> A collection of pure JS functions that return formatted data. Useful in any view engine.

## Installation

### Node.js

    > npm install --save pure-formatters

### Browser

    <script src="node_modules/pure-formatters/dist/pure-formatters.js"></script>

    <!-- Or CDN -->
    <script src="https://unpkg.com/pure-formatters/dist/pure-formatters.js"></script>

## Usage

### Browser

    // After adding script tag, the global variable pf is available
    console.log(pf.upperCase('hello world'));

### Node.js

    const pf = require('pure-formatters');

    console.log(pf.upperCase('hello world'));

### React

    import { Component } from 'react';
    import { upperCase } from 'pure-formatters';

    class App extends Component {
      render() {
        return (
          <div>
            {upperCase('hello world')}
          </div>
        );
      }
    }

    export default App;

### Vue

    <template>
      <div>
        {{ msg | upperCase }}
      </div>
    </template>

    <script>
    import { upperCase } from 'pure-formatters';

    export default {
      name: 'component-name',
      data() {
        return { msg: 'hello world' },
      },
      filters: {
        upperCase,
      },
    };
    </script>

## Formatters

| Symbol       | Description                                                                                                                                      | Input                                            | Output                                                 |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|--------------------------------------------------------|
| camelCase    | Converts string to camel case.                                                                                                                   | 'Foo Bar'                                        | 'fooBar'                                               |
|              |                                                                                                                                                  | '--foo-bar--'                                    | 'fooBar'                                               |
|              |                                                                                                                                                  | '\_\_FOO_BAR\_\_'                                | 'fooBar'                                               |
| capitalize   | Converts the first character of string to upper case and the remaining to lower case                                                             | 'FRED'                                           | 'Fred'                                                 |
| deburr       | Deburrs string by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and removing combining diacritical marks.    | 'déjà vu'                                        | 'deja vu'                                              |
| displayNull  | If input is null or '', return 'null'                                                                                                            | ''                                               | 'null'                                                 |
|              |                                                                                                                                                  | 'Hello World'                                    | 'Hello World'                                          |
|              |                                                                                                                                                  | '', 'empty'                                      | 'empty'                                                |
| escape       | Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities.                                              | 'fred, barney, & pebbles'                        | 'fred, barney, &amp; pebbles'                          |
| escapeRegExp | Escapes the RegExp special characters "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", and "\|" in string.                        | '\[lodash\]\(htt&#8203;tps://lodash.com/\)'      | '\\[lodash\\]\\(htt&#8203;tps://lodash\\.com/\\)' |
| kebabCase    | Converts string to kebab case.                                                                                                                   | 'Foo Bar'                                        | 'foo-bar'                                              |
|              |                                                                                                                                                  | 'fooBar'                                         | 'foo-bar'                                              |
|              |                                                                                                                                                  | '\_\_FOO_BAR\_\_'                                | 'foo-bar'                                              |
| lowerCase    | Converts string, as space separated words, to lower case.                                                                                        | '--Foo-Bar--'                                    | 'foo bar'                                              |
|              |                                                                                                                                                  | 'fooBar'                                         | 'foo bar'                                              |
|              |                                                                                                                                                  | '\_\_FOO_BAR\_\_'                                | 'foo bar'                                              |
| lowerFirst   | Converts the first character of string to lower case.                                                                                            | 'Fred'                                           | 'fred'                                                 |
|              |                                                                                                                                                  | 'FRED'                                           | 'fRED'                                                 |
| pad          | Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length. | 'abc', 8                                         | '  abc   '                                             |
|              |                                                                                                                                                  | 'abc', 8, '_-'                                   | '_-abc_-_'                                             |
|              |                                                                                                                                                  | 'abc', 3                                         | 'abc'                                                  |
| sentenceList | Combines array elements with commas and "and"                                                                                                    | ['Bettye Norton']                                | 'Bettye Norton'                                        |
|              |                                                                                                                                                  | ['Bettye Norton', 'Melisa Reed']                 | 'Bettye Norton and Melisa Reed'                        |
|              |                                                                                                                                                  | ['Bettye Norton', 'Melisa Reed', 'Kari Osborne'] | 'Bettye Norton, Melisa Reed, and Kari Osborne'         |
|              |                                                                                                                                                  | [{ name: 'Bettye Norton' }], 'name'              | 'Bettye Norton'                                        |
| upperCase    | Converts string, as space separated words, to upper case.                                                                                        | '--foo-bar'                                      | 'FOO BAR'                                              |
|              |                                                                                                                                                  | 'fooBar'                                         | 'FOO BAR'                                              |
|              |                                                                                                                                                  | '\_\_foo_bar\_\_'                                | 'FOO BAR'                                              |
| usd          | Adds a dollar sign and rounds to 2 decimal places                                                                                                | 1.5                                              | '$1.50'                                                |
|              |                                                                                                                                                  | 150, 'c'                                         | '$1.50'                                                |
| padEnd | Description, input, and output coming soon. | | |
| padStart | Description, input, and output coming soon. | | |
| repeat | Description, input, and output coming soon. | | |
| replace | Description, input, and output coming soon. | | |
| snakeCase | Description, input, and output coming soon. | | |
| startCase | Description, input, and output coming soon. | | |
| toLower | Description, input, and output coming soon. | | |
| toUpper | Description, input, and output coming soon. | | |
| trim | Description, input, and output coming soon. | | |
| trimEnd | Description, input, and output coming soon. | | |
| trimStart | Description, input, and output coming soon. | | |
| truncate | Description, input, and output coming soon. | | |
| unescape | Description, input, and output coming soon. | | |
| upperFirst | Description, input, and output coming soon. | | |

## Contributing

See [CONTRIBUTING.md](https://github.com/travishorn/pure-formatters/blob/master/CONTRIBUTING.md)
