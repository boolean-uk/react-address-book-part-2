import { Link } from "react-router-dom";
import "./ContactList.css";
import { useEffect, useState } from "react";

function ContactList({ contacts, fetchContacts }) {
  const callFetchContacts = () => {
    fetchContacts();
    // console.log("Callin");
  };
  const [searchString, setSearchString] = useState("");
  useEffect(() => callFetchContacts, []);

  const handleSearch = (event) => {
    const searchString = event.target.value;
    setSearchString(searchString.trim());
  };

  const filteredCont = contacts.filter((contact) => {
    let fullName = contact.firstName + " " + contact.lastName;
    return fullName.toLowerCase().includes(searchString.toLowerCase());
  });

  return (
    <>
      <ul>
        <label>
          Search:
          <input
            type="text"
            name="searchString"
            onChange={handleSearch}
          ></input>
        </label>
        {filteredCont.map((contact, index) => {
          // console.log(contact);
          return (
            <li key={index}>
              <div className="List-Contact-Name">
                {contact.firstName} {contact.lastName}
              </div>
              <Link to={`/contacts/${contact.id}`}> View</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default ContactList;
