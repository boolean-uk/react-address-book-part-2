import { Link } from "react-router-dom";
import { useState } from "react";

function ContactList({ contacts }) {
  const [showFilterForm, setShowFilterForm] = useState(false);
  const [filterInput, setFilterInput] = useState("");

  const toggleFilterForm = () => {
    setShowFilterForm((prev) => !prev);
  };

  const handleChange = (e) => {
    setFilterInput(e.target.value);
  };

  const handleFilter = () => {
    // Filter contacts based on the filter input
    const filteredContacts = contacts.filter((contact) =>
      contact.firstName.toLowerCase().includes(filterInput.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <div>
      <h2>Contact List</h2>
      <button onClick={toggleFilterForm}>Filter</button>
      {showFilterForm && (
        <form>
          <label>
            First Name:
            <input
              type="text"
              name="filterInput"
              value={filterInput}
              onChange={handleChange}
            />
          </label>
        </form>
      )}
      <ul style={{ marginBottom: "10px" }}>
        {handleFilter().map((contact) => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;

function ContactListItem({ contact }) {
  return (
    <li>
      <h3>
        <Link to={`/contact/${contact.id}`}>
          {contact.firstName} {contact.lastName}
        </Link>
      </h3>
    </li>
  );
}
