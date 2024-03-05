import ContactListItem from "./ContactListItem"

function ContactList({contacts}) {

    return (
        <ul className="contact-list">
            {
                contacts.map((contact) => (
                    <ContactListItem key={contact.id} contact={contact}/>
                ))
            }
        </ul>
    )
}

export default ContactList