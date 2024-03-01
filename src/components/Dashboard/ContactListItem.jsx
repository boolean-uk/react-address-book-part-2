import { Link } from "react-router-dom";

function ContactListItem(props) {
  const { contact } = props;

  return (
    <li className="list-item">
      <p className="first-last-name">
        {contact.firstName} {contact.lastName}
      </p>
      <Link className="view-button" to={`/contact/${contact.id}`}>
        View
      </Link>
    </li>
  );
}

export default ContactListItem;
