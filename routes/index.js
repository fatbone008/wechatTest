var express = require('express');
var router = express.Router();
var http = require('http');

var wechat = require('./wechat');

/* GET home page. */
router.use('/wechat', wechat);

/**
 *  获取微信网页授权的code和state，获取到后转发到首页，带着code和state参数去访问首页.
 *  首页可以拿这两个参数向后台发送获取openId的api
 *  这样就登记了用户的userId
 */
router.get('/firstPage', (req, res) => {
    console.log("转发授权页面req: ")
    res.redirect("http://anniesreading.com:3000/firstPage");
})

module.exports = router;
