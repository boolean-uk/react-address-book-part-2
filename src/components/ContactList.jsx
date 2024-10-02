import { useContext } from 'react'
import ContactListItem from './ContactListItem'
import { AddressBookContext } from '../App';


function ContactList() {
    const { contacts } = useContext(AddressBookContext);

    return(
        <ul>
      {contacts.map((person, index) => (
        <ContactListItem key={index} person={person} />
      ))}
    </ul>

    )
}

export default ContactList