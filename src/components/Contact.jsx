import { useState } from "react";
import { useParams } from 'react-router-dom';
import PropTypes from "prop-types";

function Contact(props) {
  const { contacts } = props
  const { id } = useParams()
  const [person, setPerson] = useState(contacts.find((p) => p.id == id))

  if (!person) return <p>Person not found...</p>

  return (
    <div className='contact-container'>
      <h1>{person.firstName} {person.lastName}</h1>
      <div className="contact-info">
        <h3><b>Street Address:</b> {person.street}</h3>
        <h3><b>Country:</b> {person.city}</h3>
        <iframe 
            loading="async"
            width="50%"
            height="450"
            src={`https://maps.google.com/maps?q=${person.latitude}+${person.longitude}&output=embed&z=5`}>
        </iframe>
      </div>
    </div>
    
  )
}

Contact.propTypes = {
    contacts: PropTypes.array.isRequired
}

export default Contact;