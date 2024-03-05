import { useState } from "react";
import PropTypes from "prop-types";

const DEFAULT_CONTACT = {
  contactId: 1,
  firstName: "",
  lastName: "",
  email: "",
  street: "",
};

export default function ContactForm({ submitCallBack, contact }) {
  const [formData, setFormData] = useState(
    contact ? contact : { ...DEFAULT_CONTACT }
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
        setFormData({ ...DEFAULT_CONTACT });
      }
    });
  };

  const nameValid = formData.firstName.length > 3;
  const lastNameValid = formData.lastName.length > 3;
  const streetValid = formData.street.length > 3;

  return (
    <>
      <form onSubmit={handleSubmit}>
        {!nameValid && (
          <label style={{ color: "red" }}>
            The first name must have at least three character.
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
            The last name must have at least three character.
          </label>
        )}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        {!streetValid && <label htmlFor="street">Street</label>}
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={formData.street}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Create</button>
      </form>
      {creating && <p>Contact created</p>}
      {error.length > 3 && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

ContactForm.propTypes = {
  submitCallBack: PropTypes.func.isRequired,
  contact: PropTypes.object,
};
