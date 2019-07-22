const Validator = require("validator");
const is_empty = require("./is-empty");

module.exports = ValidateUpdateSettingsInput = data => {
  let errors = {};

  data.username = !is_empty(data.username) ? data.username : "";
  data.email = !is_empty(data.email) ? data.email : "";
  data.password = !is_empty(data.password) ? data.password : "";
  data.bio = !is_empty(data.bio) ? data.bio : "";
  data.profile_pic = !is_empty(data.profile_pic) ? data.profile_pic : "";

  if (!Validator.isURL(data.profile_pic)) {
    errors.profile_pic = "This is not a valid URL";
  }

  if (is_empty(data.username)) {
    errors.username = "Username field is required";
  }

  if (is_empty(data.password)) {
    errors.password = "Password field is required";
  }

  if (is_empty(data.email)) {
    errors.email = "Email field is required";
  }

  return {
    errors,
    isValid: is_empty(errors)
  };
};
