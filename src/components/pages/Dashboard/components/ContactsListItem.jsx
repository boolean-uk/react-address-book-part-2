
import { Link } from "react-router-dom"
export default function ContactsListItem( {contact }){
    

    return (
        <li>
            <h4>
                {contact.firstName} {contact.lastName}
                
            </h4>
            <h4>
            <Link to={`/view/${contact.id}`}>View</Link>
            </h4>
            <p>------------------------------------------</p>
        </li>
    )
}