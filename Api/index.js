const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./model/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const salt = bcrypt.genSaltSync(10);
const secret = 'cvjhhhhhjlkyxcgvgfxdfcvg';

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

app.use(express.json());

mongoose.connect('mongodb+srv://ekpenisiraphael:RGDJAzqGpAc3L496@cluster0.nqm5shy.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userData = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, salt)
    });

    res.json(userData);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userData = await User.findOne({ email });

    if (!userData) {
      res.status(400).json('User not found');
      return;
    }

    const passPare = bcrypt.compareSync(password, userData.password);

    if (passPare) {
      jwt.sign({ email, id: userData._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json('ok');
      });
    } else {
      res.status(400).json('Wrong credentials');
    }
  } catch (error) {
    res.status(500).json('An error occurred');
  }
});

app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
