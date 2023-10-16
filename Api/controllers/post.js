const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const Post = require("../models/Post.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const uploadMiddleWare = multer({ dest: "uploads/" });
const fs = require("fs");

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const userData = await User.create({
        username,
        email,
        password: bcrypt.hashSync(password, salt),
      });
  
      res.json(userData);
    } catch (e) {
      res.status(400).json(e);
    }
  });
  
  router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const userData = await User.findOne({ email });
  
      if (!userData) {
        res.status(400).json("User not found");
        return;
      }
  
      const passMatch = bcrypt.compareSync(password, userData.password);
  
      if (passMatch) {
        jwt.sign({ email, id: userData._id }, secret, {}, (err, token) => {
          if (err) throw err;
          res.cookie("token", token, { httpOnly: true }).json({
            id: userData._id,
            email,
          });
        });
      } else {
        res.status(400).json("Wrong credentials");
      }
    } catch (error) {
      res.status(500).json("An error occurred");
    }
  });
  
  router.get("/profile", (req, res) => {
    const token = req.cookies.token;
  
    if (!token) {
      res.status(401).json("Unauthorized");
      return;
    }
  
    jwt.verify(token, secret, (err, decoded) => {
      if (err) throw err;
      res.json(decoded);
    });
  });
  
  router.post("/logout", (req, res) => {
    res.cookie("token", "").json("ok");
  });
  
  router.post("/post", uploadMiddleWare.single("file"), async (req, res) => {
    try {
      const { originalname, path } = req.file;
      const parts = originalname.split(".");
      const ext = parts[parts.length - 1];
      const newPath = path + "." + ext;
      fs.renameSync(path, newPath);
  
      const token = req.cookies.token;
      jwt.verify(token, secret, async (err, decoded) => {
        if (err) throw err;
  
        const { title, summary, content, categoryId } = req.body; // Add categoryId
  
        // Ensure that author is a valid ObjectId or null (if it's undefined)
        const author = decoded.id || null;
  
        const createdPost = await Post.create({
          title,
          summary,
          content,
          cover: newPath,
          author: author,
          category: categoryId, // Assign the selected category
        });
        res.json(createdPost);
    
      });
    } catch (error) {
      res.status(500).json("An error occurred");
    }
  });
  
  router.put("/post", uploadMiddleWare.single("file"), async (req, res) => {
    let newPath = null;
    if (req.file) {
      const { originalname, path } = req.file;
      const parts = originalname.split(".");
      const ext = parts[parts.length - 1];
      newPath = path + "." + ext;
      fs.renameSync(path, newPath);
    }
  
    const token = req.cookies.token;
    jwt.verify(token, secret, async (err, decoded) => {
      if (err) throw err;
      const { id, title, summary, content, categoryId } = req.body; // Add categoryId
  
      try {
        const updatedPost = await Post.findById(id);
  
        if (!updatedPost) {
          return res.status(404).json('Post not found');
        }
  
        // Check if the user is the author of the post
        if (JSON.stringify(updatedPost.author) !== JSON.stringify(decoded.id)) {
          return res.status(400).json('You are not the author');
        }
  
        // Update the post fields
        updatedPost.title = title;
        updatedPost.summary = summary;
        updatedPost.content = content;
        updatedPost.cover = newPath ? newPath : updatedPost.cover;
        updatedPost.category = categoryId; // Update the category
  
        // Save the updated post
        await updatedPost.save();
  
        res.json(updatedPost);
      } catch (error) {
        console.error(error);
        res.status(500).json('An error occurred while updating the post');
      }
    });
  });
  
  
  router.get("/post", async (req, res) => {
    try {
      const posts = await Post.find()
        .populate("author", "username")
        .sort({ createdAt: -1 })
        .limit(300);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while retrieving posts" });
    }
  });
  router.get("/post/:id", async (req, res) => {
    const postId = req.params.id; // Access the post ID from the URL parameter
    try {
      const postDoc = await Post.findById(postId).populate("author", [
        "username",
      ]);
  
      if (!postDoc) {
        return res.status(404).json({ error: "Post not found" });
      }
  
      res.json(postDoc);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving the post" });
    }
  });

  module.exports = router;