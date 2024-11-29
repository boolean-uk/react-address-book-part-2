import { useState } from "react"
import ContactListItem from "./ContactListItem"

export default function ContactList(props){
    const[search, setSearch] = useState("")
    const {contacts} = props

    
    let contactList = [...contacts]
    if (search !== ""){
        const searchFormatted = search.toLowerCase()
        contactList = contacts.filter(c => c.firstName.toLowerCase().includes(searchFormatted) || c.lastName.toLowerCase().includes(searchFormatted))
    }
    
    return(
        <div>
            <h1>Contacts</h1>
            <input 
            placeholder="search"
            type="text" 
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            />
            <ul>
                {contactList.map((con,index) => <ContactListItem key={index} contact={con}/>)}
            </ul>
        </div>
    )
}

//{contacts.map((c, index) => (<ContactListItem key={index} contact={c}/>))}