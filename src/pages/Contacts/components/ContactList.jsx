import ContactListItem from "./ContactListItem"

function ContactList({ contacts = [] }) {
    return (
        <ul className="contact-list">
            {contacts.map((person) => (
                <ContactListItem key={person.id} person={person} />
            ))}
        </ul>
    );
}

export default ContactList;