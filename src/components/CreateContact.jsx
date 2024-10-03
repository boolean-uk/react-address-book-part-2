import { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Context } from "../App";
import '../style/CreateContactCSS.css'

export default function CreateForm() {

    const { contacts, setContacts, navigate, handleNavigation } = useContext(Context)
    

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: ""
      });

      useEffect(() => {
        const button = document.getElementById('create-contact-button');
        if (button) {
          button.style.display = 'none';
        }
    
        return () => {
          if (button) {
            button.style.display = 'block';
          }
        };
      }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    setContacts([...contacts, formData]); // Save formData to context
    handleNavigation('/'); // Redirect to contacts page or any other page
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form className="create-contact" onSubmit={handleSubmit}>
      <h2>Create Contact</h2>
      <label htmlFor="firstName">Firstname</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <label htmlFor="lastName">Lastname</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <label htmlFor="street">Street</label>
      <input
        type="text"
        id="street"
        name="street"
        onChange={handleChange}
        value={formData.street}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        onChange={handleChange}
        value={formData.city}
      />
      <button type="submit">Create</button>
      <button onClick={() => handleNavigation("/")}>Return</button>
    </form>
  );
}
