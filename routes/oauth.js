"use strict";

const express = require("express");
const router = express.Router();

const settings = require("../lib/settings");
const request = require("request");

router.get("/redirect", function(req, res, next) {
  res.send({});
});

module.exports = router;
