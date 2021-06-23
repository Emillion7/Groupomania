const { withPostHandler } = require("../../utils/with-request-handler-factory");
const { AuthService } = require("./auth.service");

class AuthController {
  static authService = AuthService;

  /**
   * login
   * @param {import("express").Request<{}, { username: string; password: string }>} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  static login = withPostHandler(
    async (req) => {
      const { username, password } = req.body;

      if (username === undefined || password === undefined) {
        throw new Error("username and password are required fields");
      }

      const token = await AuthController.authService.getToken(req.body);

      if (!token) {
        throw new Error("username or password are incorrect");
      }
      const data = await AuthService.userService.getUserByUsername(
        username
      )
      return { token: token.token, userId:data.id, username: data.username, email: data.email };
    },
    () => 401
  );

  /**
   * register
   * @param {import("express").Request<{}, { username: string; email: string; password: string }>} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  static register = withPostHandler(async (req) => {
    const { username, email, password } = req.body;

    if (
      username === undefined ||
      password === undefined ||
      email === undefined
    ) {
      throw new Error("username, email and password are required fields");
    }

    return await AuthController.authService.register(req.body);
  });
}

module.exports = { AuthController };
