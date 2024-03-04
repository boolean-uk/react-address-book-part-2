import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateNewContactFormPage() {
  const URL = `https://boolean-api-server.fly.dev/llllllll-l/contact`;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    street: "",
    gender: "",
    email: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.firstName === "") {
      console.log("First name connot be empty");
    } else if (formData.lastName === "") {
      console.log("Surname cannot be empty");
    } else if (formData.city === "") {
      console.log("City cannot be empty");
    } else if (formData.street === "") {
      console.log("Street cannot be empty");
    } else if (formData.gender === "") {
      console.log("Gender cannot be empty");
    } else if (formData.email === "") {
      console.log("Email cannot be empty");
    }
    try {
      const req = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!req.ok) {
        console.log(`HTTP ERROR!, status code: ${req.status}`);
      }

      const res = await req.json();
      console.log("response: ", res);
    } catch (er) {
      console.log("OBS!!! Something went wrong with POST contact: ", er);
    }
    navigate("/");
  };

  const handleInputChange = (event) => {
    const { name, type, value, checked } = event.target;
    console.log(name, type, value, checked);
    if (name !== undefined) {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <form className="create-contact-form" onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          name="firstName"
          type="text"
          placeholder="first name"
          onChange={handleInputChange}
          value={formData.firstName}
        />
      </label>
      <label>
        Surname:
        <input
          name="lastName"
          type="text"
          placeholder="Surname"
          onChange={handleInputChange}
          value={formData.lastName}
        />
      </label>
      <label>
        Gender:
        <input
          name="gender"
          type="text"
          placeholder="Male"
          onChange={handleInputChange}
          value={formData.gender}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          type="text"
          placeholder="temp@tempsson@example.com"
          onChange={handleInputChange}
          value={formData.email}
        />
      </label>
      <label>
        City:
        <input
          name="city"
          type="text"
          placeholder="City"
          onChange={handleInputChange}
          value={formData.city}
        />
      </label>
      <label>
        Street:
        <input
          name="street"
          type="text"
          placeholder="Street"
          onChange={handleInputChange}
          value={formData.street}
        />
      </label>
      <input className="form__dubmit" type="submit" value="Save" />
    </form>
  );
}

export default CreateNewContactFormPage;
