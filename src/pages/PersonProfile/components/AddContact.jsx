import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddContact(props) {
  console.log("Inside AddContact: ", { props });
  const { contact, setContact, contacts, setContacts } = props;


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [id, setId] = useState('');


  const navigate = useNavigate()  

  
  function handleSubmit(event) {
    event.preventDefault()

    const newContact = {
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
      id: id
    };

    const isNotAdded = !contacts.some(existingContact =>
      existingContact.id === id)


    if (isNotAdded) {
      setContacts([...contacts, newContact])
      console.log(contacts)
    } else {
      console.log("This person is already added.")
    }
  
    navigate("/")
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={e => setFirstName(e.target.value)}
        value={firstName}
      />
      <label htmlFor="lastName">Last name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={e => setLastName(e.target.value)}
        value={lastName}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        onChange={e => setCity(e.target.value)}
        value={city}
      />
      <label htmlFor="street">street</label>
      <input
        type="text"
        id="street"
        name="street"
        onChange={e => setStreet(e.target.value)}
        value={street}
      />
      <label htmlFor="id">id</label>
      <input
        type="text"
        id="id"
        name="id"
        onChange={e => setId(e.target.value)}
        value={id}
      />
      <button type="submit">Add contact</button>
    </form>
  )
}

export default AddContact
