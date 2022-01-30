const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'data/lifehealth.sqlite',
});

module.exports = sequelize;
