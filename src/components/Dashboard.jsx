import { useState, useEffect } from "react";
import Filters from "./Filters";
import ContactList from "./ContactList";

export default function Dashboard(props) {
  const { reloadingNecessary, setReloadingNecessary, deleteContact } = props;

  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState(contacts)
  const [displayFilteredContacts, setDisplayFilteredContacts] = useState(false)

  const loadContact = () => {
    const username = "AllyDouillette";
    const baseURL = `https://boolean-api-server.fly.dev/${username}`;
    const endpoint = `/contact`;

    fetch(baseURL + endpoint)
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .then(setReloadingNecessary(false));
  };

  useEffect(loadContact, [reloadingNecessary]);

  console.log(contacts)

  return (
    <>
      <Filters 
        contacts={contacts}
        setFilteredContacts={setFilteredContacts}
        setDisplayFilteredContacts={setDisplayFilteredContacts}
        />
      <ContactList
        contacts={contacts}
        displayFilteredContacts={displayFilteredContacts}
        filteredContacts={filteredContacts}
        setReloadingNecessary={setReloadingNecessary}
        deleteContact={deleteContact}
      />
    </>
  );
}
