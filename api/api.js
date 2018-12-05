const express = require("express");
const request = require('request-promise');
const dao = require('../dao/dao');//db module
const api = express.Router();

api.get('/getComments', function(req, res) {
   res.send("getComments");
});

module.exports = api;

