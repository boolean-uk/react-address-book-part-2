import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from '../App.jsx';

export default function AddContact() {
  const { contacts, setContacts } = useContext(GlobalContext);
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    gender: "",
    email: "",
    jobTitle: "",
    latitude: 0,
    longitude: 0,
    favouriteColour: "",
    profileImage: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://boolean-uk-api-server.fly.dev/VictorsCodingCorner/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    });

    if (response.ok) {
      const addedContact = await response.json();
      setContacts([...contacts, addedContact]);
      navigate("/");
    } else {
      console.error("Failed to add contact");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Contact</h2>
      <p>
        <label>
          First Name:
          <input type="text" name="firstName" value={newContact.firstName} onChange={handleChange} required />
        </label>
      </p>
      <p>
        <label>
          Last Name:
          <input type="text" name="lastName" value={newContact.lastName} onChange={handleChange} required />
        </label>
      </p>
      <p>
        <label>
          Street:
          <input type="text" name="street" value={newContact.street} onChange={handleChange} required />
        </label>
      </p>
      <p>
        <label>
          City:
          <input type="text" name="city" value={newContact.city} onChange={handleChange} required />
        </label>
      </p>
      <p>
        <label>
          Gender:
          <input type="text" name="gender" value={newContact.gender} onChange={handleChange} required />
        </label>
      </p>
      <p>
        <label>
          Email:
          <input type="email" name="email" value={newContact.email} onChange={handleChange} required />
        </label>
      </p>
      <p>
        <label>
          Job Title:
          <input type="text" name="jobTitle" value={newContact.jobTitle} onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Latitude:
          <input type="number" name="latitude" value={newContact.latitude} onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Longitude:
          <input type="number" name="longitude" value={newContact.longitude} onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Favourite Colour:
          <input type="text" name="favouriteColour" value={newContact.favouriteColour} onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Profile Image URL:
          <input type="text" name="profileImage" value={newContact.profileImage} onChange={handleChange} />
        </label>
      </p>
      <button type="submit">Add Contact</button>
    </form>
  );
}
