import { useState } from "react";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  gender: "",
  email: "",
  jobTitle: "",
};

const AddContactForm = ({ setRefresh }) => {
  const [newContact, setNewContact] = useState(INITIAL_STATE);

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
    };

    fetch("https://boolean-api-server.fly.dev/yee0802/contact/", opts)
      .then((res) => res.json())
      .then((data) => {
        const form = document.getElementById("contact-form");

        setNewContact(INITIAL_STATE);
        setRefresh(true);

        form.reset();
        navigate("/contacts");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewContact({ ...newContact, [name]: value });
  };

  const options = [
    "firstName",
    "lastName",
    "email",
    "street",
    "city",
    "gender",
    "jobTitle",
  ];

  return (
    <form id="contact-form" onSubmit={submitForm}>
      {options.map((option, idx) => (
        <label key={idx} htmlFor={option}>
          {`${option.charAt(0).toUpperCase() + option.slice(1)}:`}{" "}
          <input
            type={option}
            id={option}
            name={option}
            value={newContact.option}
            onChange={(e) => handleChange(e)}
            required
          />
        </label>
      ))}
      <button type="submit">Create</button>
    </form>
  );
};

export default AddContactForm;
