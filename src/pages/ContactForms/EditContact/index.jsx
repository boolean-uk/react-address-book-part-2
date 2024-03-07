import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ContactForm from '../components/ContactForm'

function EditContact (props) {
    const { contacts } = props
    const [contact, setContact] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const foundContact = contacts.find(c => c.id.toString() === id)
        setContact(foundContact)
    }, [contacts, id])

    console.log(contact)

    return (
        <>
            <h1>Edit contact</h1>
            <ContactForm contact={contact} mode="edit" />
        </>
    )
}

export default EditContact


EditContact.propTypes = {
    contacts: PropTypes.array.isRequired,
    setContacts: PropTypes.func.isRequired,
    updateContact: PropTypes.func.isRequired
}