import { useState } from "react";
import PropTypes from "prop-types";

const DEFAULS_CONTACT = {
  contactId: 1,
  firstName: "",
  lastName: "",
  city: "",
};

export default function ContactForm({ submitCallBack, contact }) {
  const [formData, setFormData] = useState(
    contact ? contact : { ...DEFAULS_CONTACT }
  );
  const [error, setError] = useState("");
  const [creating, setCreating] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitCallBack(formData).then((error) => {
      if (error) {
        setError(error);
      } else {
        setCreating(true);
      }
    });
  };

  const nameValid = formData.firstName.length > 0;
  const lastNameValid = formData.lastName.length > 0;
  const cityValid = formData.city.length > 0;

  return (
    <>
      <from onSubmit={handleSubmit}>
        {!nameValid && (
          <label style={{ color: "red" }}>
            The first name must have at least one character.
          </label>
        )}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        {!lastNameValid && (
          <label htmlFor="lastName">
            The last name must have at least one character.
          </label>
        )}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        {!cityValid && <label htmlFor="city">City</label>}
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        <button type="submit">Create</button>
      </from>
      {creating && <p>Contact created</p>}
      {error.length > 0 && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

ContactForm.propTypes = {
  submitCallBack: PropTypes.func.isRequired,
  contact: PropTypes.object,
};
