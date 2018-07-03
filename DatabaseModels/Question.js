const Sequelize  = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('bookQuestion', {
        questionIndex: {
            type: Sequelize.INTEGER
        },
        question: {
            type: Sequelize.STRING(512)
        },
        explaination: {
            type: Sequelize.STRING(512)
        },
        correctAnswer: {
            type: Sequelize.STRING
        }
    })
}