var express = require('express');
var router = express.Router();
var request = require('request');
/**
 * /api
 */

router.get('/testingJson', (req, res, next) => {
    res.json({'ab': 'cd'});
})

/**
 * 获取到code后请求换区openid，拿到openid后保存到数据库成功了才返回openid给前端。
 * 保存openid通过Seven写的脚本服务来完成：localhost：2000/user/*** 接口
 */
router.get('/getOpenId', (req, res, next) => {
    const code = req.query.code;

    const appId = 'wx45c5430dac975c29'

    const appSecret = 'f0ec7e371f1c6afa0dfb34f6cdb196b3'

    console.log("即将向微信发送code换区openID -------------》》》");
    // get openid through code ----------------->> code
    request(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appId}&secret=${appSecret}&code=${code}&grant_type=authorization_code`
        , function (error, response, body) {
        body = JSON.parse(body);

        if (!error && response.statusCode == 200) {
            console.log(body['openid'])
            if(body['openid']){
                // save the openid/userid to mysql ---------------->> openid
                sendQuizingServer(body['openid']).then(() => {
                    res.json(body['openid'])
                }, error => {
                    console.error("openId保存失败", error)
                    res.write('openId保存失败');
                    res.sendStatus(500);
                })

            } else {
                console.error("微信没有返回openid:", body);
                res.sendStatus(500);
            }
        } else {
            console.error("微信请求openId出错：", error)
            res.sendStatus(500);
        }
        console.log("发送code后返回的response:", body);
    })
    // res.json({'你好':'hello'});
});

var sendQuizingServer = function (userid) {
    return new Promise((resolve, reject) => {
        request('http://47.105.49.208:2000/user/' + userid, function (error, response, body) {
            if(!error && response.statusCode === 200){
                console.log("保存userid成功:", body);
                resolve(body);
            } else if (error) {
                reject(error);
            } else {
                reject(response.statusCode);
            }
        })
    })
}
module.exports = router;