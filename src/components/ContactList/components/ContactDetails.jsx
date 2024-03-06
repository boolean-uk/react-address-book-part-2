import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ContactForm from '../../ContactForm'

function ContactDetails({contacts}) {
    const [contact, setContact] = useState(null)
    const [view, setView] = useState("details")
    const{id} = useParams()
    useEffect(() => {
        if(contacts && id){
            setContact(contacts.find((contact) => Number(contact.id) === Number(id)))
        }
    }, [contacts, id])

    if(!contact) return <p>Loading...</p>

  return (
    <div>
        {view === 'updateForm' ?
        <ContactForm contact={contact}></ContactForm>
        :
        <div>
        <img src={contact.profileImage} alt="" />
        <h2>{contact.firstName} {contact.lastName}</h2>
        <h3>City: {contact.city}</h3> <h3>Street: {contact.street}</h3>
        <p>email: {contact.email}</p>
        <button onClick={() => setView("updateForm")}>update</button>
        </div>
        }
    </div>
  )
}

ContactDetails.propTypes = {
    contact: PropTypes.object
}

export default ContactDetails
