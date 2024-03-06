import { Link } from 'react-router-dom';


function ContactListItem ({ person }){

    return(
        <li className="contact">
            <div>
                <h3>{person.firstName} {person.lastName}</h3>
            </div>
            <div>
                <Link to={`/view/${person.id}`}>
                    <button>View</button>
                </Link>
            </div>
        </li>
    )
}

export default ContactListItem