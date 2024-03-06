import React from "react";
import PropTypes from "prop-types";

function Datainput({ label, value, onChange, id, name, placeholder }) {
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
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

Datainput.propTypes = {};

export default Datainput;
