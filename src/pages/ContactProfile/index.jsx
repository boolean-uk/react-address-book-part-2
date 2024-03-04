import { useParams } from 'react-router-dom'

function ContactProfile(props) {
    const { contacts, deleteContact, navigateToDashboard } = props
    const { id } = useParams()
    const contact = contacts.find(contact => contact.id === parseInt(id))
    console.log(contact)

    function onDelete(){
        deleteContact(id)
        navigateToDashboard()
    }

    if (contact) return (
        <article>
            <h3>Profile</h3>
            <p>
                Name: {contact.firstName} {contact.lastName}
            </p>
            <p>
                Street: {contact.street}
            </p>
            <p>
                City: {contact.city}
            </p>
            <button onClick={onDelete}>
                Delete Contact
            </button>
        </article>
    )

    return (
        <article>
            <h2>
                Something went wrong
            </h2>
        </article>
    )
}

export default ContactProfile