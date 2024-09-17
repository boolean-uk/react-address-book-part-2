import PropTypes from "prop-types"
import ContactListItem from "./ContactListItem"
import Searchbar from "./Searchbar"
import { useState } from "react"

function ContactList({contacts}){

    const [filter, setFilter] = useState('')
    let filteredList = contacts.filter((contact) => {
        if (filter === '') return true
        if (contact.firstName.includes(filter)) return true
        return contact.lastName.includes(filter)
    }) 
    




    return(
        <div>
            <Searchbar setFilter={setFilter}/>
        <ul>        
        {filteredList.map((contact, index) => {
            return (
                <li key={index}>
                <ContactListItem contact={contact}/>
            </li>
            )
        })}
        </ul>
        </div>

    )
}

ContactList.propTypes = {
    contacts: PropTypes.array
}
export default ContactList