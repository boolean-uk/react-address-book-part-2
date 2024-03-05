import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ContactDetail({ contacts }) {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (contacts && id) {
      //find the contact in the contacts array, where it's id matches id in the url
      setContact(contacts.find((item) => Number(item.id) === Number(id)));
    }
  }, [contacts, id]); // effect run if contacts or id changes

  return (
    <>
      {contact && (
        <>
          <p>
            {contact.firstName} {contact.lastName}
          </p>
          <p>{contact.street}</p>
          <p>{contact.city}</p>
        </>
      )}
    </>
  );
}

export default ContactDetail;
