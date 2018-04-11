var config = require('../config/wechat.config');
var access_token;
var https = require('https');

var qingqiu = function() {
    return new Promise((resolve,reject) => {
        https.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxa43458bc62176324&secret=9ff7423489c2d33d535eb0d0f81c59fc`, (res) => {
            console.log('状态码：', res.statusCode);
            console.log('请求头：', res.headers);

            resolve(res);

            res.on('data', (d) => {
                process.stdout.write(d);
            });

        }).on('error', (e) => {
            console.error(e);
            reject(e);
        });
    });
}

module.exports = qingqiu;