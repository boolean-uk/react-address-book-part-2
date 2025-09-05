import { useContext, useState } from "react";
import ContactListItem from "./ContactListItem";
import { ContactContext } from "../../App";

export default function ContactList(){
    const {contacts} = useContext(ContactContext)
    const [search, setSearch] = useState("")

    let filteredContacts = contacts
    
    if (search !== "") 
        filteredContacts = filteredContacts.filter(e => e.firstName.toLowerCase().includes(search) || e.lastName.toLowerCase().includes(search))

    
    return (
        <>
            <div>
            <input placeholder="Search contact" onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <ul>
                {filteredContacts.map((contact, i) => (<ContactListItem key={i} contact={contact}/>))}
            </ul>
        </>
    )
}