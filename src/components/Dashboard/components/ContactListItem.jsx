import { Link } from 'react-router-dom';


function ContactListItem ({ person }){
    return(
        <li className="contact">
            <h3>{person.firstName} {person.lastName}</h3>
            <Link to={`/view/${person.id}`}><button>View</button></Link>
        </li>
    )
}

export default ContactListItem