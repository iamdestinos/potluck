const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    bundle: path.resolve(__dirname, 'client/src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'client/src/public/dist/'),
    filename: '[name].js',
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
  plugins: [
    new Dotenv({
      systemvars: true,
    }),
  ],
};
