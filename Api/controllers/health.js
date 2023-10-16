const express = require("express");
const router = express.Router();
const Post = require("../models/Post.js");
const Category = require("../models/Category.js");

// Fetch posts in the "Health" category
router.get("/", async (req, res) => {
  try {
    // Find the "Health" category first
    const healthCategory = await Category.findOne({ name: "Health" });

    if (!healthCategory) {
      return res.status(404).json({ error: "Health category not found" });
    }

    // Find posts with the matching category ObjectId
    const healthPosts = await Post.find({ category: healthCategory._id }).populate("author");
    res.json(healthPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch health posts" });
  }
});

module.exports = router;
