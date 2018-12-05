//"use strict";

const express = require("express");
const session = require('express-session');
//const cronJob = require('cron').CronJob;
const bodyParser = require('body-parser');

//my modules
//const config = require('./config/config');
const router = require('./router/router');
//const dao = require('./dao/dao');
const api = require('./api/api');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));//app can parse form data
app.use(bodyParser.json());//app can parse json

app.use('/public', express.static(__dirname + "/dist"));//share folder 'dist'
app.use("/", router);
app.use("/api", api);

dao.dbConnect();

module.exports = app;