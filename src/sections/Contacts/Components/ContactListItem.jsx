import { Link } from "react-router-dom";

function ContactListItem({ contact }) {
  return (
    <li>
      <p>
        {contact.firstName} {contact.lastName}{" "}
        <span><Link to={`/contact/view/${contact.id}`}>View</Link></span>
      </p>
    </li>
  );
}

export default ContactListItem;
