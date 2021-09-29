const signUp = require('../model/signup');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

// ------------------------------------- SIGN-UP OBJECT -------------------------------------
class LogIn {

    async post_user(req, res) {
        const schema = Joi.object({
            email: Joi.string().min(6).max(255).required().email(),
            password: Joi.string().max(1024).min(8).required(),
          });
        const { errr } = schema.validate(req.body);
        if (errr) return res.status(400).send("Validation failed");

        const userExist = await signUp.findOne({ email: req.body.email });
        if (!userExist) return res.status(400).send("Wrong Username or password");

        // console.log(userExist)

        const validPass = await bcrypt.compare(req.body.password, userExist.password);
        if (!validPass) return res.status(400).send("Wrong username or password");
        else {
            console.log('Logged IN')
            res.status(200).send('Logged IN')
            const token = await jwt.sign({ _id: userExist._id }, process.env.PRIVATE_TOKEN);
            res.header('auth-token', token).send(token);
        }
    }
}

module.exports = LogIn;