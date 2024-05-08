import { useState } from "react"
import ContactLi from "./ContactLi"

export default function ContactsUl({ contacts }) {
    const [search, setSearch] = useState('')

    function handleChange(e) {
        setSearch(e.target.value)
    }

    const filteredContacts = contacts.filter((contact) => 
        contact.firstName.toLowerCase().includes(search.toLocaleLowerCase()) || 
        contact.lastName.toLowerCase().includes(search.toLocaleLowerCase()))

    return (
        <div>
            <h2>Contacts</h2>
            <input type="search" placeholder="Search" onChange={handleChange} value={search}/>
            <ul className="contacts-ul">
                {filteredContacts.map((contact, index) => (
                    <ContactLi key={index} contact={contact}/>
                ))}
            </ul>
        </div>
    )
}