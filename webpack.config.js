const path = require('path');

module.exports = {
  mode:"production",
  entry: './src/Kernel.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js',
    library: {
      name: 'Kernel',
      type: 'umd',
    }
  },
};