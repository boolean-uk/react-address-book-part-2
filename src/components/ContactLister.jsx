import ContactElement from "./ContactElement"

export default function ContactLister({ contacts }) {
    return (
        <div>
            <h1>Contacts</h1>
            <ul>
            {contacts.map((elm, i) => (
                <ContactElement key={i} info={elm} index={i} />
            ))}
            </ul>
        </div>
    )
}
