var config = require('../config/wechat.config');
var access_token;
var https = require('https');

var qingqiu = function() {
    return new Promise((resolve,reject) => {
        https.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx45c5430dac975c29&secret=f0ec7e371f1c6afa0dfb34f6cdb196b3`, (res) => {
            console.log('access_token 状态码：', res.statusCode);
            console.log('access_token 请求头：', res.headers);

            res.on('data', (d) => {
                let access_token = JSON.parse(d.toString());
                console.log('qingqiu_1:', access_token);
                https.get(`https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_token['access_token']}&type=jsapi`, response => {
                    response.on('data', data => {
                        console.log(`https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${d['access_token']}&type=jsapi`);
                        let jsapi_ticket = JSON.parse(data.toString());
                        console.log('jsapi_ticket:', jsapi_ticket);
                        access_token['jsapi_ticket'] = jsapi_ticket;
                        // process.stdout.write(access_token);
                        resolve(access_token);
                    })
                }).on('error', e => {
                    console.error('jsapi_ticket报错：', e);
                })
                // process.stdout.write(d);
                // resolve(d.toString());
            });

        }).on('error', (e) => {
            console.error( 'access_token请求报错' + e);
            reject(e);
        });
    });
}

module.exports = qingqiu;