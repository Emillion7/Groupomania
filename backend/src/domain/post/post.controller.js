const { PostService } = require("./post.service");
const {
  withGetHandler,
  withPostHandler,
  withPatchHandler,
  withDeleteHandler,
} = require("../../utils/with-request-handler-factory");
const {
  getRelativeServerPath,
} = require("../../utils/get-relative-server-path");

class PostController {
  static postService = PostService;

  static getPosts = withGetHandler(
    /**
     * getPosts
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
    async () => {
      return await PostController.postService.getPosts();
    }
  );

  static getPost = withGetHandler(
    /**
     * getPost
     * @param {import("express").Request<{ postId: string }>} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
    async (req) => {
      const postId = req.params.postId;
      return await PostController.postService.getPost(postId);
    }
  );

  static createPost = withPostHandler(
    /**
     * createPost
     * @param {import("express").Request<unknown, { title: string; content?: string }>} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
    async (req) => {
      const payload = req.body;
      return await PostController.postService.createPost(payload);
    }
  );

  static editPost = withPatchHandler(
    /**
     * editPost
     * @param {import("express").Request<{ postId: string }, { title?: string; content?: string; published?: boolean }>} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
    async (req) => {
      const { postId } = req.params;
      const payload = req.body;
      return await PostController.postService.editPost(postId, payload);
    }
  );

  static deletePost = withDeleteHandler(
    /**
     * deletePost
     * @param {import("express").Request<{ postId: string }>} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
    async (req) => {
      const { postId } = req.params;
      await PostController.postService.deletePost(postId);
    }
  );

  static uploadImage = withPostHandler(
    /**
     * uploadImage
     * @param {import("express").Request<{ postId: string }>} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
    async (req) => {
      const { postId } = req.params;
      const image = req.file;
      const postImageRelativeServerPath = getRelativeServerPath(req, image);
      return await PostController.postService.editPost(postId, {
        imageURL: postImageRelativeServerPath,
      });
    }
  );
}

module.exports = { PostController };
