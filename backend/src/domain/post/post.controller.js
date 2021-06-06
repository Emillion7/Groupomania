const { PostService } = require("./post.service");
const {
  withGetHandler,
  withPostHandler,
  withPatchHandler,
  withDeleteHandler,
} = require("../../utils/with-request-handler-factory");

class PostController {
  static postService = PostService;
  /**
   * getPosts
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  static getPosts = withGetHandler(async () => {
    return await PostController.postService.getPosts();
  });

  /**
   * getPost
   * @param {import("express").Request<{ postId: string }>} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  static getPost = withGetHandler(async (req) => {
    const postId = Number.parseInt(req.params.postId, 10);
    return await PostController.postService.getPost(postId);
  });

  /**
   * createPost
   * @param {import("express").Request<unknown, { title: string; content?: string }>} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  static createPost = withPostHandler(async (req) => {
    const payload = req.body;
    return await PostController.postService.createPost(payload);
  });

  /**
   * editPost
   * @param {import("express").Request<{ postId: string }, { title?: string; content?: string; published?: boolean }>} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  static editPost = withPatchHandler(async (req) => {
    const postId = Number.parseInt(req.params.postId, 10);
    const payload = req.body;
    return await PostController.postService.editPost(postId, payload);
  });

  /**
   * deletePost
   * @param {import("express").Request<{ postId: string }>} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  static deletePost = withDeleteHandler(async (req) => {
    const postId = Number.parseInt(req.params.postId, 10);
    return await PostController.postService.deletePost(postId);
  });
}

module.exports = { PostController };
