import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContactBookContext } from "../../context";

const ContactProfile = () => {
  const { id } = useParams();
  const [contact, setContact] = useState({});
  const { contacts, deleteContact } = useContext(ContactBookContext);
  const navigate = useNavigate();

  useEffect(() => {
    const contact = contacts.find((contact) => contact.id === parseInt(id, 10));
    setContact(contact);
  }, [id, contacts]);

  if (!contact) {
    return null;
  }

  const handleDeleteContact = async () => {
    await deleteContact(id);
    navigate("/contact");
  };

  return (
    <main className="contact-profile">
      <h2>{`${contact.firstName} ${contact.lastName}`}</h2>
      <p>{`Email: ${contact.email}`}</p>
      <p>{`City: ${contact.city}`}</p>
      <p>{`Street: ${contact.street}`}</p>
      <Link to={`/update/${contact.id}`}>
        <button>Update</button>
      </Link>

      <button onClick={handleDeleteContact}>Delete</button>
    </main>
  );
};

export default ContactProfile;
