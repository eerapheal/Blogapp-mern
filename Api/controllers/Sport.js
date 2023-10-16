const express = require("express");
const router = express.Router();
const Post = require("../models/Post.js");
const Category = require("../models/Category.js");

// Fetch posts in the "Sport" category
router.get("/", async (req, res) => {
  try {
    // Find the "Sport" category first
    const sportCategory = await Category.findOne({ name: "Sport" });

    if (!sportCategory) {
      return res.status(404).json({ error: "Sport category not found" });
    }

    // Find posts with the matching category ObjectId
    const sportPosts = await Post.find({ category: sportCategory._id }).populate("author");
    res.json(sportPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch sport posts" });
  }
});

module.exports = router;
