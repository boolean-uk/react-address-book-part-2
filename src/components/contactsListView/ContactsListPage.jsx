import { useEffect } from "react";
import { ContactListItem } from "./ContactListItem";
import { getContacts } from "../utils/apis";

export const ContactsListPage = ({ contacts, setContacts }) => {
  useEffect(() => {
    console.log("Running effect to fetch contacts");
    getContacts().then((result) => {
      setContacts([...result]);
    });
  }, []);

  if (!contacts) return <p>Loading...</p>;

  return (
    <>
      <ul>
        {contacts.map((contact) => {
          return <ContactListItem key={contact.id} contact={contact} />;
        })}
      </ul>
    </>
  );
};
