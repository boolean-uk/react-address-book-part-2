import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ContactList() {
  const [individualData, setIndividualData] = useState([]);

  function fetchWork() {

    fetch("https://boolean-api-server.fly.dev/Callumhayden99/contact")
    .then((response) => response.json())
    .then((data) => setIndividualData(data))
  }
  useEffect(fetchWork, [])

  return (
    <>
      <header>
        <h1 className="contact-h1">Contacts</h1>
      </header>

      <ul className="contacts-list">
        {individualData.map((contact) => (
          <li className="contact" key={contact.id}>
            <div className="name">Name:</div>
            <div className="name-tag">
              {contact.firstName} {contact.lastName}
            </div>
            <p>
              <Link to={`/contact/${contact.id}`}>View</Link>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
