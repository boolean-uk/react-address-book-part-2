import { useContext, useState } from "react";
import PropTypes from "prop-types";
import Datainput from "../../ui/common/Datainput";
import { newContact } from "../../../services/defaultValues";
import "./ContactEditor.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";

function ContactEditor({ contact }) {
  const { insertContact, updateContact } = useContext(UserContext);
  const [formData, setFormData] = useState(contact ? contact : newContact);
  const navigate = useNavigate();

  const handleInput = (key, value) => {
    setFormData((data) => ({ ...data, [key]: value }));
  };

  const handleSubmit = () => {
    contact ? updateContact(formData) : insertContact(formData);
    contact ? navigate("../") : navigate("/");
  };

  return (
    <div className="contact-editor-form">
      <h2 id="header">{contact ? "Edit Contatct" : "New Contact"}</h2>
      {Object.entries(formData).map(([key, value]) => (
        <Datainput
          key={key}
          label={key.charAt(0).toUpperCase() + key.slice(1)}
          value={value}
          onChange={(newValue) => handleInput(key, newValue)}
        />
      ))}
      <button className="form-button" onClick={handleSubmit}>
        {contact ? "Update" : "Submit"}
      </button>
    </div>
  );
}

ContactEditor.propTypes = {
  contact: PropTypes.object,
};

export default ContactEditor;
