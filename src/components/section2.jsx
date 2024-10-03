import React from "react";
import ContactList from "./ContactList";
import CreateContactForm from "./CreateContact";

function Section2({ contacts, addContact, showForm }) {
  return (
    <div className="section2">
      {showForm ? (
        <CreateContactForm addContact={addContact} />
      ) : (
        <ContactList contacts={contacts} />
      )}
    </div>
  );
}

export default Section2;
