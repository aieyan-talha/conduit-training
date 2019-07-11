import React from "react";
import PropTypes from "prop-types";

const TextInputField = ({
  type,
  placeholder,
  value,
  info,
  error,
  onSubmit
}) => {
  return (
    <div className="field">
      <div className="control">
        <input
          className="input is-large"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

TextInputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

export default TextInputField;
