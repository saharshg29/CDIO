const mongoose = require('mongoose');
const signUp = require('./signup');


// ------------------------------- CREATING SCHEMA -------------------------------------
const schema = mongoose.Schema({
    first_name: {
        typpe: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    login: {
        type: mongoose.Schema.Types.ObjectId,
        ref: signUp
    },
    mobile_number: {
        type: String,
        require: true,
        unique: true
    },
    father_name: {
        typpe: String,
        require: true
    },
    mother_name: {
        typpe: String,
        require: true
    },
    age: {
        type: Number
    } 
})


// ---------------------------------- CREATING MODEL -------------------------------------------
const profile = mongoose.model("Profile", schema);


// ---------------------------------- EXPORTING FILE --------------------------------------------
module.exports = profile;