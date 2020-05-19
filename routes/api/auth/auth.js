const express = require("express");
const { check, validationResult } = require("express-validator");

const router = express.Router();

const FirebaseAuth = require('firebaseauth'); // or import FirebaseAuth from 'firebaseauth';

router.post(
    '/',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;


        var key = "ProjectWebkey" //Generate project key from firebase console

        const firebase = new FirebaseAuth(key);

        firebase.signInWithEmail(email, password, function (err, result) {
            if (err) {
                console.log(err);
                res.json(err);
            }
            else {
                console.log(result);
                res.json(result)
            }
        });
    }
);

module.exports = router;