import { useContext } from "react"
import { ContactContext } from "../../App"
import { Link } from "react-router-dom";


function ContactList () {

    const context = useContext(ContactContext)
    console.log('contactlist')
    console.log(context.contacts)


    return(
        <ul>
            <div className="view-contacts">
            
            {context.contacts.map((contact, index) => (
                <li key={index}>
                    <img src={contact.profileImage} />
                    <p>{contact.firstName} {contact.lastName} </p>
                    <Link to={`/contacts/view/${contact.id}`}>View</Link>
                    <Link to={`/contacts/remove/${contact.id}`}>Remove</Link>
                    <Link to={`/contacts/update/${contact.id}`}>Update</Link>
                </li>
            ))}
            </div>
            
        </ul>
    )
}

export default ContactList