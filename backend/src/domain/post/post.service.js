const { PostRepository } = require("./post.repository");

class PostService {
  static postRepository = PostRepository;
  /**
   * getPosts
   * @returns Array<Post>
   */
  static getPosts = async () => {
    return await PostService.postRepository.getPosts();
  };

  /**
   * getPost
   * @param {Number} postId
   * @returns Post
   */
  static getPost = async (postId) => {
    const post = await PostService.postRepository.getPost(postId);
    if (!post) {
      throw new NotFoundException("Post not found");
    }
    return post;
  };

  /**
   * createPost
   * @param {{ title: string; content?: string }} createPostDto
   * @returns Post
   */
  static createPost = async (createPostDto) => {
    return await PostService.postRepository.createPost(createPostDto);
  };

  /**
   * editPost
   * @param {Number} postId
   * @param {{ title?: string; content?: string }} updatePostDto
   * @returns Post
   */
  static editPost = async (postId, updatePostDto) => {
    const post = await PostService.getPost(postId);
    return await PostService.postRepository.editPost(post, updatePostDto);
  };

  /**
   * deletePost
   * @param {Number} postId
   */
  static deletePost = async (postId) => {
    const post = await PostService.getPost(postId);
    await PostService.postRepository.deletePost(post);
  };
}

module.exports = { PostService };
