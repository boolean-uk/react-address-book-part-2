import { Link } from "react-router-dom"

function ContactListItem(props) {
    const { person } = props
    return(
        <li>
            <h3>
                {person.firstName} <Link to={`/view/${person.id}`}>View info</Link>
            </h3>
        </li>
    )
}

export default ContactListItem