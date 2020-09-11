"use strict";
const express = require("express");
const bodyParser = require("body-parser");
var bitcoin = require("bitcoinjs-lib");

const app = express();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var configRouter = require('./routes/index');

app.use('/api', configRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
