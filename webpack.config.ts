import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import NodemonPlugin from 'nodemon-webpack-plugin';
import statements from 'tsx-control-statements';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';

const config = {
  mode: 'development',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['src', 'node_modules'],
  },
};

const client = Object.assign({}, config, {
  name: 'client',
  target: 'web',
  entry: path.resolve(__dirname, 'client/src/app.tsx'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build/client'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      // loader: 'awesome-typescript-loader',
      options: {
        getCustomTransformers: () => ({ before: [statements()] }),
      },
    }, {
      test: /\.(ttf|eot|woff|woff2|svg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    }, {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
  ],
  },
});

const server = Object.assign({}, config, {
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, 'app.ts'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build/server'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new NodemonPlugin(),
  ],
});

module.exports = [client, server];
