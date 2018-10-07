import path from 'path';
import { Configuration } from 'webpack';

const LIB = path.resolve('./lib');
const SRC = path.resolve('./src');

const config: Configuration = {
  mode: process.env.NODE_ENV.replace('test', 'development'),
  devtool: 'source-map',
  entry: './src/index.ts',
  output: {
    path: LIB,
    filename: 'index.js',
    library: 'common',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.ts$/,
      include: SRC,
      loader: 'ts-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.ts']
  }
};

export default config;
