# Pure Formatters

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

| Symbol       | Description                                       | Input                                            | Output                                         |
|--------------|---------------------------------------------------|--------------------------------------------------|------------------------------------------------|
| lowerCase    | Converts string to all lower case characters      | 'Hello World'                                    | 'hello world'                                  |
| sentenceList | Combines array elements with commas and "and"     | ['Bettye Norton']                                | 'Bettye Norton'                                |
|              |                                                   | ['Bettye Norton', 'Melisa Reed']                 | 'Bettye Norton and Melisa Reed'                |
|              |                                                   | ['Bettye Norton', 'Melisa Reed', 'Kari Osborne'] | 'Bettye Norton, Melisa Reed, and Kari Osborne' |
|              |                                                   | [{ name: 'Bettye Norton' }], 'name'              | 'Bettye Norton'                                |
| upperCase    | Converts string to all upper case characters      | 'hello world'                                    | 'HELLO WORLD'                                  |
| usd          | Adds a dollar sign and rounds to 2 decimal places | 1.5                                              | '$1.50'                                        |
|              |                                                   | 150, 'c'                                         | '$1.50'                                        |

## Contributing

See [CONTRIBUTING.md](https://github.com/travishorn/pure-formatters/blob/master/CONTRIBUTING.md)
