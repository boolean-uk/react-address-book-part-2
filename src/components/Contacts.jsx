import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Contacts() {

    const [allContacts, setAllContacts] = useState([])


    useEffect(() => {
        fetch("https://boolean-api-server.fly.dev/LAVINIABENZAR/contact")
            .then(data => data.json())
            .then(data => setAllContacts(data))
    }, [])

    return (

        <div className="contacts-section">
            <h1>All Contacts</h1>

            <ul className="contact-list">
                {allContacts.map((contact) => (
                    <li key={`${contact.id}` + `${contact.firstName}`}
                        className="contact-list-item" >
                        <Link to={`/contact/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Contacts;
