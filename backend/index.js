require("dotenv/config");

const { app } = require("./src/app");
const { sequelize } = require("./src/sequelize");

const port = Number.parseInt(process.env.PORT || "5000", 10);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server ready at: http://localhost:${port}`);
  });
});
