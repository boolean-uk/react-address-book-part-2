import { Link } from "react-router-dom";
import "./ContactList.css";
import { useEffect } from "react";

function ContactList({ contacts, fetchContacts }) {
  const callFetchContacts = () => {
    fetchContacts(), console.log("Calling");
  };

  useEffect(() => callFetchContacts, []);
  return (
    <ul>
      {contacts.map((contact, index) => {
        // console.log(contact);
        return (
          <li key={index}>
            <div className="List-Contact-Name">
              {contact.firstName} {contact.lastName}
            </div>
            <Link to={`/contacts/${contact.id}`}> View</Link>
          </li>
        );
      })}
    </ul>
  );
}
export default ContactList;
