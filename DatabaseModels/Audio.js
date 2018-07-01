const Sequelize  = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('audio', {
        time: {
            type: Sequelize.STRING
        },
        text: {
            type: Sequelize.STRING
        },
        origin: {
            type: Sequelize.STRING
        }
    })
}