var express = require('express');
var router = express.Router();
var http = require('http');

var wechat = require('./wechat');

/* GET home page. */
router.use('/wechat', wechat);

router.get('/firstPage', (req, res) => {
    console.log("转发授权页面req: ", req)
    // 使用了superagent来发起请求
    var superagent = require('superagent');
    // 查询本机ip，这里需要根据实际情况选择get还是post
    var sreq = superagent.get('http://anniesreading.com/firstPage');
    sreq.pipe(res);
    sreq.on('end', function(){
        console.log('done');
    });
})

module.exports = router;
