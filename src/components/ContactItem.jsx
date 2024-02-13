import { Link } from "react-router-dom"

export default function ContactItem({ contact }) {
    return (
        <>
        <li>
            <div className="contact">
                <div className="name">
                    <p>{contact.firstName} {contact.lastName}</p>
                </div>
            </div>
            <Link to={`/contacts/${contact.id}`}>View</Link>
            <hr></hr>
        </li>
        </>
    )
}