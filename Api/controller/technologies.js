const express = require("express");
const router = express.Router();
const Post = require("../models/Post.js");
const Category = require("../models/Category.js");

// Fetch posts in the "Technology" category
router.get("/", async (req, res) => {
  try {
    // Find the "Technology" category first
    const technologyCategory = await Category.findOne({ name: "Technology" });

    if (!technologyCategory) {
      return res.status(404).json({ error: "Technology category not found" });
    }

    // Find posts with the matching category ObjectId
    const technologyPosts = await Post.find({ category: technologyCategory._id }).populate("author");
    res.json(technologyPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch technology posts" });
  }
});

module.exports = router;
