const express = require('express');

const app = express();

app.use(require('./LoginRotes'));
app.use(require('./GoogleRoutes'));

module.exports = app;