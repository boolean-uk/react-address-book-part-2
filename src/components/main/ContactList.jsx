import { useContext, useState } from "react";

import MainContent from "./MainContent";
import { ContactsContext } from "../../App";

import { Link } from "react-router-dom";

function ContactList() {
  const { contacts } = useContext(ContactsContext);
  const [search, setSearch] = useState("");

  var filteredContacts = contacts;
  if (search) {
    filteredContacts = filteredContacts.filter((contact) => {
      const fullName = `${contact.firstName} ${contact.lastName}`.toUpperCase();
      return fullName.includes(search.toUpperCase());
    });
  }

  return (
    <MainContent title="Contacts">
      <input
        type="text"
        placeholder="Search for name..."
        value={search}
        onChange={(e) => {
          e.preventDefault();
          setSearch(e.target.value);
        }}
      />
      <ul className="common-list" id="contacts-list">
        {filteredContacts.map((el) => {
          return (
            <li key={el.id}>
              <p>{`${el.firstName} ${el.lastName}`}</p>
              <p>
                <Link to={`/contact/${el.id}`} className="details-link">
                  View
                </Link>
              </p>
            </li>
          );
        })}
      </ul>
    </MainContent>
  );
}

export default ContactList;
