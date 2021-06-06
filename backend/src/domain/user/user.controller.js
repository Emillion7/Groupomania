const { UserService } = require("./user.service");
const {
  withGetHandler,
  withPostHandler,
  withPatchHandler,
  withDeleteHandler,
} = require("../../utils/with-request-handler-factory");

class UserController {
  static userService = UserService;
  /**
   * getUsers
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  static getUsers = withGetHandler(async () => {
    return await UserController.userService.getUsers();
  });

  /**
   * getUser
   * @param {import("express").Request<{ userId: string }>} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  static getUser = withGetHandler(async (req) => {
    const userId = req.params.userId;
    return await UserController.userService.getUser(userId);
  });

  /**
   * createUser
   * @param {import("express").Request<unknown, { title: string; content?: string }>} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  static createUser = withPostHandler(async (req) => {
    const payload = req.body;
    return await UserController.userService.createUser(payload);
  });

  /**
   * editUser
   * @param {import("express").Request<{ userId: string }, { title?: string; content?: string; published?: boolean }>} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  static editUser = withPatchHandler(async (req) => {
    const userId = req.params.userId;
    const payload = req.body;
    return await UserController.userService.editUser(userId, payload);
  });

  /**
   * deleteUser
   * @param {import("express").Request<{ userId: string }>} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  static deleteUser = withDeleteHandler(async (req) => {
    const userId = req.params.userId;
    return await UserController.userService.deleteUser(userId);
  });
}

module.exports = { UserController };
