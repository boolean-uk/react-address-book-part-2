import { useState } from "react"
import { useNavigate } from "react-router-dom";

const newContact =
  {
    firstName: '',
    lastName: '',
    street: '',
    city: ''
  }

function ContactsAdd() {
  const [newUser, setNewUser] = useState (newContact)

  const navigation = useNavigate();

  // Submit event:

  const submitFunction = (event) => {
    event.preventDefault();
    console.log('Submit button clicked');

    console.log('First name = ' + newUser.firstName)
    console.log('Last name = ' + newUser.lastName)
    console.log('Street name = ' + newUser.street)
    console.log('City = ' + newUser.city)

    // POST Request to update the contacts:

    fetch('https://boolean-api-server.fly.dev/irlydo/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Contact added:', data);
      })
      .catch(error => {
        console.error('Error adding contact:', error);
      });
      navigation('/')
  }

  return (
    <form className="form-stack contact-form" onSubmit={submitFunction}>
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" required onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}/>

      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" name="lastName" type="text" required onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}/>

      <label htmlFor="street">Street:</label>
      <input id="street" name="street" type="text" required onChange={(e) => setNewUser({ ...newUser, street: e.target.value })}/>

      <label htmlFor="city">City:</label>
      <input id="city" name="city" type="text" required onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}/>

      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  )
}

export default ContactsAdd