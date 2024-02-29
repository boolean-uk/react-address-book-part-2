import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://boolean-api-server.fly.dev/krzysztofmmm/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        window.alert("Network response was not ok.");
      })
      .then(() => {
        // Redirect to the contact list page
        navigate("/");
      })
      .catch((error) => {
        console.error("Error adding contact:", error);
        window.alert("Error adding contact: " + error.message);
      });
  };

  return (
    <div className="create-contact-form">
      <h2>Create a Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        {/* IF needed i'll add another inputss*/}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateContactForm;
