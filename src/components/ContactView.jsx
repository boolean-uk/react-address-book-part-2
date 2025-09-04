import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../App.css";

function ContactView({ contacts,  onDelete }) {
  const { id } = useParams();
  const contact = contacts.find(c => String(c.id) === id);
  const navigate = useNavigate();

  if (!contact) {
    return <p>Contact not found.</p>;
  }

  return (
    <div className="contact-view">
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>Address: {contact.street}, {contact.city}</p>
            <button
        className="update-contact-btn"
        onClick={() => navigate(`/contacts/${contact.id}/edit`)}
      >
        Update Contact
      </button>
      <button
        className="delete-contact-btn"
        onClick={() => typeof onDelete === 'function' && onDelete(contact.id)}
      >
        Delete Contact
      </button>
    </div>
  );
}

export default ContactView;