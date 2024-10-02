import { Link } from "react-router-dom";

const ContactListItem = ({ contact }) => {
  return (
    <div className="contact-list__item">
      <p>{`${contact.firstName} ${contact.lastName}`}</p>

      <Link to={`/contact/${contact.id}`}>
        <button className="view-button">View</button>
      </Link>
    </div>
  );
};

export default ContactListItem;
