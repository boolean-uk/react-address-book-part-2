import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    gender: "",
    email: "",
    jobTitle: "",
    latitude: "",
    longitude: "",
    favouriteColour: "",
    profileImage: "",
  });

  const contactId = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        `https://boolean-api-server.fly.dev/MrStashy/contact/${contactId}`
      );
      const json = await data.json();
      setFormData(json);
    };
    getData();
  }, [contactId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const update = await fetch(
      `https://boolean-api-server.fly.dev/MrStashy/contact/${contactId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    if (update.ok) {
      console.log("updated successfully");
      navigate(`/contact-list/${contactId}`);
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "latitude" || name === "longitude") {
      value = Number(value);
    }
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit} className="create-contact-form create-contact-form flex flex-col">
        <label htmlFor="firstName">First Name</label>
        <input
          onChange={handleChange}
          value={formData.firstName}
          name="firstName"
          type="textbox"
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          onChange={handleChange}
          value={formData.lastName}
          name="lastName"
          type="textbox"
        />
        <label htmlFor="street">Street</label>
        <input
          onChange={handleChange}
          value={formData.street}
          name="street"
          type="textbox"
        />
        <label htmlFor="city">City</label>
        <input
          onChange={handleChange}
          value={formData.city}
          name="city"
          type="textbox"
        />
        <label htmlFor="gender">Gender</label>
        <input
          onChange={handleChange}
          value={formData.gender}
          name="gender"
          type="textbox"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          value={formData.email}
          name="email"
          type="textbox"
        />
        <label htmlFor="jobTitle">Occupation</label>
        <input
          onChange={handleChange}
          value={formData.jobTitle}
          name="jobTitle"
          type="textbox"
        />
        <label htmlFor="latitude">Latitude</label>
        <input
          onChange={handleChange}
          value={formData.latitude}
          name="latitude"
          type="textbox"
        />
        <label htmlFor="longitude">Longitude</label>
        <input
          onChange={handleChange}
          value={formData.longitude}
          name="longitude"
          type="textbox"
        />
        <label htmlFor="favouriteColour">Favourite Color (hex code)</label>
        <input
          onChange={handleChange}
          value={formData.favouriteColour}
          name="favouriteColour"
          type="textbox"
        />
        <label htmlFor="profileImage">Profile Image (url)</label>
        <input
          onChange={handleChange}
          value={formData.profileImage}
          name="profileImage"
          type="textbox"
        />
        <button type="submit">Update</button>
      </form>
    </>
  );
}
