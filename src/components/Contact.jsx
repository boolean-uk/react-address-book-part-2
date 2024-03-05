import { useState } from "react";
import { useParams } from 'react-router-dom';
import PropTypes from "prop-types";

function Contact(props) {
  const { contacts } = props
  const { id } = useParams()
  const [person, setPerson] = useState(contacts.find((p) => p.id == id))

  if (!person) return <p>Person not found...</p>

  console.log(person.longitude, person.altitude) // Mahmoud helped me find a way to get the API-back ❤️
  return (
    <div className='contact-container'>
      <h1>{person.firstName} {person.lastName}</h1>
      <div className="contact-info">
        <h3><b>Street Address:</b>{person.street}</h3>
        <h3><b>City:</b>{person.city}</h3>
        <h3><b>Email:</b>{person.email}</h3>
        <h3><b>Job title:</b>{person.jobTitle}</h3>
        <h3><b>Gender:</b>{person.gender}</h3>
        <h3><b>Favourite color:</b>{person.favouriteColour}</h3>
        <iframe loading="async" width="50" height="350"
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