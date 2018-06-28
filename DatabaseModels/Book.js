const Sequelize  = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('book', {
        englishTitle: {
            type: Sequelize.STRING,
            unique: true
        },
        chineseTitle: {
            type: Sequelize.STRING
        },
        img: {
            type: Sequelize.STRING
        },
        chineseAuthor: {
            type: Sequelize.STRING
        },
        englighAuthor: {
            type: Sequelize.STRING
        },
        level: {
            type: Sequelize.STRING
        }
    });
}
