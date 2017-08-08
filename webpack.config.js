const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const extractSass = new ExtractTextPlugin({
  filename: "css/style.css",
  disable: false,
  allChunks: true
});

module.exports = {
  entry: __dirname + "/src/index",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  watch: true,
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '/img/',
          },
        },
      },
      {
        test: /\.(svg|ttf|eot|woff2?)$/,
        include: [
          path.resolve(__dirname, "src/fonts")
        ],
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '/fonts/'
          },
        },
      },
      {
        test: /\.js$|\.jsx$/,
        use: {loader: 'babel-loader'}
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          fallback:  'style-loader',
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.html$/,
        use: {loader: 'html-loader'}
      },
      {
        test: /\.svg/,
        include: [
          path.resolve(__dirname, "src/svg")
        ],
        use: {
          loader: 'svg-url-loader',
        }
      }
    ],
  },
  plugins: [
    extractSass
  ]
};