const { createErrorResponse } = require("./create-error-response");

/**
 * errorAuthHandler
 * @param {Error} error
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const errorAuthHandler = (error, req, res, next) => {
  if (error.name === "UnauthorizedError") {
    res.status(401).json(createErrorResponse(error));
  } else {
    next();
  }
};

module.exports = { errorAuthHandler };
