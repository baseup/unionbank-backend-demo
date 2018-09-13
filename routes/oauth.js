"use strict";

const express = require("express");
const router = express.Router();

const settings = require("../lib/settings");
const request = require("request");

router.get("/redirect", function(req, res, next) {
  //access token will be processed here

  //check if there is code given
  if (typeof req.query.code !== "undefined") {
    //build the request
    let options = {
      url: `${settings.base_url}/convergent/v1/oauth2/token`, //set the url
      headers: {
        "content-type": "	application/x-www-form-urlencoded",
        accept: "text/html"
      },
      method: "POST",
      form: {
        client_id: settings.client_id,
        code: req.query.code,
        redirect_uri:
          "https://unionbank-backend-demo.herokuapp.com/oauth/redirect",
        grant_type: "authorization_code"
      }
    };
    request(options, function(err, response, body) {
      if (!err) {
        console.log("Error", err);
      }
      if (response) {
        //output the result of request
        try {
          res.json(JSON.parse(body)); //parse the body into json
        } catch (e) {
          res.json(e); //if error in parsing
        }
      } else {
        res.send(); //send nothing if nothing is processed
      }
    });
  }
});

router.get("/token", function(req, res, next) {
  if (typeof req.query.code !== "undefined") {
    let options = {
      url: `${settings.base_url}/convergent/v1/oauth2/token`,
      headers: {
        "content-type": "	application/x-www-form-urlencoded",
        accept: "text/html"
      },
      method: "POST",
      form: {
        client_id: settings.client_id,
        code: req.query.code,
        redirect_uri:
          "https://unionbank-backend-demo.herokuapp.com/oauth/redirect",
        grant_type: "authorization_code"
      }
    };
    request(options, function(err, response, body) {
      console.log("RESPONSE: ", response);
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
