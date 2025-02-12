import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import ContactItem from "./ContactItem";
import { ContactInfo } from "../types";

function ContactList() {
  const [searchItem, setSearchItem] = useState("");
  const { contacts } = useContext(AppContext);
  const [filteredContacts, setFilteredContacts] = useState<ContactInfo[]>([]);

  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    const filteredItems = contacts.filter(
      (c) =>
        c.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(filteredItems);
  };
  
  return (
    <div>
      <h1>Contacts</h1>
      <input
        type="text"
        value={searchItem}
        onChange={handleSearch}
        placeholder="Type to search"
      ></input>
      <ul className="contact-list">
        {filteredContacts.map((contact, index) => (
          <ContactItem contact={contact} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
