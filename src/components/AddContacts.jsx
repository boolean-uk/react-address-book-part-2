import { useState } from "react"
import { useNavigate } from "react-router-dom";

const newContact =
  {
    firstName: '',
    lastName: '',
    street: '',
    city: ''
  }

export default function AddContacts(props) {
  const [newUser, setNewUser] = useState (newContact)

  const navigation = useNavigate();

  const submitFunction = (event) => {
    event.preventDefault();
  
    fetch('https://boolean-api-server.fly.dev/jdm1991/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      window.alert('Network response was not ok.');
    })
    .then(data => {
    navigation('/Contact/List'); 
    })
    .catch(error => {
      window.alert('Error adding contact: ' + error.message);
    });
  }

  return (
    <div className='grid-container'>
    <form className="form-stack contact-form" onSubmit={submitFunction}>
      <h2 className='contacts-title'>Create Contact</h2>

      <label htmlFor="firstName">First Name:</label>
      <input id="firstName" name="firstName" type="text" required onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}/>

      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" name="lastName" type="text" required onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}/>

      <label htmlFor="street">Street:</label>
      <input id="street" name="street" type="text" required onChange={(e) => setNewUser({ ...newUser, street: e.target.value })}/>

      <label htmlFor="city">City:</label>
      <input id="city" name="city" type="text" required onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}/>

      <div className="actions-section">
        <button className="button-blue create-button" type="submit">
          Create
        </button>
      </div>
    </form>
    </div>
  )
}