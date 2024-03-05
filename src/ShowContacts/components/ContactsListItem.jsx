import { Link } from "react-router-dom";

function ContactsListItem(props) {
  const { contact } = props;

  return (
    <li>
      <h4>
        {contact.firstName} {contact.lastName}
      </h4>
      <p>
        <Link to={`/view/${contact.id}`}>View</Link>
      </p>
    </li>
  );
}

export default ContactsListItem;
