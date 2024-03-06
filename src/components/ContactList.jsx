import React from "react";
import ContactDetail from "./ContactDetail";
import { Link } from "react-router-dom";
import ContactItem from "./ContactItem";

function ContactList({ contactList}) {
  return (
    <>
    <h2>Contacts</h2>
      <ul>
        {contactList.length !== 0 ? (
          contactList.map((item, index) => (
            <li key={index}>
              <ContactItem contactItem={item}></ContactItem>
              <Link to={`/view/${item.id}` }> View</Link>
            </li>
          ))
        ) : (
          <p>No contact found...</p>
        )}
      </ul>
    </>
  );
}

export default ContactList;
