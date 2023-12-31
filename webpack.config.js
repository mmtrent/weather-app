const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
    index: './src/index.js',
    getWeather: './src/getWeather.js',
    getForecast: './src/getForecast.js',
    getSearch: './src/getSearch.js',
    setValues: './src/setValues.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
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
  optimization: {
    runtimeChunk: 'single',
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