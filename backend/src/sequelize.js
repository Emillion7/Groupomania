const { Sequelize } = require("sequelize");
const { dbConnectionString } = require("./config");
const { setupModels } = require("./setup-models");
const { setupAssociations } = require("./setup-associations");

const sequelize = new Sequelize(dbConnectionString);

setupModels(sequelize);
setupAssociations(sequelize);

module.exports = { sequelize };
