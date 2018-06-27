var express = require('express');
var router = express.Router();
/* database config */
const Sequelize = require('sequelize');
const Book = require('../../DatabaseModels/Book')
const databaseStr = require('../../DatabaseModels/DBConfig')


const sequelize = new Sequelize(databaseStr);
const book = Book(sequelize);

router.get('/', function (req, res, next) {
    book.findAll().then(books => {
        console.log('返回成功：', books);
        res.json(books);
    }).catch(err => {
        console.log('返回失败：', err);
        res.writeHead(500);
        res.end(err);
    });
    // res.json([{
    //     img: 'https://anniesreading.oss-cn-beijing.aliyuncs.com/bookpage.png',
    //     englighAuthor: 'alipapa',
    //     englishTitle: 'The old man and sea',
    //     chineseAuthor: '阿里巴巴',
    //     chineseTitle: '老人与海',
    //     level: '中'
    // }]);
})

module.exports = router;