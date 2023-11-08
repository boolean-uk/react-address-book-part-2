import { Link } from "react-router-dom";

const ContactListItem = ({ contact }) => {
  return (
    <li className="contact">
      <p>{`${contact.firstName} ${contact.lastName}`}</p>
      <Link to={`/contacts/${contact.id}`}>View</Link>
    </li>
  );
};

export default ContactListItem;
