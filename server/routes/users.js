const mongoose = require("mongoose");
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

//Importing Services
const userServices = require("../services/userServices");

//Register User Router
router.post("/register", (req, res) => {
  //Check if user with the given email already exists
  userServices
    .RegisterUser(req.body)
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
  userServices
    .LoginUser(req.body)
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

//Get User by ID
router.get("/:id", (req, res) => {
  userServices
    .getUserById(req.params)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(404).json({ error: "No user found" });
    });
});

//Update User by ID
router.post(
  "/update/:user_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    userServices
      .updateUserById(req.params, req.body)
      .then(user => {
        res.json(user);
      })
      .catch(err => {
        res.status(err.status).json(err.error);
      });
  }
);

module.exports = router;
