const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET_KEY = process.env.SECRET_KEY;
const User = require("./models/User.js");
const Post = require("./models/Post.js");
const categoriesRouter = require('./controllers/categories.js');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const uploadMiddleWare = require('./middleware/uploadMiddleware');
const fs = require("fs");
const healthRouter = require('./controllers/health.js');
const sportRouter = require('./controllers/Sport.js');
const technologyRouter = require('./controllers/technologies.js');
const lifeStyleRouter = require('./controllers/lifeStyle.js')
const corsMiddleware = require('./middleware/corsMiddleware');

const app = express();
const salt = bcrypt.genSaltSync(10);


app.use(corsMiddleware);

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use('/categories', categoriesRouter);
app.use('/sport', sportRouter);
app.use('/health', healthRouter);
app.use('/technologies', technologyRouter);
app.use('/lifeStyle', lifeStyleRouter);

mongoose
  .connect(
    MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.log("Failed to connect to the database:", error);
  });

app.post("/register", async (req, res) => {
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

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userData = await User.findOne({ email });

    if (!userData) {
      res.status(400).json("User not found");
      return;
    }

    const passMatch = bcrypt.compareSync(password, userData.password);

    if (passMatch) {
      jwt.sign({ email, id: userData._id }, SECRET_KEY, {}, (err, token) => {
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

app.get("/profile", (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json("Unauthorized");
    return;
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) throw err;
    res.json(decoded);
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.post("/post", uploadMiddleWare.single("file"), async (req, res) => {
  try {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);

    const token = req.cookies.token;
    jwt.verify(token, SECRET_KEY, async (err, decoded) => {
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

app.put("/post", uploadMiddleWare.single("file"), async (req, res) => {
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    newPath = path + "." + ext;
    fs.renameSync(path, newPath);
  }

  const token = req.cookies.token;
  jwt.verify(token, SECRET_KEY, async (err, decoded) => {
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


app.get("/post", async (req, res) => {
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
app.get("/post/:id", async (req, res) => {
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

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
