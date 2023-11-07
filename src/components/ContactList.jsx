//UNTESTED DRAFT

import ContactsListItem from "./ContactListItem";
import { useEffect } from "react";

export default function ContactsList(props) {
  const { contacts, setContacts } = props;


//NOT TESTED - and not sure whether we want to have this here, or whether we want to add a Dashboard.jsx file and shove that on there
const fetchCurrentContacts = () => {
        fetch("https://boolean-api-server.fly.dev/Chloe070196/contact")
          .then((res) => res.json)
          .then((data) => setContacts(data));
  };
  
useEffect(fetchCurrentContacts, []);

  return (
    <>
      <h2>Contacts List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <ContactsListItem
            key={index}
            contact={contact}
          />
        ))}
      </ul>
    </>
  );
}
