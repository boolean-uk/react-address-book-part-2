import React, { useState } from "react";
import PropTypes from "prop-types";
import Datainput from "../../ui/common/Datainput";
import { newContact } from "../../../services/defaultValues";
import "./ContactEditor.css";
import { useParams } from "react-router-dom";

function ContactEditor(props) {
  const { id } = useParams();
  const [formData, setFormData] = useState(newContact);

  const handleInput = (key, value) => {
    setFormData((data) => ({ ...data, [key]: value }));
    console.log(id);
  };

  return (
    <div className="contact-editor-form">
      <h2 id="header">New contact</h2>
      {Object.entries(formData).map(([key, value]) => (
        <Datainput
          key={key}
          label={key.charAt(0).toUpperCase() + key.slice(1)}
          value={value}
          onChange={(newValue) => handleInput(key, newValue)}
        />
      ))}
    </div>
  );
}

ContactEditor.propTypes = {};

export default ContactEditor;
