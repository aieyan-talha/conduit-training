const mongoose = require("mongoose");
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

//Importing Services
const RegisterUser = require("../services/RegisterUser");
const LoginUser = require("../services/LoginUser");

//Register User Router
router.post("/register", (req, res) => {
  //Check if user with the given email already exists
  RegisterUser(req.body)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.status(400).json(err));
});

//Login User Route
router.post("/login", (req, res) => {
  //Get Email and Password from frontend
  const email = req.body.email;
  const password = req.body.password;

  //Finding user by email
  LoginUser(req.body)
    .then(hash => {
      res.json(hash);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Get Current User
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.username,
      email: req.user.email
    });
  }
);

module.exports = router;
