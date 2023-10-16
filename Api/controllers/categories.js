// routes/categories.js

const express = require("express");
const router = express.Router();
const Category = require("../models/Category.js");

// Create a new category
router.post("/", async (req, res) => {
  const { name, description } = req.body;
  try {
    const newCategory = await Category.create({ name, description });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ error: "Failed to create category" });
  }
});

// Fetch all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

module.exports = router;
