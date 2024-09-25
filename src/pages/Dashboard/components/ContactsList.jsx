import ContactsListItem from './ContactsListItem.jsx'

function ContactsList(props) {
    const { contacts } = props

    return (
        <ul>
            {contacts.map((contact, index) => (
                <ContactsListItem key={index} contact={contact}/>
            ))}
        </ul>
    )
}

export default ContactsList
