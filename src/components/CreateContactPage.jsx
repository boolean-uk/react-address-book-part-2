import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateContactPage = () => {
  const INITAL_STATE_FORM = {
    firstName: "",
    lastName: "",
    city: "",
    street: "",
  };

  const navigate = useNavigate();

  const [form, setForm] = useState(INITAL_STATE_FORM);

  const postNewContact = async () => {
    fetch("https://boolean-api-server.fly.dev/LinusWillmont/contact", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).catch((error) => console.error("Failed to post contact", error));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    postNewContact().then(() => {
      setForm(INITAL_STATE_FORM);
      navigate("/contacts");
    });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <ul>
        <li>
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
        </li>
        <li>
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
        </li>
        <li>
          <label htmlFor="street">Street</label>
          <input
            id="street"
            name="street"
            type="text"
            value={form.street}
            onChange={(e) => setForm({ ...form, street: e.target.value })}
          />
        </li>
        <li>
          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            type="text"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />
        </li>
        <li>
          <input type="submit" value="Submit" />
        </li>
      </ul>
    </form>
  );
};
