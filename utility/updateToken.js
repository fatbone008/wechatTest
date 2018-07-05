var config = require('../config/wechat.config');
var access_token;
var https = require('https');

/**
 * 这个请求向微信发送请求，获取access_token后，继续向微信发送第二次请求，获取到jsapi_ticket。
 * 随后将jsapi_ticket放入access_token的jsapi_ticket属性里一起返回。
 * @returns {Promise<any>}
 */
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

                        if(jsapi_ticket.errcode != 0) {
                            reject(jsapi_ticket.errmsg);
                        }

                        console.log('jsapi_ticket:', jsapi_ticket);
                        access_token['jsapi_ticket'] = jsapi_ticket['ticket'];
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