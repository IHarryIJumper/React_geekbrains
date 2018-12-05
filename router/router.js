//modele router -
const app = require("../app");
const express = require("express");
const router = express.Router();
const dao = require('../dao/dao');//db module

router.get('/', function (req, res) {   
    //res.sendFile('index.html', {root:});    
    res.sendFile('index.html', {root: "./dist"});    
});


module.exports = router;