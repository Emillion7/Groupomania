const { DataTypes, UUIDV4 } = require("sequelize");
const { encryptPassword } = require("./utils/encrypt-password");

/**
 * setupModels
 * @param {import('sequelize').Sequelize} sequelize
 */
const setupModels = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      hooks: {
        /**
         * beforeCreate
         * @param {{ password: string }} user
         */
        beforeCreate: async (user) => {
          try {
            const encryptedPassword = await encryptPassword(user.password);
            user.password = encryptedPassword;
          } catch (e) {
            console.log(e);
          }
        },
        beforeUpdate: async (user) => {
          try {
            const encryptedPassword = await encryptPassword(user.password);
            user.password = encryptedPassword;
          } catch (e) {
            console.log(e);
          }
        },
      },
    }
  );

  sequelize.define("Post", {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    imageURL: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    authorId: {
      type: DataTypes.UUID,
      references: {
        model: sequelize.models.User,
        key: "id",
      },
      allowNull: false,
    },
  });
};

module.exports = { setupModels };
