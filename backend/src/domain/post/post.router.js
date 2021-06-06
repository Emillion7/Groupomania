const express = require("express");
const { PostController } = require("./post.controller");

const router = express.Router();

router.get("/", PostController.getPosts);
router.post("/", PostController.createPost);
router.get("/:postId", PostController.getPost);
router.patch("/:postId", PostController.editPost);
router.delete("/:postId", PostController.deletePost);

module.exports = { router };
