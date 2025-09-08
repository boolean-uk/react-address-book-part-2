import { useState } from "react";
import ContactListItem from "./ContactListItem";

export default function ContactList({ contacts, onSelect, onDelete }) {
  const [sortOrder, setSortOrder] = useState("asc"); 

  const sortedContacts = [...contacts].sort((a, b) => {
    if (a.firstName < b.firstName) return sortOrder === "asc" ? -1 : 1;
    if (a.firstName > b.firstName) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setSortOrder("asc")}>A → Z</button>
        <button onClick={() => setSortOrder("desc")}>Z → A</button>
      </div>

      <ul>
        {sortedContacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onClick={() => onSelect(contact)}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}
