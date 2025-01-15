const express = require('express');
const bodyParser  = require('body-parser');
const servicesRoutes = require('./routes/services');
const app = express();

app.use(bodyParser.json());
app.use('/api',servicesRoutes);

module.exports = app;