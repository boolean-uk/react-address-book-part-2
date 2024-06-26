import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function ContactsList(props) {
  const { contactsList } = props;
  const [query, setQuery] = useState("");

  return (
    <>
      <h1>Contacts</h1>

      <input
        className="search"
        type="search"
        placeholder="Search contact..."
        onChange={(e) => setQuery(e.target.value.trim().toLowerCase())}
      />

      <ul className="contacts-list">
        {contactsList &&
          contactsList
            .filter((contact) => {
              if (
                contact.firstName.toLowerCase().includes(query) ||
                contact.lastName.toLowerCase().includes(query)
              ) {
                return contact;
              }
            })
            .map((contact) => {
              return (
                <li key={contact.id}>
                  <NavLink to={`contacts/${contact.id}`}>
                    {contact.firstName + " " + contact.lastName}
                  </NavLink>
                </li>
              );
            })}
      </ul>
    </>
  );
}
