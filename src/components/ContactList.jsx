import { useContext } from "react";
import { Context } from "../App";
import { Link } from "react-router-dom";

export default function ContactList() {
  const { contacts } = useContext(Context);

  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <div className="contact-details" key={index}>
          <p>
            {contact.firstName} {contact.lastName}
          </p>
          <Link to={"/contact/" + index}>view</Link>
        </div>
      ))}
    </div>
  );
}
