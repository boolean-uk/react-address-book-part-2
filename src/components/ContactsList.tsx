import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../App";
import { NavLink } from "react-router";

export default function ContactsList() {
  const { contacts } = useContext(ContactContext);
  const [filterText, setFilterText] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter(
        (contact) =>
          contact.firstName.toLowerCase().includes(filterText) ||
          contact.lastName.toLowerCase().includes(filterText)
      )
    );
  }, [contacts, filterText]);

  return (
    <>
      <h1>contacts</h1>
      <label htmlFor="filter">Filter name: </label>
      <input
        type="text"
        name="filter"
        onChange={(e) => setFilterText(e.target.value.toLowerCase())}
      />
      <ul>
        {filteredContacts.map((contact) => {
          return (
            <NavLink to={`/contacts/${contact.id}`} key={contact.id}>
              <li>
                {contact.firstName} {contact.lastName}
              </li>
            </NavLink>
          );
        })}
      </ul>
    </>
  );
}
