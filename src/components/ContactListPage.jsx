import { useEffect } from "react";
import { Link } from "react-router-dom";

function ContactListPage({ contacts, setContacts }) {
  //Fetch current data from api on render to make sure all data is present in new contacts
  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/VictorAdamson/contact`)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((jsonData) => {
        console.log("Menu fetch: ", jsonData);
        setContacts(jsonData);
      });
  }, []);

  return (
    <>
      <section className="contact-list-box">
        <h2>Contact List</h2>
        <ul>
          {contacts.map((contact, index) => (
            <li className="contact-list-item" key={index}>
              {contact.firstName} {contact.lastName}
              <Link to={`/contacts/${contact.id}`} className="view-button">
                View
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default ContactListPage;
