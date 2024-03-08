import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

export default function ContactListItem({ contacts }) {
    const { contactId } = useParams();
    const { firstName, lastName, street, city } = contacts[contactId];
  
    return (
      <div className="contact-container">
        <p className="contact-name">
          {firstName} {lastName}
        </p>
        <p className="contact-address">
          Address: {street}, {city}
        </p>
        <Link to={"/contacts"} className="contact-button">
          Back to list
        </Link>
      </div>
    );
  }