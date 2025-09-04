import ContactListItem from "./ContactListItem";

function ContactList( { contacts } ) { 
    return (
        <div>
            <h1>Contacts</h1>
            <ul>
                { contacts.map((contact, index) => {
                    return (
                        <li key={index}>
                            <ContactListItem contact={contact} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ContactList;