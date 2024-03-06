import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import ContactListCard from "./ContactListCard";
import "./ContactList.css";

function ContactList() {
  const { contacts } = useContext(UserContext);
  return (
    <div className="contact-list-page">
      <h1 className="page-title">My Contacts</h1>
      <ul className="contact-list">
        {contacts.map((contact, index) => (
          <ContactListCard key={index} contact={contact} />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
