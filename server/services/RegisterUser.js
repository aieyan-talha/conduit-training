const bcrypt = require("bcryptjs");
const User = require("../models/User");

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

module.exports = RegisterUser;
