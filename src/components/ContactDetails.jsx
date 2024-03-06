import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ContactDetails({ contacts, setContacts }) {
  const [contact, setContact] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (contacts && id) {
      setContact(
        contacts.find((contact) => parseInt(contact.id) === parseInt(id))
      );
    }
  }, [contacts, id]);

  if (!contact) return <p>Not a contact</p>;

  function handleClick() {
    fetch(`https://boolean-api-server.fly.dev/maha897/contact/${id}`, {
      method: "DELETE",
    })
        .then(() => setContacts(contacts.filter((c) => parseInt(c.id) !== parseInt(id))))
        .then(() => navigate("/"))
  }

  return (
    <div className="contact-details">
      <h2 className="contact-details-name">
        {contact.firstName} {contact.lastName}
      </h2>
      <p className="contact-details-info">
        <span className="info-label">Address:</span> {contact.street}
      </p>
      <p className="contact-details-info">
        <span className="info-label">City:</span> {contact.city}
      </p>
      {contact.latitude && contact.longitude && (
        <iframe
          width="100%"
          height="250"
          src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed&z=5`}
        ></iframe>
      )}
      <Link to={`/contact/${contact.id}/edit`} className="edit-link">
        Edit
      </Link>
      <button onClick={handleClick} className="delete-button">
        Delete contact
      </button>
    </div>
  );
}

export default ContactDetails;
