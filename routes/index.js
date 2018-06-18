var express = require('express');
var router = express.Router();
var http = require('http');

var wechat = require('./wechat');

/* GET home page. */
router.use('/wechat', wechat);

router.get('/firstPage', (req, res) => {
    console.log("转发授权页面req: ")
    res.redirect("http://anniesreading.com:3000/firstPage");
})

module.exports = router;
