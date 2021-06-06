const { UserRepository } = require("./user.repository");

class UserService {
  static userRepository = UserRepository;

  /**
   * getUsers
   * @returns Array<User>
   */
  static getUsers = async () => {
    return await UserService.userRepository.getUsers();
  };

  /**
   * getUser
   * @param {Number} userId
   * @returns
   */
  static getUser = async (userId) => {
    const user = await UserService.userRepository.getUser(userId);
    if (!user) {
      throw new NotFoundException("User not found");
    }
    return user;
  };

  /**
   * getUserByUsername
   * @param {string} username
   * @returns User
   */
  static getUserByUsername = async (username) => {
    const user = await UserService.userRepository.getUserByUsername(username);
    console.log(user, username);
    if (!user) {
      throw new NotFoundException("User not found");
    }
    return user;
  };

  /**
   * createUser
   * @param {{ firstName: string; lastName?: string; email: string }} createUserDto
   * @returns User
   */
  static createUser = async (createUserDto) => {
    return await UserService.userRepository.createUser(createUserDto);
  };

  /**
   *
   * @param {Number} userId
   * @param {{ firstName?: string; lastName?: string; email?: string }} updateUserDto
   * @returns User
   */
  static editUser = async (userId, updateUserDto) => {
    const user = await UserService.getUser(userId);
    return await UserService.userRepository.editUser(user, updateUserDto);
  };

  /**
   * deleteUser
   * @param {Number} userId
   */
  static deleteUser = async (userId) => {
    const user = await UserService.getUser(userId);
    await UserService.userRepository.deleteUser(user);
  };
}

module.exports = { UserService };
