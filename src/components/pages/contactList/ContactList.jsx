import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import ContactListCard from "./ContactListCard";
import "./ContactList.css";

function ContactList() {
  const { contacts } = useContext(UserContext);
  return (
    <div className="contact-list">
      <h1>My Contacts</h1>
      <ul>
        {contacts.map((contact, index) => (
          <ContactListCard key={index} contact={contact} />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
