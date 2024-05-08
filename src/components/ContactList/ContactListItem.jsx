import { Link } from "react-router-dom";
import userLogo from '../../../_assets/Icons/user.svg'

export default function ContactListItem({contact}) {

    return (
        <li key={contact.id} className="contact-list-item">
            <p>{contact.firstName} {contact.lastName}</p>
            <Link to={`/view/${contact.id}`}><img src={userLogo} className="icon" id="user"/></Link>
        </li>
    )
}