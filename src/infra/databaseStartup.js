const sequelize = require("./database");
const User = require('../models/user');

const dbStartupAndThen = (next, forceChange = false) => {
    sequelize
    .sync({ force: forceChange })
    .then((result) => {
      return User.findByPk(1);
    })
    .then((user) => {
      if (!user) {
        return User.create({
          name: "Kerry Patrick",
          email: "themanfromsql@gmail.com",
        });
      }
      return user;
    })
    .then((result) => {
      next();
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  module.exports = {
    dbStartupAndThen
  }