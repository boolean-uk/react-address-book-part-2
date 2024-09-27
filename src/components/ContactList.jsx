import ContactListItem from './ContactListItem'

function ContactList(props) {
    const { contacts } = props

    return(
        <ul>
      {contacts.map((person, index) => (
        <ContactListItem key={index} person={person} />
      ))}
    </ul>

    )
}

export default ContactList