import path from 'path';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';

const { NODE_ENV } = process.env;

export const setupWebpack = (app, srcPath, destPath)=>{
  app.use(middleware(webpack(webpackConfig(srcPath, destPath)),{
    publicPath: destPath,
    writeToDisk: true
  }));
}

const webpackConfig = (srcPath, destPath) => {
  return {
    mode: NODE_ENV || 'development',
    entry: path.resolve(srcPath, 'index.js'),
    output: {
      path: destPath,
      filename: 'init.js'
    },
    module: {
      rules: [{
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }]
    }
  };
};
