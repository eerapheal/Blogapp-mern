const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./model/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const salt = bcrypt.genSaltSync(10);
const secret = 'cvjhhhhhjlkyxcgvgfxdfcvg';

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://ekpenisiraphael:RGDJAzqGpAc3L496@cluster0.nqm5shy.mongodb.net/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to the database');
}).catch((error) => {
  console.log('Failed to connect to the database:', error);
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

    const passMatch = bcrypt.compareSync(password, userData.password);

    if (passMatch) {
      jwt.sign({ email, id: userData._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token, { httpOnly: true }).json({
          id:userData._id,
          email,
        });
      });
    } else {
      res.status(400).json('Wrong credentials');
    }
  } catch (error) {
    res.status(500).json('An error occurred');
  }
});

app.get('/profile', (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json('Unauthorized');
    return;
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      res.status(401).json('Unauthorized');
      return;
    }

  res.json(decoded);  
  });
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').json('ok')
})

app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
