import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function ContactDetails({contacts}) {
    const [contact, setContact] = useState(null)
    const{id} = useParams()

    console.log(contacts)

    useEffect(() => {
        if(contacts && id){
            setContact(contacts.find((contact) => Number(contact.id) === Number(id)))
        }
    }, [contacts, id])



    if(!contact) return <p>Loading...</p>

  return (
    <div>
        <img src={contact.profileImage} alt="" />
        <h2>{contact.firstName} {contact.lastName}</h2>
        <h3>City: {contact.city}</h3> <h3>Street: {contact.street}</h3>
        <p>email: {contact.email}</p>
        <Link to = "/contacts/:id/update"> update </Link>
    </div>
  )
}

ContactDetails.propTypes = {
    contact: PropTypes.object
}

export default ContactDetails
