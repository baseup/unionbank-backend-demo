"use strict";

const express = require("express");
const router = express.Router();

const settings = require("../lib/settings");
const request = require("request");

router.post("/sandbox", function(req, res) {
  const body = req.body;

  request(
    {
      url: `${settings.base_url}/sandbox/v1/accounts`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-ibm-client-id": settings.client_id,
        "x-ibm-client-secret": settings.client_secret
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
});

router.get("/balance", function(req, res) {
  const headers = req.headers;

  request(
    {
      url: `${settings.base_url}/accounts/v1/balances`,
      method: "GET",
      headers: {
        Authorization: headers.authorization,
        "Content-Type": headers["content-type"],
        "x-ibm-client-id": settings.client_id,
        "x-ibm-client-secret": settings.client_secret
      }
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
});

router.get("/information", function(req, res) {
  const headers = req.headers;

  request(
    {
      url: `${settings.base_url}/accounts/v1/info`,
      method: "GET",
      headers: {
        Authorization: headers.authorization,
        Accept: headers["content-type"],
        "x-ibm-client-id": settings.client_id,
        "x-ibm-client-secret": settings.client_secret
      }
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
});

module.exports = router;
