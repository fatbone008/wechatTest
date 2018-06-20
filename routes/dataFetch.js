var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/testingJson', (req, res, next) => {
    res.json({'ab': 'cd'});
})

router.get('/getOpenId', (req, res, next) => {
    const code = req.query.code;

    const appId = 'wx45c5430dac975c29'

    const appSecret = '9ff7423489c2d33d535eb0d0f81c59fc'

    console.log("即将向微信发送code换区openID -------------》》》");
    request(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appId}&secret=${appSecret}&code=${code}&grant_type=authorization_code`, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the baidu homepage.
        }
        console.log("发送code后返回的response:", response);
    })
    res.json({'你好':'hello'});
});

module.exports = router;