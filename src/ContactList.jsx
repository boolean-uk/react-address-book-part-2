import PropTypes from "prop-types"
import ContactListItem from "./ContactListItem"

function ContactList({contacts}){
    return(
        <ul>        
        {contacts.map((contact, index) => {
            return (
                <li key={index}>
                <ContactListItem contact={contact}/>
            </li>
            )
        })}
        </ul>

    )
}

ContactList.propTypes = {
    contacts: PropTypes.array
}
export default ContactList