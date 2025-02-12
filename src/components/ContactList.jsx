import { useContext } from "react"
import { ContactContext } from "../App"
import ContactListItem from "./ContactListItem"

function ContactList()
{
    const {contactList} = useContext(ContactContext)
    console.log(contactList)
    return(
        <>
        <h1>Contacts</h1>
        <ul>
            {contactList.map((person, index) => (
                <ContactListItem key={index} person={person}/>
            ))}
        </ul>
        </>
        
    )
}

export default ContactList