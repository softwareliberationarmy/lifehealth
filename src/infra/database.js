const Sequelize = require("sequelize");

const sequelize = new Sequelize("lifehealth", process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: "mssql",
  host: process.env.DB_HOST,
  dialectOptions: {
    options: {
      instanceName: process.env.DB_INSTANCENAME,
      useUTC: false
    }
  }
});

module.exports = sequelize;
