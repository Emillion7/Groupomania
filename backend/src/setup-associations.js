/**
 * setupAssociations
 * @param {import('sequelize').Sequelize} sequelize
 */
const setupAssociations = (sequelize) => {
  const { Post, User } = sequelize.models;

  Post.belongsTo(User, {
    foreignKey: "authorId",
    as: "author",
    onDelete: "CASCADE",
  });
  User.hasMany(Post, {
    foreignKey: "authorId",
    as: "posts",
  });
};

module.exports = { setupAssociations };
