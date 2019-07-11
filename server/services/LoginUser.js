const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//Importing the User Model
const User = require("../models/User");

//Importing Keys
const keys = require("../config/keys");

//Import Errors Checks
const ValidateLoginInput = require("../validation/login");

const LoginUser = data =>
  new Promise((resolve, reject) => {
    const email = data.email;
    const password = data.password;

    const { errors, isValid } = ValidateLoginInput(data);

    if (!isValid) {
      reject(errors);
    }

    User.findOne({ email }).then(user => {
      if (!user) {
        errors.email = "Email does not exist";
        return reject(errors);
      }

      //Check if password matches
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = {
            id: user.id,
            username: user.username
          };

          //Sign Token with JWT Token
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3000 },
            (err, token) => {
              resolve({ success: true, token: "Bearer " + token });
            }
          );
        } else {
          errors.password = "Password is incorrect";
          reject(errors);
        }
      });
    });
  });

module.exports = LoginUser;
