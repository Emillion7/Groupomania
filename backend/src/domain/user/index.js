const { router } = require("./user.router");
const { User } = require("./user.model");
const { UserService } = require("./user.service");

module.exports = { userRouter: router, User, UserService };
