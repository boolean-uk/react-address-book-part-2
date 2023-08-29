import ContactItem from './ContactItem'

function ContactList ({contacts}) {
    return (
        <ul>
            {contacts.map((contact,index) => (
                <ContactItem key={index} contact={contact} />
            ))}
        </ul>
    )
}

export default ContactList