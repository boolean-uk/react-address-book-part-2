import { Link } from "react-router-dom";

const ContactListItem = ({ contact }) => {
  return (
    <li>
      <Link to={`/contact-page/${contact.id}`}>
        <div></div>
        <span>
          {contact.firstName} {contact.lastName}
        </span>
      </Link>
    </li>
  );
};

export default ContactListItem;
