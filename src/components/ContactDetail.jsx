import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ContactDetail({ contacts, onDelete, onUpdate }) {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedContact = contacts.find((item) => item.id === id);
    setContact(selectedContact);
  }, [contacts, id]);

  const handleDelete = () => {
    onDelete(id);
    navigate("/");
  };

  const handleUpdate = () => {
    navigate(`/view/${contact.id}/edit`);
  };

  return (
    <div>
      {contact && (
        <>
          <p>
            {contact.firstName} {contact.lastName}
          </p>
          <p>{contact.street}</p>
          <p>{contact.city}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleUpdate}>Update</button>
        </>
      )}
    </div>
  );
}

export default ContactDetail;
