import { Link } from "react-router-dom";
import ContactsListItem from "./ContactsListItem";
import "../ContactsList.css";

export default function ContactsList(props) {
  const { contacts } = props;

  return (
    <ul className="contacts-list">
      {contacts && contacts.length > 0 ? (
        contacts.map((contact) => (
          <li key={contact.id} className="contact-item">
            <div className="contact-info">
              <ContactsListItem contact={contact} />
              <Link to={`/view/${contact.id}`}>
                <span className="view">View Profile</span>
              </Link>
            </div>
          </li>
        ))
      ) : (
        <li>No contacts available</li>
      )}
    </ul>
  );
}
