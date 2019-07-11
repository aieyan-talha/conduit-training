const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = ValidateLoginInput = userData => {
  let errors = {};

  userData.email = !isEmpty(userData.email) ? userData.email : "";
  userData.password = !isEmpty(userData.password) ? userData.password : "";

  if (isEmpty(userData.email)) {
    errors.email = "Email is required";
  }

  if (isEmpty(userData.password)) {
    errors.password = "Password is required";
  }

  if (!Validator.isEmail(userData.email)) {
    errors.email = "Email is invalid";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
