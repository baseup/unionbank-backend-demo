"use strict";

const express = require("express");
const router = express.Router();

const settings = require("../lib/settings");
const request = require("request");

router.post("/sanbox", function(req, res, next) {
  const body = req.body;

  request(
    {
      url: `${settings.ubp.base_url}/sandbox/v1/accounts`,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    },
    (error, response, body) => {
      if (error) {
        res.status(400).send(error);
      } else if (response.error) {
        res.status(400).send(JSON.parse(body));
      } else {
        res.status(200).send(JSON.parse(body));
      }
      res.end();
    }
  );

  res.send({});
});

module.exports = router;
