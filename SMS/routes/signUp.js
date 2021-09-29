// ------------------------ IMPORTING LIBRARIES ---------------------------
const express = require('express');
const route = express.Router()


// ------------------------ IMPORTING and ACCESSING CONTROLLERS -------------------------
const SignUp = require('../controller/signup');
var SignUpData = new SignUp()


// ------------------------- CREATING ROUTES --------------------------------
route.post('/sign_up', SignUpData.post_user)


// ------------------------- EXPORTING FILE ---------------------------------
module.exports = route;