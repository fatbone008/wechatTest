const Sequelize  = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('audio', {
        time: {
            type: Sequelize.STRING
        },
        text: {
            type: Sequelize.STRING(1024)
        },
        origin: {
            type: Sequelize.STRING(1024)
        },
        imgUrl: {
            type: Sequelize.STRING(1024)
        }
    })
}