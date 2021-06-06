const { router } = require("./post.router");
const { Post } = require("./post.model");
const { PostService } = require("./post.service");

module.exports = { postRouter: router, Post, PostService };
