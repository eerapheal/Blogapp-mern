const express = require('express');
const cors =require('cors');

const app = express();
app.use(cors());

mongoose.connent('mongodb+srv://santblog:Bj3xClD4mrBHEtQF@cluster0.rax4fyi.mongodb.net/')

app.use(express.json());

app.get('/signup', (req, res) => {
    const {username, email, password} =req.body;
    res.json('{requestData:{username, email, password}}');
})

app.listen(4000)