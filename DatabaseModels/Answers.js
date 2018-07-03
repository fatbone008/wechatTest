const Sequelize  = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('bookAnswers', {
        answerIndex: {
            type: Sequelize.INTEGER
        },
        answerText: {
            type: Sequelize.STRING(512)
        }
    })
}