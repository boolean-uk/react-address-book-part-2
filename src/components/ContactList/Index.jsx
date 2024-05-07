import ContactListItem from "./ContactListItem";

export default function ContactList({allContacts}) {
    return (
        <ul>
            {allContacts.map(contact => <ContactListItem contact={contact} key={contact.id}/>)}
        </ul>
    )
}