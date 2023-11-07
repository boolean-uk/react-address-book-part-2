import { Link } from "react-router-dom"

function Contact({ contactData }) {


    return (
        <div>
            <ul className="contact-list">
                {contactData.map((person) => 
                <li key={person.id} className="contact-list-people">
                    <h2>{person.firstName} {person.lastName}</h2>
                    <p><Link to={`/contact-list/contact-details/${person.id}`}>View</Link></p>
                </li> 
                )}
            </ul>
        </div>
    )
}

export default Contact