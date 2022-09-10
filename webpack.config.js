const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'client/src/public/dist/'),
    filename: 'bundle.js',
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
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'client/src/public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
  },
};
