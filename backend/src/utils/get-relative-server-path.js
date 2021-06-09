/**
 * getRelativeServerPath
 * @param {import("express").Request} req
 * @param {Express.Multer.File} file
 */
const getRelativeServerPath = (req, file) => {
  const origin = `${req.protocol}://${req.hostname}`;
  const relativeServerPath = new URL(file.path, origin)
    .toString()
    .replace(origin, "");

  return relativeServerPath;
};

module.exports = { getRelativeServerPath };
