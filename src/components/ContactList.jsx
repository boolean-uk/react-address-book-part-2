import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiContext, ContactContext } from "../App";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState({});
  const [searchFilter, setSearchFilter] = useState("");
  const navigate = useNavigate();

  const apiUrl = useContext(ApiContext);
  const { setContact } = useContext(ContactContext);

  useEffect(() => {
    fetch(`${apiUrl}/contact/`)
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, [apiUrl, contacts]);

  const handleSearch = () => {
    fetch(`${apiUrl}/contact/${searchId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Contact not found");
        }
        return response.json();
      })
      .then((data) => {
        setSearchResult(data);
        setContact(data);
        navigate(`/contact/${searchId}`);
      })
      .catch((error) => {
        console.error("Error fetching contact:", error);
        setSearchResult(null);
      });
  };

  const handleDeleteAll = () => {
    fetch(`${apiUrl}/contact/`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to delete contacts: ${response.statusText}`);
        }
        return response.text();
      })
      .then(() => setContacts([]))
      .catch((error) => console.error("Error deleting contacts:", error));
  };

  const filteredContacts = contacts.filter((contact) => {
    return (
      contact.firstName.toLowerCase().includes(searchFilter.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchFilter.toLowerCase())
    );
  });

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        <input
          type="text"
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <br />
        <input
          type="text"
          placeholder="Search by name"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        {searchResult == undefined ? (
          <p style={{ color: "red" }}>Contact not found!</p>
        ) : null}
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Link
              to={`/contact/${contact.id}`}
              onClick={() => setContact(contact)}
            >
              {contact.firstName} {contact.lastName}
            </Link>
          </li>
        ))}
        <button onClick={handleDeleteAll}>Delete all contacts</button>
      </ul>
    </div>
  );
}

export default ContactList;
