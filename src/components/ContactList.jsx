import { Link } from "react-router-dom";

function ContactList({ contacts }) {
  return (
    <div>
      <h2>Contact List</h2>
      <ul style={{ marginBottom: "10px" }}>
        {contacts.map((contact) => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;

function ContactListItem({ contact }) {
  return (
    <li>
      <h3>
        <Link to={`/contact/${contact.id}`}>
          {contact.firstName} {contact.lastName}
        </Link>
      </h3>
    </li>
  );
}
