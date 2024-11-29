import { Link } from "react-router-dom";

function ContactListItem(props) {
  const { contact } = props;

  return (
    <li className="contact-list-item">
      <h3>
        {contact.firstName} {contact.lastName}
      </h3>
      <p>
        <Link to={`/view/${contact.id}`}>View Contact</Link>
      </p>
    </li>
  );
}

export default ContactListItem;
