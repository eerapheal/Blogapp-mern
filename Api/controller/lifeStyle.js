const express = require("express");
const router = express.Router();
const Post = require("../models/Post.js");
const Category = require("../models/Category.js");

// Fetch posts in the "LifeStyle" category
router.get("/", async (req, res) => {
  try {
    // Find the "LifeStyle" category first
    const lifeStyleCategory = await Category.findOne({ name: "LifeStyle" });

    if (!lifeStyleCategory) {
      return res.status(404).json({ error: "LifeStyle category not found" });
    }

    // Find posts with the matching category ObjectId
    const lifeStylePosts = await Post.find({ category: lifeStyleCategory._id }).populate("author");
    res.json(lifeStylePosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch lifeStyle posts" });
  }
});

module.exports = router;
