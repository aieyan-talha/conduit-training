const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//Importing the User Model
const User = require("../models/User");

//Get user by ID
const getUserById = data =>
  new Promise((resolve, reject) => {
    User.findById(data.id)
      .then(user => {
        resolve({ username: user.username, email: user.email });
      })
      .catch(err => {
        reject(err);
      });
  });

//Login User Service
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

//Update User by ID Service
//Get Validation Checks
const ValidateUpdateSettingsInput = require("../validation/update");

const updateUserById = (params, data) =>
  new Promise((resolve, reject) => {
    //Get errors if any
    const { errors, isValid } = ValidateUpdateSettingsInput(data);

    if (!isValid) {
      reject({
        status: 400,
        error: errors
      });
    }

    User.findById(params.user_id)
      .then(user => {
        //Setting up variables to update
        const username = data.username;
        const email = data.email;
        const password = data.password;
        const profile_pic = data.profile_pic;
        const bio = data.bio;

        //Update Values of user recieved by ID
        (user.username = username),
          (user.email = email),
          (user.password = password),
          (user.profile_pic = profile_pic),
          (user.bio = bio);

        //Generate new hash for the password, if it updates, otherwise it will remain the same
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) throw err;

            user.password = hash;
            user
              .save()
              .then(user => {
                resolve(user);
              })
              .catch(err => {
                reject({
                  status: 400,
                  error: err
                });
              });
          });
        });
      })
      .catch(err => {
        reject({
          status: 404,
          error: { usernotfound: "Not user exists with the given ID" }
        });
      });
  });

//Register User Service
const ValidateRegisterInput = require("../validation/register");

const RegisterUser = data =>
  new Promise((resolve, reject) => {
    //Setting up variables
    const username = data.username;
    const email = data.email;
    const password = data.password;

    //Getting Errors if any
    const { errors, isValid } = ValidateRegisterInput(data);

    if (!isValid) {
      reject(errors);
    }

    User.findOne({ email: email }).then(user => {
      //If User Exists
      if (user) {
        errors.email = "email already exists";
        reject(errors);
      } else {
        //Creating a new user object
        const newUser = new User({
          username: username,
          email: email,
          password: password
        });

        //Creating a password hash using BcryptJS
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                resolve(user);
              })
              .catch(err => {
                reject(err);
              });
          });
        });
      }
    });
  });

module.exports = {
  getUserById,
  LoginUser,
  RegisterUser,
  updateUserById
};
