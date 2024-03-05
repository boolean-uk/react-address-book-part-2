
import ContactListItem from './components/ContactListItem'



function ContactList({contacts}) {

  return (
    <ul>
        {contacts.map((contact) =>
        <ContactListItem key= {contact.id} contact={contact}></ContactListItem>
        )}
    </ul>
  )
}



export default ContactList
