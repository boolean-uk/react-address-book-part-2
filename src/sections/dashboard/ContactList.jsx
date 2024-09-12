import ContactListItem from "./ContactListItem";

function ContactList({ contacts, search }) {

    return (
        <div className="contactList">
            {contacts.filter((contact) => {
                return search.toLowerCase() === ""
                ? contact
                : contact.firstName.toLowerCase().includes(search)
                || contact.lastName.toLowerCase().includes(search)
            }).map((contact, index) => (
                <ContactListItem key={index} contact={contact} />
            ))}
        </div>
    )
}

export default ContactList
