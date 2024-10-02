import { useContext } from "react"
import { AppContext } from "../App"
import '../App.css'
import { Link } from "react-router-dom"

function ContactsList() {
    const { contacts } = useContext(AppContext)
    return (
        <>
        <div className="ContactList">
            <h1>Contacts</h1>
            {contacts.map((contact) => 
                <div key={contact.id} className="Person">
                    <h3>{contact.firstName} {contact.lastName}</h3>
                    <div className="Links">
                        <Link className="UpdateLink" to={{ pathname: `/update/${contact.id}}`, state: { person: contact }}}>Update</Link>
                        <Link className="ViewLink" to={{ pathname: `/view/${contact.id}}`, state: { person: contact }}}>View</Link>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default ContactsList