import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateContact(props) {
  const { contacts, setContacts } = props;
  const { id } = useParams();
  const [updatedContact, setUpdatedContact] = useState({});
  const contact = contacts.find((c) => c.id === parseInt(id));
  const navigate = useNavigate();

  useEffect(() => {
    setUpdatedContact(contact);
  }, [contact]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "number" ? parseFloat(value) : value; // parses if the input is longitude or latitude
    setUpdatedContact((prevContact) => ({
      ...prevContact,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts((prevContacts) => [...prevContacts, contact]);
    setUpdatedContact({
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      jobTitle: "",
      street: "",
      city: "",
      longitude: 0,
      latitude: 0,
      favouriteColour: "",
    });
    putJSON(updatedContact);
    navigate(`/contacts/${id}`);
  };

  async function putJSON(data) {
    try {
      const response = await fetch(
        `https://boolean-api-server.fly.dev/espensolhaug1/contact/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <h2>Create a new Contact</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "20%" }}
      >
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={updatedContact.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={updatedContact.lastName}
          onChange={handleChange}
        />
        <label htmlFor="gender">Gender</label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={updatedContact.gender}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={updatedContact.email}
          onChange={handleChange}
        />
        <label htmlFor="jobTitle">Job Title</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={updatedContact.jobTitle}
          onChange={handleChange}
        />
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          value={updatedContact.street}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={updatedContact.city}
          onChange={handleChange}
        />
        <label htmlFor="longitude">Longitude</label>
        <input
          type="number"
          min={-180}
          max={180}
          id="longitude"
          name="longitude"
          value={updatedContact.longitude}
          onChange={handleChange}
        />
        <label htmlFor="latitude">Latitude</label>
        <input
          type="number"
          min={-85}
          max={85}
          id="latitude"
          name="latitude"
          value={updatedContact.latitude}
          onChange={handleChange}
        />
        <label htmlFor="favouriteColour">Favourite Colour</label>
        <input
          type="color"
          id="favouriteColour"
          name="favouriteColour"
          value={updatedContact.favouriteColour}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UpdateContact;
