
import ContactListItem from "./components/ContactListItem"

function ContactList({contacts}){
    
    return(
        <ul>
            <h2>Contact List</h2>
            {contacts.map((person, index) =>
            <ContactListItem key={index} person={person}/>)}
        </ul>
        
    )
}

export default ContactList