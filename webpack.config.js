const path = require('path');
const Dotenv = require('dotenv-webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    bundle: path.resolve(__dirname, 'client/src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'client/src/public/dist/'),
    filename: '[name].js',
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  mode: 'development',
  // devServer: {
  //   static: {
  //     directory: path.resolve(__dirname, 'dist'),
  //   },
  //   port: 3000,
  //   compress: true,
  //   client: {
  //     overlay: true,
  //   },
  //   open: true,
  //   hot: true,
  //   historyApiFallback: true,
  // },
  plugins: [
    new Dotenv({
      systemvars: true,
    }),
    // new HtmlWebpackPlugin({
    //   title: 'potluck',
    //   filename: 'index.html',
    //   template: 'client/src/public/template.html',
    // }),
  ],
};
