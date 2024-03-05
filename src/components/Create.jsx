import { useState } from "react";

export const Create = ({addContact}) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    jobTitle: "",
    street: "",
    city: "",
    latitude: 0,
    longitude: 0,
    favouriteColour: "#e12345",
    profileImage: "https://www.gravatar.com/avatar/you@gmail.com?s=120&d=identicon",
  });

  const headers = ["First Name", "Last Name", "Gender", "Email", "Job Title", "Street", "City", "Latitude", "Longitude", "Favourite Colour", "Profile Image"];

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(form);
  }

  return (
    <form>
      <h2>Create Contact</h2>
      {Object.keys(form)
        .filter((key) => key !== "id")
        .map((key, index) => (
          <div className="form-item" key={key}>
            <h3>{headers[index]}</h3>
            <input
              id={key}
              name={key}
              value={form[key]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            />
          </div>
        ))}
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}