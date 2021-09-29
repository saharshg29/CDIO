// ------------------------ IMPORTING LIBRARIES ---------------------------
const express = require('express');
const route = express.Router()


// ------------------------ IMPORTING and ACCESSING CONTROLLERS -------------------------
const LogIn = require('../controller/login');
var LogInData = new LogIn()


// ------------------------- CREATING ROUTES --------------------------------
route.post('/log_in', LogInData.post_user)


// ------------------------- EXPORTING FILE ---------------------------------
module.exports = route;