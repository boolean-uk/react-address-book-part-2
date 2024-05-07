import ContactLi from "./ContactLi"

export default function ContactsUl({ contacts }) {
    return (
        <div>
            <h2>Contacts</h2>
            <ul className="contacts-ul">
                {contacts.map((contact, index) => (
                    <ContactLi key={index} contact={contact}/>
                ))}
            </ul>
        </div>
    )
}