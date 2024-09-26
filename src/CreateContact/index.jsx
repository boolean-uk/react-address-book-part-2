import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateContact(props) {
  const [contact, setContact] = useState({
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
    profileImage:
      "https://www.gravatar.com/avatar/Ciara9@gmail.com?s=120&d=identicon",
  });

  const navigate = useNavigate();

  const { setContacts } = props;

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "number" ? parseFloat(value) : value; // parses if the input is longitude or latitude
    setContact((prevContact) => ({
      ...prevContact,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts((prevContacts) => [...prevContacts, contact]);
    setContact({
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
    postJSON(contact);
    navigate("/contacts");
  };

  async function postJSON(data) {
    try {
      const response = await fetch(
        "https://boolean-api-server.fly.dev/espensolhaug1/contact",
        {
          method: "POST",
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
          value={contact.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
        />
        <label htmlFor="gender">Gender</label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={contact.gender}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
        />
        <label htmlFor="jobTitle">Job Title</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={contact.jobTitle}
          onChange={handleChange}
        />
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          value={contact.street}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={contact.city}
          onChange={handleChange}
        />
        <label htmlFor="longitude">Longitude</label>
        <input
          type="number"
          min={-180}
          max={180}
          id="longitude"
          name="longitude"
          value={contact.longitude}
          onChange={handleChange}
        />
        <label htmlFor="latitude">Latitude</label>
        <input
          type="number"
          min={-90}
          max={90}
          id="latitude"
          name="latitude"
          value={contact.latitude}
          onChange={handleChange}
        />
        <label htmlFor="favouriteColour">Favourite Colour</label>
        <input
          type="color"
          id="favouriteColour"
          name="favouriteColour"
          value={contact.favouriteColour}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateContact;
