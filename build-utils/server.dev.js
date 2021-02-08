const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const config = require('./webpack.dev.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware for webpack.dev.js
app.use(webpackDevMiddleware(compiler));
app.use(express.static(DIST_DIR));

app.get('/api', (req, res) => {
  res.send({
		foo: 'bar',
		bar: 'foo'
	});
});

app.get('/', (req, res) => {
 res.sendFile(HTML_FILE);
});

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});
