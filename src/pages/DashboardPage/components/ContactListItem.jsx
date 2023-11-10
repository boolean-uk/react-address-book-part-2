import { Link } from "react-router-dom";

const ContactListItem = ({ contact }) => {
  return (
    <li>
      <Link to={`/contact-page/${contact.id}`} className="contact__list__item">
        <div className="contact__list__item__icon">
        </div>
        <span>
          {contact.firstName} {contact.lastName}
        </span>
      </Link>
    </li>
  );
};

export default ContactListItem;
