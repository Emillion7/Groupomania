/**
 * setupAssociations
 * @param {import('sequelize').Sequelize} sequelize
 */
const setupAssociations = (sequelize) => {
  const { Post, User } = sequelize.models;

  Post.belongsTo(User, {
    foreignKey: "authorId",
    as: "author",
  });
  User.hasMany(Post, {
    foreignKey: "authorId",
    as: "posts",
  });
};

module.exports = { setupAssociations };
