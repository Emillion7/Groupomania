const jwt = require("jsonwebtoken");
const { encryptPassword } = require("../../utils/encrypt-password");
const { UserService } = require("../user");

class AuthService {
  static userService = UserService;
  /**
   * getToken
   * @param {{ username: string; password: string }} payload
   * @returns {string}
   */
  static getToken = async (payload) => {
    try {
      const user = await AuthService.userService.getUserByUsername(
        payload.username
      );
      const encryptedPassword = await encryptPassword(payload.password);


      if (user.password === encryptedPassword) {
        const token = jwt.sign(
          {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          },
          "hulk",
          { algorithm: "HS256" }
        );

        return { token, user };
      } else {
        throw new Error("User Unauthorized");
      }
    } catch (e) {
      throw new Error("User Unauthorized");
    }
  };

  /**
   * register
   * @param {{ username: string; email: string; password: string }} payload
   * @returns User
   */
  static register = async (payload) => {
    return await AuthService.userService.createUser(payload);
  };
}

module.exports = { AuthService };
