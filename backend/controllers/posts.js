const db = require("../db");

class Post {
  //get all posts.
  async getPosts() {
    let results = await db.query(`SELECT * FROM posts`).catch(console.log);
    return results.rows;
  }

  //create a post.
  async createPost(post) {
    await db
      .query("INSERT INTO posts (title, description, imageURL) VALUES ($1, $2, $3)", [post.title, post.description, post.imageURL])
      .catch(console.log);
    return;
  }

  //update a post.
  async updatePost(postId) {
    //get the previous post.
    let original_post = await db
      .query(`SELECT * FROM post WHERE id=$1`, [parseInt(postId)])
      .catch(console.log);
    let new_title_value = !original_post.rows[0].title;

    //update the checked post
    await db
      .query(`UPDATE posts SET title=$1 WHERE id=$2`, [new_title_value,parseInt(postId),])
      .catch(console.log);
    return;
  }

  //delete a post.
  async deletePost(postId) {
    await db.query(`DELETE FROM posts WHERE id=$1`, [parseInt(postId)]).catch(console.log);
    return;
  }
}

module.exports = Post;