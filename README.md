# Pure Formatters

A collection of pure JS functions that return formatted data. Useful in any view
engine.

## Using a Package Manager

```bash
npm install pure-formatters
```

```javascript
import { sentenceList } from "pure-formatters";

console.log(sentenceList(["Bettye Norton", "Melissa Reed", "Kari Osborne"]));
// Bettye Norton, Melissa Reed, and Kari Osborne.
```

## In the Browser

```html
<script type="module">
  import { sentenceList } from "https://esm.run/pure-formatters@3";

  console.log(sentenceList(["Bettye Norton", "Melissa Reed", "Kari Osborne"]));
  // Bettye Norton, Melissa Reed, and Kari Osborne.
</script>
```

For full API documentation, visit
[https://travishorn.github.io/pure-formatters](https://travishorn.github.io/pure-formatters).

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
