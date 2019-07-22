import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextAreaInputField = ({
  name,
  value,
  placeholder,
  error,
  info,
  onChange,
  rows,
  type
}) => {
  return (
    <div className="field">
      <div className="control">
        <textarea
          className={classnames("textarea", { "is-invalid": error })}
          placeholder={placeholder}
          name={name}
          value={value}
          rows={rows}
          onChange={onChange}
          type={type}
        />
        {error && <div className="has-text-danger is-size-7">{error}</div>}
      </div>
    </div>
  );
};

TextAreaInputField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  rows: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func
};

export default TextAreaInputField;
