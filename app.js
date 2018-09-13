/* jshint node: true, devel: true */
"use strict";

const cors = require("cors");
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();

const oauth = require("./routes/oauth");
const settings = require("./lib/settings");

app.use("/oauth", oauth);
app.use(cors());
app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.get("/", function(req, res) {
  res.send("Hello world");
});

module.exports = app;
