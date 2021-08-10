const path = require('path');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'destination',
      filename: 'remoteEntry.js',
      exposes: {
        './DestinationApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
});
