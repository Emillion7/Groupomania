const { DataTypes, UUIDV4 } = require("sequelize");
const validator = require("validator").default;
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
        validate: {
          isEmail: (email) => {
            if (!validator.isEmail(email)) {
              throw new Error("Email needs to be a valid email!");
            }
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isStrongPassword: (password) => {
            if (!validator.isStrongPassword(String(password))) {
              throw new Error(
                "Password needs to be at least 8 characters long, at least 1 lowercase, 1 uppercase, 1 number and 1 symbol!"
              );
            }
          },
        },
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
    },
    imageURL: {
      type: DataTypes.STRING,
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
