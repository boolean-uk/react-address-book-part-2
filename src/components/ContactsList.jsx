import { useContext } from "react"
import { ContactContext } from "../App"
import { ContactsListItem } from "./ContactsListItem";

export function ContactsList(){
    const {contacts} = useContext(ContactContext);
    
    return(
        <ul className="contacts-list">
            {contacts.map(( contact ) => (
                <ContactsListItem  key={contact.id} contact={contact} />
            ))}
        </ul>
    )
    
}