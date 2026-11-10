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
import { sentenceList } from "pure-formatters";

const list = ["Bettye Norton", "Melissa Reed", "Kari Osborne"];

sentenceList(list);
// Bettye Norton, Melissa Reed, and Kari Osborne.
```

## Formatters

| Symbol       | Description                                       | Input                                            | Output                                         |
| ------------ | ------------------------------------------------- | ------------------------------------------------ | ---------------------------------------------- |
| displayNull  | If input is null or '', return 'null'             | ''                                               | 'null'                                         |
|              |                                                   | 'Hello World'                                    | 'Hello World'                                  |
|              |                                                   | '', 'empty'                                      | 'empty'                                        |
| sentenceList | Combines array elements with commas and "and"     | ['Bettye Norton']                                | 'Bettye Norton'                                |
|              |                                                   | ['Bettye Norton', 'Melisa Reed']                 | 'Bettye Norton and Melisa Reed'                |
|              |                                                   | ['Bettye Norton', 'Melisa Reed', 'Kari Osborne'] | 'Bettye Norton, Melisa Reed, and Kari Osborne' |
|              |                                                   | [{ name: 'Bettye Norton' }], 'name'              | 'Bettye Norton'                                |
| usd          | Adds a dollar sign and rounds to 2 decimal places | 1.5                                              | '$1.50'                                        |

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
