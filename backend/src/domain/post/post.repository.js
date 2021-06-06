const { PostModel } = require("./post.model");

class PostRepository {
  static postModel = PostModel;
  /**
   * getPosts
   * @returns Array<Post>
   */
  static getPosts = async () => {
    return await PostRepository.postModel.findAll();
  };

  /**
   * getPost
   * @param {Number} postId
   * @returns Post
   */
  static getPost = async (postId) => {
    return await PostRepository.postModel.findOne({ where: { id: postId } });
  };

  /**
   * createPost
   * @param {{ title: string; content?: string }} createPostDto
   * @returns Post
   */
  static createPost = async (createPostDto) => {
    return await PostRepository.postModel.create(createPostDto);
  };

  /**
   * editPost
   * @param {import("sequelize").Model} post
   * @param {{ title?:string; content?: content }} updatePostDto
   * @returns Post
   */
  static editPost = async (post, updatePostDto) => {
    return await post.update(updatePostDto);
  };

  /**
   * deletePost
   * @param {import("sequelize").Model} post
   */
  static deletePost = async (post) => {
    await post.destroy();
  };
}

module.exports = { PostRepository };
