const path = require('path');

module.exports = {
  entry: {
    main: './src/js/main.js',
    build: './src/js/build.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};