/* jshint node: true, devel: true */
"use strict";

const cors = require("cors");
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();

const oauth = require("./routes/oauth");
const users = require("./routes/users");
const settings = require("./lib/settings");

app.use(cors());
app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Routes
app.use("/users", users);
app.use("/oauth", oauth);

app.get("/", function(req, res) {
  const query = req.query;
  const redirect_link = `${
    settings.base_url
  }/convergent/v1/oauth2/authorize?client_id=${settings.client_id}&scope=${
    query.scope
  }&response_type=code&redirect_uri=${query.redirect_uri}`;

  res.status(200).send({ link: redirect_link });
});

module.exports = app;
