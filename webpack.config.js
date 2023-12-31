const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')


module.exports = {
  entry: './src/app.ts',
  target:"node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new NodePolyfillPlugin()],
  mode: 'production'
};