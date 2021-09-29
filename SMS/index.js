const express = require('express');
var app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const signUp = require('./routes/signUp');
const logIn = require('./routes/login');

// --------------------------- CONNECTED TO MONGO-DB --------------------------------

mongoose.connect('mongodb://localhost/SMS')
    .then(() => console.log("connected sucessfully to MongoDB"))
    .catch(err => console.error(err));



app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ---------------------------- ACCESSING ROUTES -------------------------------------
app.use('/api', signUp);
app.use('/api', logIn);


// ---------------------------- LISTENING TO PORT ------------------------------------    

var port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listining to port ${port}`);
});

module.exports = app