const path = require('path');

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.cjs.js',
    libraryTarget: 'commonjs2',
  },
  externals: [/^\w.*$/i],
};
