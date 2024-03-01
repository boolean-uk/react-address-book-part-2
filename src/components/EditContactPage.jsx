import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditContactPage = ({ contacts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = contacts.find(
    (contact) => contact.id.toString() === id.toString()
  );
  let initalStateForm = {
    firstName: contact.firstName,
    lastName: contact.lastName,
    city: contact.city,
    street: contact.street,
  };
  const [form, setForm] = useState(initalStateForm);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postNewContact();
    navigate(`/contacts/${id}`);
  };

  const postNewContact = async () => {
    try {
      await fetch(
        `https://boolean-api-server.fly.dev/LinusWillmont/contact/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(form),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
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
