import React from "react";
import PropTypes from "prop-types";

function Datainput({ label, value, onChange, id, name, placeholder }) {
  const handleChange = (e) => {
    let newValue = e.target.value;
    if (!isNaN(newValue)) {
      newValue.length > 0 ? (newValue = Number(newValue)) : (newValue = "");
    }
    value = newValue;
    onChange(newValue);
  };
  return (
    <div className="data-input">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        className="value"
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
        disabled={label.toLowerCase() === "id" ? true : false}
      />
    </div>
  );
}

Datainput.propTypes = {};

export default Datainput;
