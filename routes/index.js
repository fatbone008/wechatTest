var express = require('express');
var router = express.Router();
var http = require('http');

var wechat = require('./wechat');

/* GET home page. */
router.use('/wechat', wechat);

router.get('/firstPage', (req, res) => {
    console.log("转发授权页面req: ", req)
    // 使用了superagent来发起请求
    var sreq = http.request({
        host:     'anniesreading.com', // 目标主机
        path:     'firstPage', // 目标路径
        port: '3000',
        method:   req.method // 请求方式
    }, function(sres){
        sres.pipe(res);
        sres.on('end', function(){
            console.log('done');
        });
    });
    sreq.end();
})

module.exports = router;
