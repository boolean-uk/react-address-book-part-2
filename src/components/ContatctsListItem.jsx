/* eslint-disable no-unused-vars */
import { Link} from 'react-router-dom'
                  
export default function ContactListItem({contact}) {
    return (
        <>
            <li>
                <Link to={`/contacts/${contact.id}`}>
                    <p>{contact.firstName} {contact.lastName}</p>
                </Link>
            </li>
        </>
    )
}