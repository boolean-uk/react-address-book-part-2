import ContactListItem from "./ContactListItem";


export default function ContactList({allContacts}) {
   
    return (
        <section className="contacts-list-container">
            <h1>Contacts</h1>
            <ul className="contacts-list">
            {allContacts.map(contact => <ContactListItem contact={contact} key={contact.id}/>)}
            </ul>
        </section>
        
    )
}