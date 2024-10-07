import { useContext } from "react";
import { ContactContext } from "../../../App";
import ContactListItem from "./ContactListItem";

function ContactList() {
  const context = useContext(ContactContext);

  return (
    <section>
      <h2>Contacts</h2>
      <ul className="contacts-list">
        {context.contacts.map((contact, index) => (
          <ContactListItem key={index} contact={contact} />
        ))}
      </ul>
    </section>
  );
}

export default ContactList;
