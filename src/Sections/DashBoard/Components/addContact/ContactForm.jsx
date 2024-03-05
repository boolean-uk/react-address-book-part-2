import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'


ContactForm.propTypes = {
    contacts: PropTypes.array,
    setContact: PropTypes.func
  }

export default function ContactForm(props) {
  const { contacts, setContact} = props
  const contactToAdd = {}
  const navigate = useNavigate()
  

  function handleSubmit(event) {
    event.preventDefault()
    if(contacts.find(p => p.firstName === contactToAdd.firstName && p.lastName === contactToAdd.lastName))
    {
      navigate('/')   // Switch to dashboard
      alert("Already Exist!")
    }
    else if (Object.entries(contactToAdd).length !== 4) {
      alert("Incomplete")
      console.log(contactToAdd);
      navigate('/addNewContact'); // Navigate to addNewContact route
    }
    else{
      alert("Contact added!")
      //console.log(contactToAdd);
      setContact([...contacts, contactToAdd])
      navigate('/')   // Switch to dashboard
    }
  }

  function handleInputChange(event) {
    const {name, value} = event.target;
    contactToAdd[name] = value;
  }

  return (
   <form className="add-contact-form" onSubmit={handleSubmit}>
      <header> Add new contact informations</header>
      <label htmlFor="add-contact firstname"> First Name:
        <input type="text" name="firstName" onChange={handleInputChange} />
      </label>
      
      <label htmlFor="add-contact firstname"> Last Name:
        <input type="text" name="lastName" onChange={handleInputChange}/>
      </label>

      <label htmlFor="add-contact firstname"> Street:
        <input type="text" name="street" onChange={handleInputChange}/>
      </label>

      <label htmlFor="add-contact firstname"> City:
        <input type="text" name="city" onChange={handleInputChange}/>
      </label>
      
      <input className="add-contact submit" type="submit" value="Submit Survey!" />

   </form>
  )
}
