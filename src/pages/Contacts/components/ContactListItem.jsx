import { Link } from "react-router-dom";

function ContactListItem({ person }) {
  return (
    <li>
      <h3>
        <Link to={`/contacts/${person.id}`} >
        {person.firstName} {person.lastName}
        </Link>
      </h3>
    </li>
  );
}

export default ContactListItem;
