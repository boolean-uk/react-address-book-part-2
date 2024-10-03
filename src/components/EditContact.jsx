import { useContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Context } from "../App";
import '../style/CreateContactCSS.css'

export default function EditForm() {

    const { id } = useParams();
    const { contacts, setContacts, handleNavigation } = useContext(Context);
    const contact = contacts.find((contact) => contact.id === parseInt(id));
    

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
        setContacts(contacts.map(contact => 
          contact.id === parseInt(id) ? { ...contact, ...formData } : contact
        ));
    handleNavigation(`/contacts/${id}`)

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
      <h2>Edit Contact</h2>
      <p>Current Firstname: {contact.firstName}</p>
      <label htmlFor="firstName">New Firstname</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <p>Current Lastname: {contact.lastName}</p>

      <label htmlFor="lastName">New Lastname</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <p>Current Street: {contact.city}</p>

      <label htmlFor="street">New Street</label>
      <input
        type="text"
        id="street"
        name="street"
        onChange={handleChange}
        value={formData.street}
      />
      <p>Current City: {contact.city}</p>

      <label htmlFor="city">New City</label>
      <input
        type="text"
        id="city"
        name="city"
        onChange={handleChange}
        value={formData.city}
      />
      <button type="submit">Save</button>
      <button onClick={() => handleNavigation("/")}>Return</button>
    </form>
  );
}
