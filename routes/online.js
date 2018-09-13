"use strict";

const express = require("express");
const router = express.Router();

const settings = require("../lib/settings");
const request = require("request");

router.post("/transfer", function(req, res) {
  const headers = req.headers;
  const body = req.body;

  let options = {
    url: `${settings.base_url}online/v1/transfers/single`,
    headers: {
      Authorization: headers.authorization,
      Accept: headers.accept,
      "x-ibm-client-id": settings.client_id,
      "x-ibm-client-secret": settings.client_secret
    },
    method: "POST",
    body: JSON.stringify(body)
  };

  request(options, (error, response, body) => {
    if (error) {
      res.status(400).send(error);
    } else if (response.error) {
      res.status(400).send(JSON.parse(body));
    } else {
      res.status(200).send(JSON.parse(body));
    }
    res.end();
  });
});

module.exports = router;
