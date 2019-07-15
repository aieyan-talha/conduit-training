const Validator = require("validator");
const is_empty = require("./is-empty");

module.exports = ValidateArticleInput = data => {
  let errors = {};

  data.text = !is_empty(data.text) ? data.text : "";
  data.title = !is_empty(data.title) ? data.title : "";
  data.subtitle = !is_empty(data.subtitle) ? data.subtitle : "";

  if (is_empty(data.text)) {
    errors.text = "Article text is required";
  }

  if (is_empty(data.title)) {
    errors.title = "Title field is required";
  }

  if (is_empty(data.subtitle)) {
    errors.subtitle = "Subtitle field is required";
  }

  return {
    errors,
    isValid: is_empty(errors)
  };
};
