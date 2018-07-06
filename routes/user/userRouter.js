var express = require('express');
var router = express.Router();

router.get('/getAccessToken_JsapiTicket', function (req, res, next) {
    console.log('向80端口转发请求access_token');
    res.redirect('http://localhost:80/getToken');
});

module.exports = router