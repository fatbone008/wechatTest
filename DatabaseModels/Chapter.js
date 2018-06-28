const Sequelize  = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('chapter', {
        index: {
            type: Sequelize.INTEGER
        },
        chapterName: {
            type: Sequelize.STRING
        }
    })
}