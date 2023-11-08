import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  gender: "",
  email: "",
  jobTitle: "",
};

export default function UpdateProfile({ setRefresh }) {
  const [updatedContact, setUpdatedContact] = useState(INITIAL_STATE);

  const params = useParams();
  const { id } = params;

  const navigate = useNavigate();

  const updateContact = (e) => {
    e.preventDefault();

    const opts = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedContact),
    };

    fetch(`https://boolean-api-server.fly.dev/yee0802/contact/${id}`, opts)
      .then((res) => res.json)
      .then(() => {
        const form = document.getElementById("contact-form");

        setUpdatedContact(INITIAL_STATE);
        setRefresh(true);

        form.reset();
        navigate(`/contacts/${id}`);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdatedContact({ ...updatedContact, [name]: value });
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
    <div className="update-contact container">
      <h1>Update Contact</h1>
      <form id="contact-form" onSubmit={updateContact}>
        {options.map((option, idx) => (
          <label key={idx} htmlFor={option}>
            {`${option.charAt(0).toUpperCase() + option.slice(1)}:`}{" "}
            <input
              type={option}
              id={option}
              name={option}
              value={updatedContact.option}
              onChange={(e) => handleChange(e)}
            />
          </label>
        ))}
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
