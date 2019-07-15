const express = require("express");
const mongoose = require("mongoose");
const body_parser = require("body-parser");
const passport = require("passport");

const users = require("./routes/users");
const article = require("./routes/article");

const app = express();

//Setting up a port number to listen to
const port = process.env.PORT || 5000;

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => {
    console.log("Local MongoDB is Connected");
  })
  .catch(err => {
    console.log(err);
  });

//Setting up body-parser middleware
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

/*
//This if for test purposes
app.get("/", (req, res) => {
  res.send("This is some response");
});
*/

//Initailizing Passport
app.use(passport.initialize());

//Configuring Passport
require("./config/passport")(passport);

//Setting up api routes
app.use("/api/users", users);
app.use("/api/article", article);

//Application backend is listening at port 5000
app.listen(port, () => {
  console.log(`Server is running at Port ${port}`);
});
