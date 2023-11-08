//UNTESTED DRAFT
import ContactsListItem from "./ContactListItem";
import { useEffect } from "react";

export default function ContactsList(props) {
  const { contacts } = props;

  console.log(contacts, "inside Contactlist")

  return (
    <>
      <h2>Contacts List</h2>
      <ul>
        {contacts.map((contact, index) => {
          // console.log(contact, "inside loop")
          return (
          <ContactsListItem
            key={index}
            contact={contact}
          />
        )})}
      </ul>
    </>
  );
}
