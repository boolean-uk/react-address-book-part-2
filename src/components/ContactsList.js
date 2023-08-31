import { Link } from "react-router-dom"
import { useContext } from "react"
import DataContext from "../DataContext"
function ContactsList(props) {

    const { contacts } = useContext(DataContext)

    return(
        <div className="contact-list">
            <h1>Contact List</h1>
            <ul>
                {contacts.map((contact) =>{
                    return(
                        <li key={contact.id}>
                            <Link to={`/contacts/${contact.id}`} >
                                {contact.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default ContactsList