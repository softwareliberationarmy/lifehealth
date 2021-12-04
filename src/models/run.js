const Sequelize = require('sequelize');
const sequelize = require('../infra/database');

const Run = sequelize.define('run', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    runDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    miles: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

module.exports = Run;