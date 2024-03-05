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
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <p>Address: {contact.street}</p>
      <p>City: {contact.city}</p>
      <Link to={`/contact/${contact.id}/edit`}>Edit</Link>
      <button onClick={handleClick}>Delete contact</button>
    </div>
  );
}

export default ContactDetails;
