const path = require("path");
const express = require("express");
const multer = require("multer");
const uuid = require("uuid").v4;
const storage = multer.diskStorage({
  destination: "uploads/posts",
  filename: (_, file, cb) => {
    cb(null, `${uuid()}${path.extname(file.originalname)}`);
  },
});
const { PostController } = require("./post.controller");

const router = express.Router();
const upload = multer({ storage });

router.get("/", PostController.getPosts);
router.post("/", PostController.createPost);
router.post("/:postId/image", upload.single("image"), PostController.uploadImage);
router.get("/:postId", PostController.getPost);
router.patch("/:postId", PostController.editPost);
router.delete("/:postId", PostController.deletePost);

module.exports = { router };
