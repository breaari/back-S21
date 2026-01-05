const express = require('express');
//const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const server = express();
const cors = require('cors')
const path = require('path');

server.use(
  '/assets',
  express.static(path.join(__dirname, 'assets'))
);

server.use(bodyParser.json());
server.use(morgan("dev"));
server.use(cors());
server.use('/', routes);

module.exports = server;