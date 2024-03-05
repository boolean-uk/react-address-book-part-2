import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    axios
      .get("https://boolean-api-server.fly.dev/OsamahAlmaliki/contact")
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  };

  const handleDeleteAllContacts = () => {
    axios
      .delete("https://boolean-api-server.fly.dev/OsamahAlmaliki/contact")
      .then(() => {
        setContacts([]);
      })
      .catch((error) => {
        console.error("Error deleting all contacts:", error);
      });
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={filterText}
        onChange={handleFilterChange}
      />
      <br /><br />
      <button>
        {" "}
        <Link to="/create-contact">Create New Contact</Link>
      </button>{" "}
      <br /> <br />
      <button onClick={handleDeleteAllContacts}>Delete All Contacts</button>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {contact.firstName} {contact.lastName}
            <Link to={`/contact/${contact.id}/edit`}>Edit</Link>
            <Link to={`/contact/${contact.id}/details`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
