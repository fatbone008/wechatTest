var express = require('express');
var router = express.Router();
var request = require('request');
/**
 * /api
 */

router.get('/testingJson', (req, res, next) => {
    res.json({'ab': 'cd'});
})

router.get('/getOpenId', (req, res, next) => {
    const code = req.query.code;

    const appId = 'wx45c5430dac975c29'

    const appSecret = 'f0ec7e371f1c6afa0dfb34f6cdb196b3'

    console.log("即将向微信发送code换区openID -------------》》》");
    request(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appId}&secret=${appSecret}&code=${code}&grant_type=authorization_code`, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the baidu homepage.
        }
        console.log("发送code后返回的response:", body);
    })
    res.json({'你好':'hello'});
});

module.exports = router;