import { Link } from "react-router-dom";
import "../App.css";

function ContactItem({ contact }) {
  return (
    <li className="contact-item">
      <span className="contact-name">{contact.name}</span>
      <div className="contact-actions">
        <p className="contact-view">
          <Link to={`/contact/${contact.id}`}>View</Link>
        </p>
        <p className="contact-view">
          <Link to={`/edit/${contact.id}`}>Edit</Link>
        </p>
      </div>
    </li>
  );
}

export default ContactItem;
