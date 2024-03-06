import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ContactDetail({ contacts, onDelete }) {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (contacts && id) {
      //find the contact in the contacts array, where it's id matches id in the url
      setContact(contacts.find((item) => Number(item.id) === Number(id)));
    }
  }, [contacts, id]); // effect run if contacts or id changes

  const handleDelete = (id) => {
    onDelete(id);
    navigate("/");
  };

  return (
    <>
      {contact && (
        <>
          <p>
            {contact.firstName} {contact.lastName}
          </p>
          <p>{contact.street}</p>
          <p>{contact.city}</p>

          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </>
      )}
    </>
  );
}

export default ContactDetail;
