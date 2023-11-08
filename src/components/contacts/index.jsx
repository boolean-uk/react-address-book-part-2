import { Link } from "react-router-dom"

function ContactList({ contactData, URL, setShouldGetData }) {

    function handleDelete(person) {
        const options = {
            method: 'DELETE'
        }
        fetch(`${URL}/${person.id}`, options)
        .then(res => res.json())
        .then(() => setShouldGetData(true))
    }

    return (
        <div>
            <h2>Contacts</h2>
            <ul className="contact-list">
                {contactData.map((person) => 
                <li key={person.id} className="contact-list-people">
                    <h3>{person.firstName} {person.lastName}</h3>
                    <p><Link to={`/contact-list/contact-details/${person.id}`}>View</Link></p>
                    <button onClick={() => handleDelete(person)}>Delete Contact</button>
                </li> 
                )}
            </ul>
        </div>
    )
}

export default ContactList