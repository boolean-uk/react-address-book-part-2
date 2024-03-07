import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initContact = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
};

const Form = () => {
  const [contact, setContact] = useState(initContact);
  const [pending, setPending] = useState(false);
  const navigator = useNavigate()

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value
    const name = e.target.name 
      
    setContact({...contact, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPending(true)
    fetch('https://boolean-api-server.fly.dev/toege/contact/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact)
      })
      .then(() => {
        setPending(false)
        navigator("/contact")
      });
  };

  return (
    <main>
      <h1>Add New Contact</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div>
          <ul>
            <label>First Name</label>
          </ul>
          <ul>
            <input
              type="firstName"
              name="firstName"
              value={contact.firstName}
              onChange={handleChange}
            />
          </ul>
          <ul>
            <label>Last Name</label>
          </ul>
          <ul>
            <input
              type="lastName"
              name="lastName"
              value={contact.lastName}
              onChange={handleChange}
            />
          </ul>
          <ul>
            <label>Street</label>
          </ul>
          <ul>
            <input
              type="street"
              name="street"
              value={contact.street}
              onChange={handleChange}
            />
          </ul>
          <ul>
            <label>City</label>
          </ul>
          <ul>
            <input
              type="city"
              name="city"
              value={contact.city}
              onChange={handleChange}
            />
          </ul>
        </div>
        {!pending && <input className="form__submit" type="submit" value="Add Contact" />}
        {pending && <button>Sending...</button>}
        
      </form>
    </main>
  );
};

export default Form;