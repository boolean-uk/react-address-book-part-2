import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateContact({fetchData}) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://boolean-uk-api-server.fly.dev/hansjhaland/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        fetchData();
        navigate("/");
      } else {
        alert("Failed to create contact.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create new contact</h3>
      <label>
        First name: <br />
        <input name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Last name: <br />
        <input name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Street: <br />
        <input name="street" value={formData.street} onChange={handleChange} />
      </label>
      <br /> 
      <label>
        City: <br />
        <input name="city" value={formData.city} onChange={handleChange} />
      </label>
      <br/>
      <button type="submit">Create</button>
    </form>

    )
}

export default CreateContact;