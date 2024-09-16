import PropTypes from "prop-types"
import React from 'react'
import { useParams } from 'react-router-dom'


function Contact({contacts}) {
  let { id } = useParams()
  const info = contacts[id]

  return (
    <div className="body-content">
      <h1>Contact Info</h1>
      <section className='contact-info-section'>
        <div className='contact-info-section-text-bold'>Name: </div>
        <div>{info.firstName + " " + info.lastName}</div>
        <div className='contact-info-section-text-bold'> Street: </div>
        <div>{info.street}</div>
        <div className='contact-info-section-text-bold'>City: </div>
        <div>{info.city}</div>
      </section>
    </div>
  )
}

Contact.propTypes = { 
	contacts: PropTypes.array.isRequired,
}

export default Contact