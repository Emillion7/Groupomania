const { createSuccessResponse } = require("./create-success-response");
const { createErrorResponse } = require("./create-error-response");

/**
 * withRequestHandlerFactory
 * @param {Number} statusCode
 */
const withRequestHandlerFactory = (statusCode = 200) => {
  /**
   * withRequestHandler
   * @param {(req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => string | number | boolean | Array | Record<string, any>} requestHandler
   * @returns {(req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => Promise<void>}
   */
  const withRequestHandler =
    (requestHandler, setCustomErrorStatus = () => 500) =>
    async (req, res, next) => {
      try {
        const data = await requestHandler(req, res, next);

        res.status(statusCode).json(createSuccessResponse(data));
      } catch (error) {
        console.log(setCustomErrorStatus());

        res.status(setCustomErrorStatus()).json(createErrorResponse(error));
      }
    };

  return withRequestHandler;
};

const withGetHandler = withRequestHandlerFactory(200);

const withPostHandler = withRequestHandlerFactory(201);

const withPutHandler = withRequestHandlerFactory(200);

const withPatchHandler = withRequestHandlerFactory(200);

const withDeleteHandler = withRequestHandlerFactory(204);

module.exports = {
  withRequestHandlerFactory,
  withGetHandler,
  withPostHandler,
  withPutHandler,
  withPatchHandler,
  withDeleteHandler,
};
