const { sequelize } = require("../../sequelize");

const PostModel = sequelize.models.Post;

module.exports = { PostModel };
