const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User.js");
const Post = require("./models/Post.js");
const categoriesRouter = require('./controller/categories');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const uploadMiddleWare = multer({ dest: "uploads/" });
const fs = require("fs");
const sportRouter = require('./controller/sport');
const healthRouter = require('./controller/health');
const technologyRouter = require('./controller/technologies');

const app = express();
const salt = bcrypt.genSaltSync(10);
const secret = "cvjhhhhhjlkyxcgvgfxdfcvg";

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use('/categories', categoriesRouter);
app.use('/sport', sportRouter);
app.use('/health', healthRouter);
app.use('/technologies', technologyRouter);

mongoose
  .connect(
    "mongodb+srv://ekpenisiraphael:RGDJAzqGpAc3L496@cluster0.nqm5shy.mongodb.net/mydatabase",
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

app.get("/profile", (req, res) => {
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
