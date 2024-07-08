import { Link } from "react-router-dom";

export default function ContactListItem({contact}) {
    return (
      <li>
          <p>
            {contact.firstName} {contact.lastName}
          </p>
          <Link to={`/view/${contact.id}`}>View</Link>       
      </li>
    );
}