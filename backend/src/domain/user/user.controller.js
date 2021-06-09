const { UserService } = require("./user.service");
const {
  withGetHandler,
  withPostHandler,
  withPatchHandler,
  withDeleteHandler,
} = require("../../utils/with-request-handler-factory");

class UserController {
  static userService = UserService;

  static getUsers = withGetHandler(
    /**
     * getUsers
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
    async () => {
      return await UserController.userService.getUsers();
    }
  );

  static getUser = withGetHandler(
    /**
     * getUser
     * @param {import("express").Request<{ userId: string }>} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
    async (req) => {
      const { userId } = req.params;
      return await UserController.userService.getUser(userId);
    }
  );

  static createUser = withPostHandler(
    /**
     * createUser
     * @param {import("express").Request<unknown, { title: string; content?: string }>} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
    async (req) => {
      const payload = req.body;
      return await UserController.userService.createUser(payload);
    }
  );

  static editUser = withPatchHandler(
    /**
     * editUser
     * @param {import("express").Request<{ userId: string }, { title?: string; content?: string; published?: boolean }>} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
    async (req) => {
      const { userId } = req.params;
      const payload = req.body;
      return await UserController.userService.editUser(userId, payload);
    }
  );

  static deleteUser = withDeleteHandler(
    /**
     * deleteUser
     * @param {import("express").Request<{ userId: string }>} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
    async (req) => {
      const { userId } = req.params;
      return await UserController.userService.deleteUser(userId);
    }
  );
}

module.exports = { UserController };
