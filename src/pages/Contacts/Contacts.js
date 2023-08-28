import { Routes, Route } from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactInfo from "./components/ContactInfo";

function Contacts(props) {
    const { contacts, setContacts } = props

    return (
        <main className="main">
            <h2>Contacts</h2>
            <ContactList contacts={contacts} setContacts={setContacts}/>
        </main>
    )
}
export default Contacts