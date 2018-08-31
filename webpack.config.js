<<<<<<< HEAD
import webpack from 'webpack';
import path from 'path';

export default {
  mode: 'development',  
  devServer:{
    contentBase: path.resolve(__dirname, 'src')
  },
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')
  ],
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  module:{
    rules: [      
      {test: /\.js$/, include: path.join(__dirname, 'src'), use: [{ loader: 'babel-loader'}]},
      {test: /(\.css)$/, use: [{ loader: 'style-loader' }, {loader: 'css-loader'}]},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: [{loader: 'file-loader'}]},
      {test: /\.(woff|woff2)$/, use: [{loader: 'url?prefix=font/&limit=5000'}]},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: [{loader: 'url?limit=10000&mimetype=application/octet-stream'}]},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: [{loader: 'url?limit=10000&mimetype=image/svg+xml'}]},
      {test: /\.scss$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader'}]} // compile SASS to CSS, translate CSS to CommonJS, create style nodes from JS strings
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(), // replace modules without browser refresh
    new webpack.NoEmitOnErrorsPlugin() // keep errors from breaking hotreloading (show in console)
  ],
  devtool: 'inline-source-map'
=======
import webpack from 'webpack';
import path from 'path';

export default {
  mode: 'development',  
  devServer:{
    contentBase: path.resolve(__dirname, 'src')
  },
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')
  ],
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  module:{
    rules: [      
      {test: /\.js$/, include: path.join(__dirname, 'src'), use: [{ loader: 'babel-loader'}]},
      {test: /(\.css)$/, use: [{ loader: 'style-loader' }, {loader: 'css-loader'}]},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: [{loader: 'file-loader'}]},
      {test: /\.(woff|woff2)$/, use: [{loader: 'url?prefix=font/&limit=5000'}]},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: [{loader: 'url?limit=10000&mimetype=application/octet-stream'}]},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: [{loader: 'url?limit=10000&mimetype=image/svg+xml'}]},
      {test: /\.scss$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'sass-loader'}]} // compile SASS to CSS, translate CSS to CommonJS, create style nodes from JS strings
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(), // replace modules without browser refresh
    new webpack.NoEmitOnErrorsPlugin() // keep errors from breaking hotreloading (show in console)
  ],
  devtool: 'inline-source-map'
>>>>>>> fc2641cb0f23a39a3e85159a617b456835d0b532
};