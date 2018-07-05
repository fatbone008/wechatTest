var config = require('../config/wechat.config');
var access_token;
var https = require('https');

var qingqiu = function() {
    return new Promise((resolve,reject) => {
        https.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx45c5430dac975c29&secret=f0ec7e371f1c6afa0dfb34f6cdb196b3`, (res) => {
            console.log('access_token 状态码：', res.statusCode);
            console.log('access_token 请求头：', res.headers);

            res.on('data', (d) => {
                console.log('getAccess:', d.toString());
                process.stdout.write(d);
                resolve(d.toString());
            });

        }).on('error', (e) => {
            console.error( 'access_token请求报错' + e);
            reject(e);
        });
    });
}

module.exports = qingqiu;