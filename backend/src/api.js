const express = require("express");
const jwt = require("express-jwt");
const { postRouter } = require("./domain/post");
const { userRouter } = require("./domain/user");
const { authRouter } = require("./domain/auth");
const { errorAuthHandler } = require("./utils/error-auth-handler");

const apiV1Router = express.Router();

const jwtHandler = jwt({ secret: "hulk", algorithms: ['HS256'] });

apiV1Router.use("/posts", jwtHandler, postRouter);
apiV1Router.use("/users", jwtHandler, userRouter);
apiV1Router.use("/auth", authRouter);
apiV1Router.use(errorAuthHandler);

module.exports = { apiV1Router };
