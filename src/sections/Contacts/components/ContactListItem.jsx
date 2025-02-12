import { Link } from "react-router-dom";

function ContactListItem(props) {
  const { contact } = props;
  return (
    <li>
      <h3>
        <Link to={`/contacts/view/${contact.id}`}>
          {contact.firstName} {contact.lastName}
        </Link>
      </h3>
    </li>
  );
}

export default ContactListItem;
