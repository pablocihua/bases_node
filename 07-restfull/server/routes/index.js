const express = require('express'),
      app = express();

app.use( require('./upload'));

module.exports = app;
