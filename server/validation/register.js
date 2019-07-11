const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = ValidateRegisterInput = data => {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (isEmpty(data.username)) {
    errors.username = "Username field is required";
  }

  if (isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 charachters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
