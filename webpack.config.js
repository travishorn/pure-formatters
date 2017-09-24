const path = require('path');

const NON_REL_IMPORTS = /^\w.*$/i;

module.exports = [{
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'pure-formatters.cjs.js',
    libraryTarget: 'commonjs2',
  },
  externals: [NON_REL_IMPORTS],
}, {
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'pure-formatters.js',
    library: 'pf',
  },
  externals: [NON_REL_IMPORTS],
}];
