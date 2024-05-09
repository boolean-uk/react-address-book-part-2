import { Link } from "react-router-dom"

export default function ContactList ({contacts}) {

    // console.log(contacts)
    return (
        <div>
            <h2>Contacts</h2>
            {contacts.map((contact) => {
                const id = contact.id
                return (
                    <div key={contact.id}>
                        <h3>{contact.firstName + " " + contact.lastName}</h3>
                        <p><Link to={`/contacts/${id}`}>View</Link></p>                  
                    </div>
                )
            })}
        </div>
    )
}