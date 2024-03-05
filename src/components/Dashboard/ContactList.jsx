import Contact from './Contact'

function ContactList(props) {
    const { contacts } = props

    return (
        <ul>
            {contacts.map((contact, index) => (
                <Contact key={index} contact={contact} />
            ))}
        </ul>
    )
}

export default ContactList