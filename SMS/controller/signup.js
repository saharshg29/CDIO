const signUp = require('../model/signup');
const bcrypt = require('bcrypt');

// ------------------------------------- SIGN-UP OBJECT -------------------------------------
class SignUp {

    async post_user(req, res) {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);


        var { email, user_name } = req.body;


        const user = new signUp({
            email,
            user_name,
            password: hashed
        });

        console.log(user)
        try {
            let result = await user.save();
            res.status(200).send(result)
        }
        catch (err) {
            console.error(err);
        }
    }
}

module.exports = SignUp;