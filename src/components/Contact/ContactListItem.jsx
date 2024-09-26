import { Link } from 'react-router-dom';

function ContactListItem( properties ){
    const { person } = properties

    return(
        <li>
            <h4>
                {person.firstName} {person.lastName}
            </h4>
            <Link to={`/contact/${person.id}`}>
                View
            </Link>
        </li>
    )
}
export default ContactListItem