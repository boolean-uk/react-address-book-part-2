import './ContactForm.css';

import { useState } from "react";

function ContactForm({addContact}) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');

   const handleSUbmit = (e) => {
        e.preventDefault();
        const newContact = {
            firstName,
            lastName,
            street,
            city
        };
        addContact(newContact);
        setFirstName('');
        setLastName('');
        setStreet('');
        setCity('');
    }

  return (
    <form onSubmit={handleSUbmit}>
      <h2>New Contact</h2>

      <div>
        <label htmlFor="firstName">First Name</label><br />
        <input type="text" id="firstName" name="firstName" onChange={(e) => setFirstName(e.target.value)}/>
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label><br/>
        <input type="text" id="lastName" name="lastName" onChange={(e) => setLastName(e.target.value)}/>
      </div>

      <div>
        <label htmlFor="street">Street</label><br/>
        <input type="text" id="street" name="street" onChange={(e) => setStreet(e.target.value)}/> 
      </div>

      <div>
        <label htmlFor="city">City</label><br />
        <input type="text" id="city" name="city" onChange={(e) => setCity(e.target.value)}/>
      </div>

      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm