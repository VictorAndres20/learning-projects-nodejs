const express = require('express');
const app = express();

/** User ROUTES */
app.use(require('./UserRoute'));

/** Login ROUTES */
app.use(require('./LoginRoute'));

/** User State ROUTES */
app.use(require('./UserStateRoute'));

/** User State ROUTES */
app.use(require('./ProductRoute'));

// All other routes here
// app.use(otherRoute);

module.exports = app;