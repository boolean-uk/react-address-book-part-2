import { useContext } from "react"
import { ContactContext} from "../App"
import Contact from "./Contact"


const ContactList = () => {
    const contactContext = useContext(ContactContext)

    if (!contactContext.contacts.length) {
        return <p>Loading contacts...</p>;
    }

    return (
        <>
            <ul className="col">
                <h1 className="m-2">Contacts list</h1>
                {contactContext.contacts.map((contact, index) => <li key={index}><Contact contact={contact}/></li>  )}
            </ul>
        </>
    )
}

export default ContactList
