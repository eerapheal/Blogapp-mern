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
 try{ 
  const userData = await User.create({ username, email, password });

  res.json(userData);
 }catch(e) {
    res.status(400).json(e)
 }
});

app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
