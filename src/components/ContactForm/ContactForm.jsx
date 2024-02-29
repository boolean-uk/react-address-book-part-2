import { useState } from "react";
import "./AddContactForm.css";
import { useNavigate } from "react-router-dom";
const newContact = {
  firstName: "",
  lastName: "",
  city: "",
  street: "",
};

function ContactForm({ method, contact }) {
  const [formData, setFormData] = useState(
    contact ? { ...contact } : newContact
  );
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submit to API");
    //Dont navigate before api-call i complete,
    // or data rendered in contacts wont contain new entry
    if (method === "POST") {
      const url = "https://boolean-api-server.fly.dev/martenere/contact";
      await ApiRequest("POST", url);
      navigate("/contacts");
    } else if (method === "PUT") {
      const url = `https://boolean-api-server.fly.dev/martenere/contact/${formData.id}`;
      await ApiRequest("PUT", url);
      // Very ugly to pass down fetchContacts all the way here, but needed to retrigger when updating profile

      navigate(`/contacts/${formData.id}`);
    } else {
      console.log("Something went wrong on handleSubmit", this);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    // console.log(value, name);
    setFormData({ ...formData, [name]: value });
  };
  // console.log(formData);

  async function ApiRequest(method, url) {
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      street: formData.street,
      city: formData.city,
      gender: "Male",
      email: `${formData.firstName}.${formData.lastName}@email.com`,
      jobTitle: "Scientist",
      latitude: 42,
      longitude: 629,
      favouriteColour: "#0d7f26",
      profileImage: `https://www.gravatar.com/avatar/${formData.firstName}@${formData.lastName}.com?s=120&d=identicon`,
    };

    const postOptions = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    let res = await fetch(url, postOptions);
    let data = await res.json();
    // console.log(data);
  }

  return (
    <div className="center">
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="header-text">
            {method === "POST" ? "Add new Contact" : "Edit User"}
          </div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
            />
          </label>
          <label>
            Street:
            <input
              type="text"
              name="street"
              onChange={handleChange}
              value={formData.street}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              onChange={handleChange}
              value={formData.city}
            />
          </label>
          <input type="submit" value="Submit" onChange={handleChange} />
        </form>
      </div>
    </div>
  );
}
export default ContactForm;
