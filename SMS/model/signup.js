const mongoose = require('mongoose');


// ------------------------------- CREATING SCHEMA -------------------------------------
const schema = new mongoose.Schema({
    email:{
        type: String,
        require: true,
    },
    user_name: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    }

})


// ---------------------------------- CREATING MODEL -------------------------------------------
const signUp = mongoose.model("signups", schema);


// ---------------------------------- EXPORTING FILE --------------------------------------------
module.exports = signUp;

