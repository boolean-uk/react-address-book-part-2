import { useState, useEffect } from "react";
import { deleteContact, getAllContacts } from "../../api/ContactAPI";
import { Link, useNavigate } from "react-router-dom";

function ContactListComponent() {
  const [contacts, setContacts] = useState([]);

  const navigate = useNavigate()

  const fetchContacts = async () => {
    try {
      const data = await getAllContacts();
      setContacts(data); 
    } catch (error) {
      console.error("Failed to fetch contacts", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (contactId) => {
    await deleteContact(contactId);
    fetchContacts();
    navigate("/contacts")
  };

const handleDeleteAll = async () => {
    try {
      const contacts = await getAllContacts();
      const deletePromises = contacts.map((contact) => deleteContact(contact.id));
      await Promise.all(deletePromises); 
      fetchContacts();
    } catch (error) {
    console.error("Failed to delete all contacts", error);
    }
    navigate("/contacts");
  };

  return (
    <div className="contact-list-container">
      <h2>Contact List</h2>
      <button onClick={() => handleDeleteAll()}>Delete all contacts</button>
      {contacts.map((contact) => (
        <div key={contact.id} className="contactRow">
          <div className="contactInfo">{`${contact.firstName} ${contact.lastName}`}</div>
          <div className="buttons">
            <Link to={`/contacts/view/${contact.id}`}>View</Link>
            <Link to={`/contacts/edit/${contact.id}`}>Edit</Link>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactListComponent;
