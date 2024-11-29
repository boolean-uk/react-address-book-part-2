import { Link } from "react-router-dom";
import ContactsListItem from "./ContactsListItem";
import "../css/ContactsList.css";

export default function ContactsList(props) {
  const { contacts, setContacts, setDataFetched } = props;

  const handleDelete = (id) => {
    fetch(`https://boolean-api-server.fly.dev/nicolaiklokmose/contact/${id}`, {
        method: "DELETE",
      })
      .then((response) => {
          if (response.ok) {
              const updatedContacts = contacts.filter((contact) => contact.id !== id);
              setContacts(updatedContacts);
              setDataFetched(false);
          }
      })
  };

  return (
    <ul className="contacts-list">
      {contacts && contacts.length > 0 ? (
        contacts.map((contact) => (
          <li key={contact.id} className="contact-item">
            <div className="contact-info">
              <ContactsListItem contact={contact} />
              <Link to={`/view/${contact.id}`} className="view">View Profile</Link>
              <button className="delete-button" onClick={() => handleDelete(contact.id)}>Delete Contact</button>
            </div>
          </li>
        ))
      ) : (
        <li>No contacts available</li>
      )}
    </ul>
  );
}
