import { Link } from "react-router-dom";

function ContactListItem({ contact }) {
    const buttonStyle = {
      backgroundColor: contact.favouriteColour || "#cce",
    };

    return (
      <li className="contact-li">
        <Link style={buttonStyle} className="contact-link-button" to={`/contact/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>
      </li>
    );
}

export default ContactListItem