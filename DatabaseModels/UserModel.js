const Sequelize  = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('user', {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        }
    });
}
