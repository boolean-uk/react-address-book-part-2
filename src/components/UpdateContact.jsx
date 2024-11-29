import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateContact({ contactData, UpdatePerson }) {
  const { id } = useParams();
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    jobTitle: "",
    street: "",
    city: "",
    latitude: 0,
    longitude: 0,
    favouriteColour: "",
    profileImage: "",
  });
  useEffect(() => {
    setContact(contactData[id]);
  }, []);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    UpdatePerson(contact.id, contact); // Call your UpdatePerson function with the form data
    navigate(`/view/${id}`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "firstname") {
      setContact({ ...contact, firstName: value });
    }
    if (name === "lastname") {
      setContact({ ...contact, lastName: value });
    }
    if (name === "gender") {
      setContact({ ...contact, gender: value });
    }
    if (name === "email") {
      setContact({ ...contact, email: value });
    }
    if (name === "jobTitle") {
      setContact({ ...contact, jobTitle: value });
    }
    if (name === "street") {
      setContact({ ...contact, street: value });
    }
    if (name === "city") {
      setContact({ ...contact, city: value });
    }
    if (name === "latitude") {
      setContact({ ...contact, latitude: value });
    }
    if (name === "longitude") {
      setContact({ ...contact, longitude: value });
    }
    if (name === "color") {
      setContact({ ...contact, favouriteColour: value });
    }
  };

  return (
    <main className="survey">
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <label>
            First Name:
            <input
              onChange={handleChange}
              type="text"
              name="firstname"
              value={contact.firstName}
            />
          </label>
          <label>
            Last Name
            <input
              onChange={handleChange}
              type="text"
              name="lastname"
              value={contact.lastName}
            />
          </label>
          <label>
            Gender
            <input
              onChange={handleChange}
              type="text"
              name="gender"
              value={contact.gender}
            />
          </label>
          <label>
            Email
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={contact.email}
            />
          </label>
          <label>
            Job title
            <input
              onChange={handleChange}
              type="text"
              name="jobTitle"
              value={contact.jobTitle}
            />
          </label>
          <label>
            Street
            <input
              onChange={handleChange}
              type="text"
              name="street"
              value={contact.street}
            />
          </label>
          <label>
            City
            <input
              onChange={handleChange}
              type="text"
              name="city"
              value={contact.city}
            />
          </label>
          <label>
            Color
            <input
              onChange={handleChange}
              type="color"
              name="color"
              value={contact.favouriteColour}
            />
          </label>
          <label>
            Latitude
            <input
              onChange={handleChange}
              type="number"
              name="latitude"
              value={contact.latitude}
            />
          </label>
          <label>
            Longitude
            <input
              onChange={handleChange}
              type="number"
              name="longitude"
              value={contact.longitude}
            />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default UpdateContact;
