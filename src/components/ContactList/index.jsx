import "./styles.css"
import ContactListItem from './components/ContactListItem'



function ContactList({contacts}) {

  return (
    <div className='contact-list-container'>
    <ul className='contact-list'>
        {contacts.map((contact) =>
        <ContactListItem key= {contact.id} contact={contact}></ContactListItem>
        )}
    </ul>
    </div>
  )
}



export default ContactList
