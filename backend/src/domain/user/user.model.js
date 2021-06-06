const { sequelize } = require("../../sequelize");

const UserModel = sequelize.models.User;

module.exports = { UserModel };
