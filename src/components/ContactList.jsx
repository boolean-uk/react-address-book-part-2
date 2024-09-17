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
      <div className="lg overflow-auto max-h-screen bg-gray-700 w-full">
        <div className="flex items-center justify-center">
          <div>
            <label className="text-white">Sort by:</label>
            <select
              className="px-7 py-2 bg-gray-800 text-white rounded mb-5 m-8"
              value={sortOrder}
              onChange={handleSortOrderChange}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {sortedContacts.map((contact) => (
            <React.Fragment key={contact.id}>
              <div className="bg-gray-200 rounded-lg shadow-md p-4 flex-grow">
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
                    className="w-16"
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
      </div>
    </>
  );
}
