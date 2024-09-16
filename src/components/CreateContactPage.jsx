import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateContactPage = () => {
  const INITAL_STATE_FORM = {
    firstName: "",
    lastName: "",
    city: "",
    street: "",
  };

  const [form, setForm] = useState(INITAL_STATE_FORM);
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postNewContact();
    setForm(INITAL_STATE_FORM);
    navigate("/contacts");
  };

  const postNewContact = async () => {
    try {
      await fetch("https://boolean-api-server.fly.dev/LinusWillmont/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log("Posted successfully");
    } catch (error) {
      console.error("Failed to post contact", error);
    }
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
            onChange={handleInput}
          />
        </li>
        <li>
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={form.lastName}
            onChange={handleInput}
          />
        </li>
        <li>
          <label htmlFor="street">Street</label>
          <input
            id="street"
            name="street"
            type="text"
            value={form.street}
            onChange={handleInput}
          />
        </li>
        <li>
          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            type="text"
            value={form.city}
            onChange={handleInput}
          />
        </li>
        <li>
          <input type="submit" value="Submit" />
        </li>
      </ul>
    </form>
  );
};
