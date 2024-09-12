import ContactsListItem from './ContactsListItem'

function ContactsList(props) {
  console.log("Inside ContactsList: ", { props });

  const { contacts } = props

  
  return (
    <ul>
      {contacts.map((contact, index) => (
        <ContactsListItem key={index} contact={contact} />
      ))}
    </ul>
  )
}

export default ContactsList
