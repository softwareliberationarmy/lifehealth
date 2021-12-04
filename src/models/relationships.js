const Run = require("./run");
const User = require("./user")

function defineModelRelationships() {
    User.hasMany(Run);
    Run.belongsTo(User);
}

module.exports = {
    defineModelRelationships
}

