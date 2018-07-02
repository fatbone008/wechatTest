const Sequelize = require('sequelize');
const databaseStr = require('./DBConfig');
var markdown = require( "markdown" ).markdown;

const User = require('./UserModel');
const Book = require('./Book');
const Chapter = require('./Chapter');
const Audio = require('./Audio');

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

const u = User(sequelize)
// u.sync();
const book = Book(sequelize);
const chapter = Chapter(sequelize);
const audio = Audio(sequelize);

// chapter.belongsTo(book);
audio.belongsTo(book)
audio.belongsTo(chapter);

sequelize.sync();

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
//       },
//       {
//         img: 'https://anniesreading.oss-cn-beijing.aliyuncs.com/bookpage.png',
//         englighAuthor: 'alipapa',
//         englishTitle: 'The old man and sea',
//         chineseAuthor: '阿里巴巴',
//         chineseTitle: '老人与海',
//         level: '中'
//       },
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
let execute = require('../utility/e2j')
let f = async function () {
    let b = await execute();
    console.log("厉害了", b[142]);
    audio.bulkCreate(b).then(res => {
        console.log("上传成功", res);
    })
}
f();
