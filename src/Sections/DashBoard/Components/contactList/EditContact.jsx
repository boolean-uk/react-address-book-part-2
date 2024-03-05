import PropTypes from 'prop-types'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

EditContact.propTypes = {
    contacts: PropTypes.array,
    setContact: PropTypes.func
  }

export default function EditContact(props) {
    const { contacts, setContact} = props
    const navigate = useNavigate()
    const location = useLocation()
    const { contact } = location.state

    const [contactToAdd, setContactToAdd] = useState({
        firstName: contact.firstName,
        lastName: contact.lastName,
        street: contact.street,
        city: contact.city
    });
    
  
    function handleSubmit(event) {
      event.preventDefault()
      if (Object.values(contactToAdd).some(value => value === "")) {
          alert("Incomplete")
          navigate(`/edit/${contact.id}`); 
        }

    else {
        const updateContacts = contacts.map(p => {
            if (p.id === contact.id) {
                return {...p, ...contactToAdd}      // This returns a new object that merges the properties of p and contactAdd
            }                                       // { ...item } = clone, { ...contactToAdd } = spread properties
            else {return p}
        })
        setContact(updateContacts)
    }
    navigate('/')   // Switch to dashboard
    alert("Updated")
    }

    
  
    function handleInputChange(event) {
      const {name, value} = event.target;
      // This is the contactToAdd: with prevState, and attribute = the new value
      setContactToAdd(prevState => ({
        ...prevState,
        [name]: value
    }));
    }
  
    return (
     <form className="add-contact-form" onSubmit={handleSubmit}>
        <header> Edit informations</header>
        <label htmlFor="firstName">First Name:
            <input type="text" name="firstName" value={contactToAdd.firstName} onChange={handleInputChange} />
        </label>

        <label htmlFor="lastName">Last Name:
            <input type="text" name="lastName" value={contactToAdd.lastName} onChange={handleInputChange} />
        </label>

        <label htmlFor="street">Street:
            <input type="text" name="street" value={contactToAdd.street} onChange={handleInputChange} />
        </label>

        <label htmlFor="city">City:
            <input type="text" name="city" value={contactToAdd.city} onChange={handleInputChange} />
        </label>

        <input className="add-contact submit" type="submit" value="Update" />
  
     </form>
    )
} 