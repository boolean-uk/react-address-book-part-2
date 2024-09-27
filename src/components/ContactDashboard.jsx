import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ContactDashboard({ contactList }) {
  const [filteredContactList, setFilteredContactList] = useState([]);
  const [selectedGender, setSelectedGender] = useState("All");

  // Set filteredContactList to contactList when component first loads
  useEffect(() => {
    setFilteredContactList(contactList);
  }, [contactList]);

  if (!contactList || contactList.length === 0) return <p>Loading...</p>;

  // Get unique genders from contactList
  const genders = ["All", ...new Set(contactList.map(contact => contact.gender))];

  // Filter contacts based on selected gender
  const filterContacts = (gender) => {
    setSelectedGender(gender);
    if (gender === "All") {
      setFilteredContactList(contactList);
    } else {
      const filteredContacts = contactList.filter(contact => contact.gender === gender);
      setFilteredContactList(filteredContacts);
    }
  };

  return (
    <div>
      <label htmlFor="genderFilter">Filter by Gender:</label>
      <select id="genderFilter" value={selectedGender} onChange={(e) => filterContacts(e.target.value)}>
        {genders.map((gender, index) => (
          <option key={index} value={gender}>{gender}</option>
        ))}
      </select>
      <ul>
        {filteredContactList.map((contact) => (
          <li key={contact.id}>
            <p>
              {contact.firstName} {contact.lastName}
            </p>
            <Link to={`/contactdetails/${contact.id}`}>See full info</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactDashboard;
