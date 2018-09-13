"use strict";

const express = require("express");
const router = express.Router();

const settings = require("../lib/settings");
const request = require("request");

router.get("/token", function(req, res) {
  const query = req.query;

  if (query.code !== "undefined") {
    let options = {
      url: `${settings.base_url}convergent/v1/oauth2/token`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
      },
      method: "POST",
      form: {
        client_id: settings.client_id,
        code: query.code,
        grant_type: "authorization_code"
      }
    };

    request(options, function(err, response, body) {
      if (!err) {
        console.log("Error", err);
      }
      if (response) {
        try {
          res.json(JSON.parse(body));
        } catch (e) {
          res.json(e);
        }
      } else {
        res.send();
      }
    });
  }
});

module.exports = router;
