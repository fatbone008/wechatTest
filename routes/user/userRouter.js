var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/getAccessToken_JsapiTicket', function (req, res, next) {
    console.log('向80端口转发请求access_token');
    // res.redirect('http://anniesreading.com:80/getToken');
    request.get(`http://anniesreading.com:80/getToken`, function (error, response, body) {
        const token = JSON.parse(body);
        if (!error && response.statusCode == 200 && token) {
            res.json(token);
        } else {
            res.write('获取不到access_token');
            res.sendStatus(500);
        }
    });
});

module.exports = router