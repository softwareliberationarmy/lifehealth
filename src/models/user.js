const Sequelize = require('sequelize');
const sequelize = require('../infra/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        length: 255,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        length: 255,
        allowNull: false
    }
});

module.exports = User;