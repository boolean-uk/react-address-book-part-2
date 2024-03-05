import ContactList from "./ContactList";
import { useState, useEffect } from "react";
import SearchField from "./SearchField";

const searchByName = (contacts, nameSearch) =>
  contacts.filter((contact) =>
    (contact.firstName + " " + contact.lastName)
      .toLowerCase()
      .startsWith(nameSearch.toLowerCase())
  );

export default function Dashboard(props) {
  const { contacts } = props;
  const [nameSearch, setNameSearch] = useState("");

  let filteredContacts = contacts;

  if (nameSearch) filteredContacts = searchByName(filteredContacts, nameSearch);

  return (
    <main className="dashboard-layout">
      <section>
        <h2>Contacts</h2>
        <SearchField setNameSearch={setNameSearch} />
        <ContactList contacts={filteredContacts} />
      </section>
    </main>
  );
}
