import { useEffect, useState } from "react";
import ContactListItem from "./ContactListItem";

function ContactList(props) {
  const { contacts } = props;
  const [filter, setFilter] = useState("");
  const [filteredList, setFilteredList] = useState(contacts); // Use state to manage filteredList

  useEffect(() => {
    if (filter === "LatLngPlus") {
      setFilteredList(
        contacts.filter(
          (contact) => contact.latitude > 0 && contact.longitude > 0
        )
      );
    } else if (filter === "LatLngMinus") {
      setFilteredList(
        contacts.filter(
          (contact) => contact.latitude < 0 && contact.longitude < 0
        )
      );
    } else {
      setFilteredList(contacts);
    }
  }, [filter, contacts]);

  return (
    <>
      <h2>Your contacts</h2>
      <button onClick={() => setFilter("LatLngPlus")}>Lat/Lng above 0/0</button>
      <button onClick={() => setFilter("LatLngMinus")}>
        Lat/Lng below 0/0
      </button>
      <button onClick={() => setFilter("")}>Reset filter</button>
      <ul>
        {filteredList.map((contact, index) => (
          <ContactListItem key={index} contact={contact} />
        ))}
      </ul>
    </>
  );
}
export default ContactList;
