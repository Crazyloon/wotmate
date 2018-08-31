<<<<<<< HEAD
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  stats: {
    assets: false,
    chunks: false,
    entrypoints: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    timings: true,
    builtAt: false,
    modules: false,
    providedExports: false,
    usedExports: false,
    version: false
  },
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(path.join( __dirname, '../src')));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
=======
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  stats: {
    assets: false,
    chunks: false,
    entrypoints: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    timings: true,
    builtAt: false,
    modules: false,
    providedExports: false,
    usedExports: false,
    version: false
  },
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(path.join( __dirname, '../src')));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
>>>>>>> fc2641cb0f23a39a3e85159a617b456835d0b532
});