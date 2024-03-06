import {useState} from 'react'
import PropTypes from "prop-types"

function ContactForm({setContacts}) {
  const [newContactData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
  }) 

  const handleChange = (e) => {
    const { name, value } = e.target 
    setFormData({...newContactData,[name]: value,})
  }

  const handleSubmit = (e) => {
    e.preventDefault() 
    
    setContacts(prevContacts => [...prevContacts, newContactData]);
    setFormData({
      firstName: '',
      lastName: '',
      street: '',
      city: '',
    })
  } 

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>
        <p className='form-text'>First Name:</p>
        <input
          type="text"
          name="firstName"
          value={newContactData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <p className='form-text'>Last Name:</p>
        <input
          type="text"
          name="lastName"
          value={newContactData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
        <p className='form-text'>Street:</p>
      <label>
        <input
          type="text"
          name="street"
          value={newContactData.street}
          onChange={handleChange}
        />
      </label>
      <br />
      <p className='form-text'>City:</p>
      <label>
        <input
          type="text"
          name="city"
          value={newContactData.city}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className='form-button' type="submit">Submit</button>
    </form>
  ) 
}

ContactForm.propTypes = { 
	setContacts: PropTypes.func.isRequired,
}

export default ContactForm