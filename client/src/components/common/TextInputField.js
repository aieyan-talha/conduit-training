import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputField = ({
  type,
  name,
  placeholder,
  info,
  error,
  onChange,
  value
}) => {
  return (
    <div className="field">
      <div className="control">
        <input
          className={classnames("input is-large", { "is-invalid": error })}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {error && <div className="has-text-danger is-size-7">{error}</div>}
      </div>
    </div>
  );
};

TextInputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default TextInputField;
