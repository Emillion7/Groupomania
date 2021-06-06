/**
 * createSuccessResponse
 * @param {Record<string, any>} data
 * @returns {{ data: Record<string, any>, errors: null }}
 */
const createSuccessResponse = (data) => ({ errors: null, data });

module.exports = { createSuccessResponse };
