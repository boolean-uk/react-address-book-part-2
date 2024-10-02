import { Link } from "react-router-dom"

function ContactListItem(props){
    const{person} = props

    return(<li>
        <h4>
            {person.firstName} {person.lastName} <Link to={`/view/${person.id}`}>View</Link>
        </h4>
    </li>)
}

export default ContactListItem