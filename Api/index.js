const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./model/User.js'); // Add the .js extension if required

const app = express();
app.use(cors({
    origin: 'http://localhost:3000' // Replace with the appropriate domain of your client application
  }));
  
app.use(express.json());

mongoose.connect('mongodb+srv://ekpenisiraphael:RGDJAzqGpAc3L496@cluster0.nqm5shy.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const userDoc = await User.create({ username, email, password });

  res.json(userDoc);
});

app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
