import React, { useEffect, useState } from "react";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import MapComponent from "./MapComponent";

export default function ContactDashboard() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const baseUrl = "https://boolean-uk-api-server.fly.dev/Chrissivert/contact";

  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;

    fetch(`${baseUrl}/${id}`, { method: "DELETE" })
      .then(() => {
        setContacts(oldContacts => oldContacts.filter(contact => contact.id !== id));
        if (selectedContact?.id === id) {
          setSelectedContact(null);
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
  <ContactList
    contacts={contacts}
    onSelect={setSelectedContact}
    onDelete={handleDelete}
  />

  {selectedContact && (
    <div>
      <ContactDetails contact={selectedContact} />
      <MapComponent
        zoom={3}
        latitude={selectedContact.latitude}
        longitude={selectedContact.longitude}
        name={`${selectedContact.firstName} ${selectedContact.lastName}`}
      />
    </div>
  )}
</div>
  );
}
