import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateContact() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    // Adds new contact by making POST request
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    };

    fetch("https://boolean-api-server.fly.dev/maritmoe/contact", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    // Navigate to dashboard
    navigate("/");
  }

  return (
    <article>
      <h2 className="form-title">Create Contact</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          First name
          <input
            type="text"
            name="firstName"
            required
            onChange={handleChange}
            value={userData.firstName}
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            name="lastName"
            required
            onChange={handleChange}
            value={userData.lastName}
          />
        </label>
        <label>
          Street
          <input
            type="text"
            name="street"
            required
            onChange={handleChange}
            value={userData.street}
          />
        </label>
        <label>
          City
          <input
            type="text"
            name="city"
            required
            onChange={handleChange}
            value={userData.city}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </article>
  );
}

export default CreateContact;
