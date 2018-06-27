var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.json([{
        img: 'https://anniesreading.oss-cn-beijing.aliyuncs.com/bookpage.png',
        englighAuthor: 'alipapa',
        englishTitle: 'The old man and sea',
        chineseAuthor: '阿里巴巴',
        chineseTitle: '老人与海',
        level: '中'
    }]);
})

module.exports = router;