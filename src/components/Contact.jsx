import PropTypes from "prop-types";
import { useState } from "react";
import { useParams } from 'react-router-dom'

function Contact(props) {
  const { contacts } = props
  const { id } = useParams()
  const [person, setPerson] = useState(contacts.find((p) => p.id == id))

  if (!person) return <p>Person not found...</p>

  return (
    <div>
      <h1>{person.firstName} {person.lastName}</h1>
      <div className="contact-info">
        <img src={person.profileImage} alt={"Profile picture for " + person.firstName + " " + person.lastName}/>
        <h3><b>Street Address:</b> {person.street}</h3>
        <h3><b>Country:</b> {person.city}</h3>
        <h3><b>Gender:</b> {person.gender}</h3>
        <h3><b>Email:</b> {person.email}</h3>
        <h3><b>Job Title:</b> {person.jobTitle}</h3>
        <h3><b>Latitude:</b> {person.latitude}</h3>
        <h3><b>Longitude:</b> {person.longitude}</h3>
        <h3><b>Favourite Colour</b> {person.favouriteColour}</h3>
        <iframe 
            loading="async"
            width="50%"
            height="250"
            src={`https://maps.google.com/maps?q=${person.latitude}` + `+${person.longitude}&output=embed&z=5`}>
        </iframe>
      </div>
    </div>
  )
}

Contact.propTypes = {
    contacts: PropTypes.array.isRequired
}

export default Contact
