import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://boolean-uk-api-server.fly.dev/abdi0609/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => navigate("/"));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" placeholder="First Name" onChange={handleChange} required />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
      <input name="street" placeholder="Street" onChange={handleChange} required />
      <input name="city" placeholder="City" onChange={handleChange} required />
      <button type="submit">Create Contact</button>
    </form>
  );
}

export default CreatePage;
