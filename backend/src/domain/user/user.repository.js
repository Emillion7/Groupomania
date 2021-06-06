const { UserModel } = require("./user.model");

class UserRepository {
  static userModel = UserModel;

  /**
   * getUsers
   * @returns Array<User>
   */
  static getUsers = async () => {
    return await UserRepository.userModel.findAll();
  };

  /**
   * getUser
   * @param {Number} userId
   * @returns User
   */
  static getUser = async (userId) => {
    return await UserRepository.userModel.findOne({ where: { id: userId } });
  };

  /**
   * getUserByUsername
   * @param {string} username
   * @returns User
   */
  static getUserByUsername = async (username) => {
    return await UserRepository.userModel.findOne({ where: { username } });
  };

  /**
   * createUser
   * @param {{ firstName: string; lastName?: string; email: string }} createUserDto
   * @returns User
   */
  static createUser = async (createUserDto) => {
    return await UserRepository.userModel.create(createUserDto);
  };

  /**
   * editUser
   * @param {User} user
   * @param {{ firstName?: string; lastName?: string; email?: string }} updateUserDto
   * @returns User
   */
  static editUser = async (user, updateUserDto) => {
    return await user.update(updateUserDto);
  };

  /**
   * deleteUser
   * @param {User} user
   */
  static deleteUser = async (user) => {
    await user.destroy();
  };
}

module.exports = { UserRepository };
