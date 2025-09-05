import { Link } from "react-router-dom";

export default function ContactListItem({contact}) {
    return (
        <li>
            <p>{contact.firstName + " " + contact.lastName}</p>
            <Link to={"/contacts/" + contact.id}>
                <button>View</button>
            </Link>
        </li>
    )
}