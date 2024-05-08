import { useState } from "react";

export default function CreateContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    gender: "",
    email: "",
    jobTitle: "",
    latitude: '',
    longitude: '',
    favouriteColour: '',
    profileImage: ''
  });

  function handleChange(e) {
    let { name, value } = e.target;
    if (name === 'latitude' || name === 'longitude') {
        value = Number(value)
    }
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
    const postData = await fetch(
      "https://boolean-api-server.fly.dev/MrStashy/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (postData.ok) {
      setFormData({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        gender: "",
        email: "",
        jobTitle: "",
        latitude: '',
        longitude: '',
        favouriteColor: '',
        profileImage: ''
      });
    } else {
      const errorResponse = await postData.json()
      console.log(errorResponse.error)
    }
  }

  return (
    <>
      <h2 className="text-4xl text-outrun-pink">Create Contact</h2>
      <form onSubmit={handleSubmit} className="create-contact-form my-4 flex flex-col gap-2 text-outrun-pink">
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
         <label htmlFor="favouriteColour">Favourite Colour (hex code)</label>
        <input
          onChange={handleChange}
          value={formData.favouriteColour}
          name="favouriteColour"
          type="textbox"
        />
           <label htmlFor="proileImage">Profile Image (url)</label>
        <input
          onChange={handleChange}
          value={formData.proileImage}
          name="favouriteColour"
          type="textbox"
        />
        <button className="bg-outrun-blue rounded-full border-2 border-outrun-pink" type="submit">Create</button>
      </form>
    </>
  );
}
