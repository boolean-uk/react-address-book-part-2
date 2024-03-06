import ContactListItem from "./ContactListItem"


function ContactList({ contacts }) {
    return (
        <div>
            {contacts.map(contact => (
                <ContactListItem key={contact.id} contact={contact} />
            ))}
        </div>
    )
}

export default ContactList