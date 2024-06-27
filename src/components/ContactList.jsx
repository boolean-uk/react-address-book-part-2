import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ContactList(props) {
  const { contacts, fetch } = props;
  const [query, setQuery] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  fetch();

  function handleSearch() {
    let result = [];
    for (let i = 0; i < contacts.length; i++) {
      if (
        contacts[i].firstName.includes(query) ||
        contacts[i].lastName.includes(query)
      ) {
        result.push(contacts[i]);
      }
    }
    setFilteredContacts(result);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleSearch, [query]);
  useEffect(() => setFilteredContacts(contacts), [contacts]);

  if (contacts.length < 1) return <>Loading...</>;
  return (
    <>
      <div>
        <div className="contact-list">
          <div className="search-wrapper">
            <input
              className="search"
              type="text"
              placeholder="Search"
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            ></input>
          </div>
          <h2>Contact List</h2>
          <ul>
            {filteredContacts.map((contact) => (
              <Link
                key={contact.id}
                to={`/contacts/${contact.id}/view`}
                state={{ contact: contact }}
              >
                <li className="contact-list-item">
                  {contact.firstName} {contact.lastName}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ContactList;
