const Sequelize = require('sequelize');
const databaseStr = require('./DBConfig');
var markdown = require( "markdown" ).markdown;

const User = require('./UserModel');
const Book = require('./Book');
const Chapter = require('./Chapter');
const Audio = require('./Audio');
const Question = require('./Question');
const Answers = require('./Answers');

console.log("数据库配置：", databaseStr);
// Or you can simply use a connection uri
const sequelize = new Sequelize(databaseStr);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const user = User(sequelize)
const book = Book(sequelize);
const chapter = Chapter(sequelize);
const audio = Audio(sequelize);
const question = Question(sequelize);
const answers = Answers(sequelize);

chapter.belongsTo(book);
audio.belongsTo(book)
audio.belongsTo(chapter);
chapter.hasMany(question);
question.hasMany(answers);

sequelize.sync();

// 关联式查找问题和答案
// question.findAll({
//     where: {
//         chapterId: 1
//     },
//     include: [{
//         model: answers
//     }]
// }).then(res => console.log('--------', res[0].bookAnswers))
//     .catch(err => console.error)
//关联式插入问题和选项 实验
// question.create({
//     questionIndex: 1,
//     question: 'balabalabala',
//     explaination: 'explanation',
//     correctAnswer: '3',
//     chapterId: 1,
//     bookAnswers: [
//         {answerIndex: 1, answerText: 'Answer'},
//         {answerIndex: 2, answerText: 'Answer'},
//         {answerIndex: 3, answerText: 'Answer'},
//         {answerIndex: 4, answerText: 'Answer'},
//     ]
// },{
//     include: [answers]
// }).then(res => {
//     console.log("城建成功");
// }).catch(err => {
//     console.log('创建失败');
//     console.error(err);
// })
//关联式插入问题和选项 实际执行
// var combineQA = require('../utility/e2j');
// let exe = async function () {
//     let a = await combineQA();
//     for(let i = 0; i < a.length; i++) {
//         question.create(a[i],{include:[answers]})
//             .then(res => console.log('构建成功'))
//             .catch(err =>  console.error('构建失败'))
//     }
// }
// exe();


// u.create({firstName: 'Chan', lastName: 'YiHui'})
// .then(() => u.findOne({where:{firstName: 'Chan'}, raw:true}))
// .then(res => console.log(res));

// book.bulkCreate(
//     [
//       {
//         img: 'https://anniesreading.oss-cn-beijing.aliyuncs.com/bookpage.png',
//         englighAuthor: 'alipapa',
//         englishTitle: 'The old man and sea',
//         chineseAuthor: '阿里巴巴',
//         chineseTitle: '老人与海',
//         level: '中'
//       }
//     ]
// );

// let a = [];
// for(let i = 0; i< 21; i++) {
//     a.push({
//         index: i+1,
//         chapterName: "chapter " + (i + 1),
//         bookId: 1
//     });
// }
// chapter.bulkCreate(a);
//
// let b = a.map(o => {
//     o.text = markdown.toHTML(o.origin)
//     o.bookId = 1;
//     o.chapterId = 21;
//     return o;
// });
// let execute = require('../utility/e2j')
// let f = async function () {
//     let b = await execute();
//     console.log("厉害了", b[142]);
//     audio.bulkCreate(b).then(res => {
//         console.log("上传成功", res);
//     })
// }
// f();

