import { Link } from "react-router-dom"

function ContactList({ contactData }) {


    return (
        <div>
            <h2>Contacts</h2>
            <ul className="contact-list">
                {contactData.map((person) => 
                <li key={person.id} className="contact-list-people">
                    <h3>{person.firstName} {person.lastName}</h3>
                    <p><Link to={`/contact-list/contact-details/${person.id}`}>View</Link></p>
                </li> 
                )}
            </ul>
        </div>
    )
}

export default ContactList