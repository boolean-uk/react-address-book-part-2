import { Link } from "react-router-dom";

function ContactItem({ contact }) {
  return (
    <li>
      <Link to={`/contact/${contact.id}`}>
        {contact.firstName} {contact.lastName}
      </Link>
    </li>
  );
}

export default ContactItem;
