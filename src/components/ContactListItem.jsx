import { Link } from "react-router-dom"

function ContactListItem(props) {
    const { person } = props
    return (
        <li className="person-row">
            <h3 >
                {person.firstName} {person.lastName} 
                <Link className="link-styles" to={`view/${person.id}`}>
                    View
                </Link>
            </h3>
        </li>
    )
}

export default ContactListItem