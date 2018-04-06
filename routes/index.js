var express = require('express');
var router = express.Router();

var wechat = require('./wechat');

/* GET home page. */
router.use('/wechat', wechat);

module.exports = router;
