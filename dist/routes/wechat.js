'use strict';

var express = require('express');
var router = express.Router();
var crypto = require('crypto');

router.get('/', function (req, res) {
    var q = req['query'];
    var a = [];
    a.push('testing');
    a.push(q['timestamp']);
    a.push(q['nonce']);

    var sha1 = crypto.createHash("sha1");
    sha1.update(a.sort().join(''));
    var hack = sha1.digest("hex");

    if (q['signature'] === hack) {
        console.log("hack: ", hack);
        res.send(q['echostr']);
    } else {
        console.log("hack: ", nothing);
        res.send('Birds home page');
    }
});

module.exports = router;