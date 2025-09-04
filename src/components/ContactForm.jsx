import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ApiContext } from "../App";

function ContactForm() {
  const createUserUrl =
    "https://boolean-uk-api-server.fly.dev/JakubMroz4/contact";
  const [formData, setFormData] = useState({
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
    profileImage:
      "https://www.gravatar.com/avatar/sdfa@fasdf.com?s=120&d=identicon",
  });

  const { refreshData } = useContext(ApiContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("POST content", JSON.stringify(formData));

    try {
      const response = await fetch(createUserUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Server response:", result);
    } catch (error) {
      console.error("Error creating contact:", error);
    }

    navigate("/");
    refreshData();
  };

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="textInputShort"
          />

          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="textInputShort"
          />
        </fieldset>

        <fieldset className="fieldsetVertical">
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="Street"
            className="textInputLong"
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="textInputLong"
          />
        </fieldset>

        <fieldset>
          <legend>Gender:</legend>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
            />
            Other
          </label>
        </fieldset>

        <fieldset className="fieldsetVertical">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="textInputShort"
          />

          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Job Title"
            className="textInputShort"
          />
          <label htmlFor="latitude" className="formLabel">
            Latitude:
          </label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            value={formData.latitude}
            onChange={handleChange}
            placeholder="Latitude"
            className="textInputNumber"
            min="-90"
            max="90"
          />

          <label htmlFor="longitude" className="formLabel">
            Longitude:
          </label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            value={formData.longitude}
            onChange={handleChange}
            placeholder="Longitude"
            className="textInputNumber"
            min="-180"
            max="180"
          />

          <input
            type="text"
            name="favouriteColour"
            value={formData.favouriteColour}
            onChange={handleChange}
            placeholder="Favourite Colour"
            className="textInputShort"
          />
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
