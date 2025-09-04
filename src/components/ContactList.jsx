import { Link } from "react-router-dom";
import "../App.css";


function ContactList({ contacts }) {
  if (!Array.isArray(contacts)) {
    return <ul className="contact-list"><li>No contacts found.</li></ul>;
  }
  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <li className="contact-list-item" key={contact.id}>
        {contact.firstName} {contact.lastName}
        <Link to={`/contacts/${contact.id}`} className="view-details-link">View Contact</Link>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;