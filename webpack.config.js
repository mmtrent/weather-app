const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
    index: './src/index.js',
    getWeather: './src/getWeather.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Weather',
          template: './src/index.html'
        }),
      ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};