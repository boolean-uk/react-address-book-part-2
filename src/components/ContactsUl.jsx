import ContactLi from "./ContactLi"

export default function ContactsUl({ contacts }) {
    return (
        <ul>
            {contacts.map((contact, index) => (
                <ContactLi key={index} contact={contact}/>
            ))}
        </ul>
    )
}