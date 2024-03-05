import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditContact() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/maritmoe/contact/${id}`)
      .then((response) => response.json())
      .then(setContact);
  }, [id]);

  if (!contact) return <p>No contact with that id found...</p>;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    // Updates existing contact by making PUT request
    fetch(`https://boolean-api-server.fly.dev/maritmoe/contact/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    // Navigate to contact information page
    navigate(`/view/${id}`);
  }

  return (
    <article>
      <h2 className="form-title">Update Contact</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          First name
          <input
            type="text"
            name="firstName"
            required
            onChange={handleChange}
            value={contact.firstName}
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            name="lastName"
            required
            onChange={handleChange}
            value={contact.lastName}
          />
        </label>
        <label>
          Street
          <input
            type="text"
            name="street"
            required
            onChange={handleChange}
            value={contact.street}
          />
        </label>
        <label>
          City
          <input
            type="text"
            name="city"
            required
            onChange={handleChange}
            value={contact.city}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </article>
  );
}

export default EditContact;
