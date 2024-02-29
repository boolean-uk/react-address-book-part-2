import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ContactForm({ handleJson, isNew, contacts }) {
  const [formData, setFormData] = useState([]);
  const { id } = useParams();

  const handleInputChange = (event) => {
    const { name, type, value, checked } = event.target;
    console.log("handleInput", name, type, value, checked);

    if (name === "longitude" || name === "latitude") {
      console.log("longlat!", name, value, typeof value, parseFloat(value));
      const floatVal = parseFloat(value);
      console.log("to float? ", floatVal, typeof floatVal);
      setFormData({ ...formData, [name]: floatVal });
    }

    if (name !== undefined) {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    const updData = contacts.find((p) => parseInt(p.id) === parseInt(id));
    if (updData !== undefined) {
      setFormData({ ...updData });
    }
    if (isNew) {
      setFormData([]);
    }
  }, [id, contacts, isNew]);

  return (
    <section className="contacts">
      {formData === undefined ? (
        <p>loading </p>
      ) : (
        <form className="form" onSubmit={(e) => handleJson(e, formData)}>
          {isNew ? <h2>Create Contact</h2> : <h2>Update Contact</h2>}
          <label>
            First Name:
            <input
              id="firstname"
              type="text"
              name="firstName"
              value={formData.firstName ?? ""}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Last Name:
            <input
              id="lastname"
              type="text"
              name="lastName"
              value={formData.lastName ?? ""}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Gender:
            <input
              id="gender"
              type="text"
              name="gender"
              value={formData.gender ?? ""}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Email:
            <input
              id="email"
              type="text"
              name="email"
              value={formData.email ?? ""}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Job Title:
            <input
              id="jobTitle"
              type="text"
              name="jobTitle"
              value={formData.jobTitle ?? ""}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Street:
            <input
              id="street"
              type="text"
              name="street"
              value={formData.street ?? ""}
              onChange={handleInputChange}
            />
          </label>

          <label>
            City:
            <input
              id="city"
              type="text"
              name="city"
              value={formData.city ?? ""}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Latitute:
            <input
              id="latitude"
              type="text"
              name="latitude"
              value={formData.latitude ?? ""}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Longitude:
            <input
              id="longitude"
              type="text"
              name="longitude"
              value={formData.longitude ?? ""}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Favorite Color:
            <input
              id="favouriteColour"
              type="text"
              name="favouriteColour"
              value={formData.favouriteColour ?? ""}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Profile Image:
            <input
              id="profileImage"
              type="text"
              name="profileImage"
              value={formData.profileImage ?? ""}
              onChange={handleInputChange}
            />
          </label>

          {isNew ? (
            <input className="form__submit" type="submit" value="Submit" />
          ) : (
            <input className="form__submit" type="submit" value="Update" />
          )}
        </form>
      )}
    </section>
  );
}

export default ContactForm;
