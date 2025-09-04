import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../App";
import ContactListItem from "./ContactListItem";

function ContactList() {
  const { data } = useContext(ApiContext);
  const { isLoading } = useContext(ApiContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  useEffect(() => {
    const filtered = data.filter((person) => {
      const fullName = `${person.firstName} ${person.lastName}`.toLowerCase();
      return fullName.includes(searchQuery);
    });
    setFilteredData(filtered);
  }, [data, searchQuery]);

  if (isLoading) return <div></div>;

  return (
    <div>
      <div className="searchWrapper">
        <input
          type="text"
          name="search"
          value={searchQuery}
          placeholder="seach..."
          onChange={handleChange}
        />
      </div>

      {filteredData.map((contact, index) => (
        <ContactListItem key={index} contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;
