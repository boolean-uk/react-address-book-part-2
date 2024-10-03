import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../App.jsx";

export default function EditContact() {
  const { id } = useParams();
  const { contacts, setContacts } = useContext(GlobalContext);
  const navigate = useNavigate();
  const contact = contacts.find((c) => c.id === parseInt(id));
  const [updatedContact, setUpdatedContact] = useState(contact);

  useEffect(() => {
    if (!contact) {
      navigate("/");
    }
  }, [contact, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedContact({ ...updatedContact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://boolean-uk-api-server.fly.dev/VictorsCodingCorner/contact/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedContact),
      }
    );

    if (response.ok) {
      const updated = await response.json();
      setContacts(contacts.map((c) => (c.id === parseInt(id) ? updated : c)));
      navigate(`/View/${id}`);
    } else {
      console.error("Failed to update contact");
    }
  };

  if (!contact) return null;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Contact</h2>
      <p>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={updatedContact.firstName}
            onChange={handleChange}
            required
          />
        </label>
      </p>
      <p>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={updatedContact.lastName}
            onChange={handleChange}
            required
          />
        </label>
      </p>
      <p>
        <label>
          Street:
          <input
            type="text"
            name="street"
            value={updatedContact.street}
            onChange={handleChange}
            required
          />
        </label>
      </p>
      <p>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={updatedContact.city}
            onChange={handleChange}
            required
          />
        </label>
      </p>
      <p>
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={updatedContact.gender}
            onChange={handleChange}
            required
          />
        </label>
      </p>
      <p>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={updatedContact.email}
            onChange={handleChange}
            required
          />
        </label>
      </p>
      <p>
        <label>
          Job Title:
          <input
            type="text"
            name="jobTitle"
            value={updatedContact.jobTitle}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Latitude:
          <input
            type="number"
            name="latitude"
            value={updatedContact.latitude}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Longitude:
          <input
            type="number"
            name="longitude"
            value={updatedContact.longitude}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Favourite Colour:
          <input
            type="text"
            name="favouriteColour"
            value={updatedContact.favouriteColour}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Profile Image URL:
          <input
            type="text"
            name="profileImage"
            value={updatedContact.profileImage}
            onChange={handleChange}
          />
        </label>
      </p>
      <button type="submit">Update Contact</button>
    </form>
  );
}
