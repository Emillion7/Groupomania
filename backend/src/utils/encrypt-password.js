const bcrypt = require("bcrypt");

/**
 * encryptPassword
 * @param {string} password
 * @returns {string}
 */
const encryptPassword = async (password) => {
  return Buffer.from(password.toString()).toString("base64");
};

module.exports = { encryptPassword };
