/* jshint node: true, devel: true */
"use strict";

const cors = require("cors");
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.get("/", (req, res) => {
  res.send("HELLO HI");
});

app.listen(app.get("port"), () => {
  console.log("Node app is running on port", app.get("port"));
});

module.exports = app;
