const Sequelize = require('sequelize');
var User = require('./UserModel');
const Book = require('./Book')

// Or you can simply use a connection uri
const sequelize = new Sequelize('mysql://root:123456@localhost:3306/sys');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

var u = User(sequelize)
// u.sync();
const book = Book(sequelize);

sequelize.sync();

// u.create({firstName: 'Chan', lastName: 'YiHui'})
// .then(() => u.findOne({where:{firstName: 'Chan'}, raw:true}))
// .then(res => console.log(res));