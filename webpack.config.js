const path = require('path')


module.exports = {
  entry: {
    server: path.resolve(__dirname, '.', 'src/index.ts'),
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '.', 'build'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.json', '.ts'],
  },
  externalsPresets: { node: true },
  target: 'node',
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: path.resolve(__dirname, 'tsconfig.json'),
        },
      }
    ],
  }
}