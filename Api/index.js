const express = require('express');
const app = express();

app.post('/signup', (req, res) => {
    res.json('test ok');
})

app.listen(4000)