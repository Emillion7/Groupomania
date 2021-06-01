const express = require("express");
const router = express.Router();
const Post = require('../controllers/posts');


//Get all posts.
router.get("/", async (req, res) => {
    try {
      const posts = await new Post().getPosts();
      res.json(posts);
    } 
    catch (e) {
      console.log(e);
      res.json([]);
    }
  });

//Create a post.
router.post('/post', async (req,res) => {
    let { title, description, imageURL } = req.body;
    await new Post().createPost({title, description, imageURL}, res);
});

//Update a post.
router.put('/posts/:postId', async (req,res) => {
    let {postId} = req.params;
    await new Post().updatePost(postId,res);
    let posts = await new Post().getPosts();
});

//Delete a post.
router.delete('/posts/:postId', async (req,res) => {
    let {postId} = req.params;
    await new Post().updatePost(postId);
    let posts = await new Post().getPosts();
});

module.exports = router;