var express = require('express');
var router = express.Router();
/* database config */
const Sequelize = require('sequelize');
const Book = require('../../DatabaseModels/Book')
const databaseStr = require('../../DatabaseModels/DBConfig')
const Chapter = require('../../DatabaseModels/Chapter');
const Audio = require('../../DatabaseModels/Audio');


const sequelize = new Sequelize(databaseStr);
const book = Book(sequelize);
const chapter = Chapter(sequelize);
const audio = Audio(sequelize);

/**
 * 返回所有书籍
 */
router.get('/', function (req, res, next) {
    book.findAll().then(books => {
        console.log('返回成功：', books);
        res.json(books);
    }).catch(err => {
        console.log('返回失败：', err);
        res.writeHead(500);
        res.end(err);
    });
});

/**
 * 通过书籍ID返回指定书籍的目录
 */
router.get('/:bookId', function (req, res, next) {
    chapter.findAll({
        where: {
            bookId: req.params.bookId
        }
    }).then(chapters => {
        res.json(chapters)
    }).catch(err => {
        res.writeHead(500);
        res.end(err);
    })
})

/**
 * 获取书籍某章音频
 */
router.get('/audio/:bookId/:chapterId', function (req, res, next) {
    chapter.find({
        attributes: ['audioURL'],
        where: {
            bookId: req.params.bookId,
            id: req.params.chapterId
        }
    }).then(audioURL => {
        console.log(audioURL);
        res.json(audioURL);
    }).catch(err => {
        res.writeHead(500);
        res.end(err);
    })
})

/**
 * 返回指定书籍（bookId）的指定章节（chapterId）下的录音文本和时间
 */
router.get('/:bookId/:chapterId', function (req, res, next) {
    audio.findAll({
        where: {
            bookId: req.params.bookId,
            chapterId: req.params.chapterId
        }
    }).then(audios => {
        console.log(audios);
        res.json(audios);
    }).catch(err => {
        res.writeHead(500);
        res.end(err);
    })
})

module.exports = router;