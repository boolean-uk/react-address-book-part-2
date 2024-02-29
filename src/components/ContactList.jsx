import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactContext } from "../ContactsProvider";
export function ContactList() {
  const { contacts } = useContext(ContactContext);
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedContacts = contacts.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.firstName.localeCompare(b.firstName);
    } else {
      return b.firstName.localeCompare(a.firstName);
    }
  });

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <select value={sortOrder} onChange={handleSortOrderChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        {sortedContacts.map((contact) => (
          <React.Fragment key={contact.id}>
            <div className="bg-white rounded-lg shadow-md p-4 flex-grow">
              <div className="mb-4">
                <p className="font-bold">First Name:</p>
                <p>{contact.firstName}</p>
              </div>
              <div className="mb-4">
                <p className="font-bold">Last Name:</p>
                <p>{contact.lastName}</p>
              </div>
              <div className="mb-4">
                <p className="font-bold">Email:</p>
                <p>{contact.email}</p>
              </div>
              <div className="mb-4">
                <p className="font-bold">Profile Image:</p>
                <img
                  src={contact.profileImage}
                  alt="Profile Image"
                  className="w-64"
                />
              </div>
              <div className="mb-4">
                <button className="bg-gray-800 text-white py-2 px-4 rounded">
                  <Link to={`/view/${contact.id}`}>View</Link>
                </button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
