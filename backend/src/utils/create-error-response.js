const { ValidationError } = require("sequelize");

/**
 * createErrorResponse
 * @param {ValidationError} error
 * @returns {{ data: null, errors: Array<{message: string; type: string; source: 'SEQUELIZE' | 'INTERNAL'}> }}
 */
const createErrorResponse = (error) => {
  if (error.errors) {
    return {
      data: null,
      errors: error.errors.map((error) => ({
        message: error.message,
        type: error.type.toUpperCase(),
        source: "SEQUELIZE",
      })),
    };
  }

  return {
    data: null,
    errors: [
      {
        message: error.message,
        type: "EXPRESS",
        source: "INTERNAL",
      },
    ],
  };
};

module.exports = { createErrorResponse };
