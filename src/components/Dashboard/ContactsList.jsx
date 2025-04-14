import ContactItem from "./ContactListItem"
import { useContext } from "react"
import { ContactContext } from "../../App";
import { useEffect, useState } from "react";

function ContactsList() {
  const { contacts } = useContext(ContactContext);
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [ value, setValue ] = useState();

  const handleFilter = (event) => {
    const value = event.target.value;
    setValue(value);
    /*const filtered = contacts.filter(contact => contact.firstName.toLowerCase().includes(value.toLowerCase()));
    setFilteredContacts(filtered);*/
  };

  /*useEffect(() => {
    setFilteredContacts(contacts);
  }, []);*/

  var filterList = contacts;

  if (value) filterList = filterList.filter(contact => contact.firstName.toLowerCase().includes(value.toLowerCase()))

  return (
    <div>
      <h2>Contacts</h2>
      Filter:
      <input
        type="text"
        onChange={handleFilter}
      />
      <ul>
        {filterList.map((contact, index) => (
          <ContactItem key={index} contact={contact} />
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;