import { useContext } from "react";
import { Context } from "../App";

export default function ContactList() {
  const { contacts } = useContext(Context);

  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <p key={index}>
          {contact.firstName} {contact.lastName}
        </p>
      ))}
    </div>
  );
}
