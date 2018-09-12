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
  res.send("HELLO WORLD");
});

app.get("/login", (req, res) => {
  const body = req.body;

  request(
    {
      uri: `https://api-uat.unionbankph.com/partners/sb/convergent/v1/oauth2/authorize?client_id=${
        body.client_id
      }&response_type=${body.response_type}&scope=${body.scope}&redirect_uri=${
        body.redirect_uri
      }`,
      method: "GET"
    },
    (error, response) => {
      if (error) {
        res.send(error);
      } else if (response) {
        res.send(response);
      }
    }
  );
});

app.listen(app.get("port"), () => {
  console.log("Node app is running on port", app.get("port"));
});

module.exports = app;
