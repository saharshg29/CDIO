const express = require('express');
const mongoose = require('mongoose');

const app = express();
const router = express.Router()

router.get('/api', (req,res) => {
    res.send('hello world')
})

const port = process.env.PORT || 3000;
app.listen(port, () => `listening on port ${port}`);