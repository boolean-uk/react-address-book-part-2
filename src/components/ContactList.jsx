import Contact from "./Contact"
import { ContactContext } from "../App"
import { useContext } from "react"

function ContactList(){
    const contactContext = useContext(ContactContext)

    return (
        <>

            <div className="contact-list-container">
                <h1>Contacts</h1>
                <ul className="contact-list">
                    {contactContext.contacts.length === 0 ? (
                        <li>Loading...</li>
                    ) : (
                        contactContext.contacts.map((contact) => (
                            <Contact key={contact.id} contact={contact} /> 
                        ))
                    )}
                </ul>
            </div>

        </>
    )

}

export default ContactList