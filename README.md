# Pure Formatters

> A collection of pure JS functions that return formatted data. Useful in any view engine.

## Installation

    > npm install --save pure-formatters

## Usage

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

| Symbol    | Description                                  | Input         | Output        |
|-----------|----------------------------------------------|---------------|---------------|
| upperCase | Converts string to all upper case characters | 'hello world' | 'HELLO WORLD' |
| lowerCase | Converts string to all lower case characters | 'Hello World' | 'hello world' |
