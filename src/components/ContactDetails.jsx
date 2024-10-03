import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ContactDetails({ contacts, updateContact, deleteContact }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const contactId = Number(id);
  const contact = contacts.find((c) => c.id === contactId);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (contact) {
      setFormData(contact);
    }
  }, [contact]);

  const handleDelete = () => {
    deleteContact(contactId, navigate);
  };

  const handleUpdate = () => {
    updateContact(contactId, formData, navigate);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!contact) {
    return <p>Contact not found</p>;
  }

  return (
    <div>
      <h2>Update Contact</h2>
      <form>
        <input
          type="text"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone || ""}
          onChange={handleChange}
          placeholder="Phone"
        />
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </form>
    </div>
  );
}

export default ContactDetails;
