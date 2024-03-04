const express = require('express');
const startDB = require('./config/env/db')
const bodyParser = require('body-parser');
const app = express();


startDB()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

module.exports = app;