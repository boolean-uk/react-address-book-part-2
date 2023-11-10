import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ContactsList() {
  const [data, setData] = useState([])

  // Fetch request:

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://boolean-api-server.fly.dev/irlydo/contact")
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <header>
        <h2>Contacts</h2>
      </header>
      <ul className="contacts-list">
        {data.map((contact) => (
          <li className="contact" key={contact.id}>
            <p>
              Name: {contact.firstName} {contact.lastName}
            </p>
            <p>
              <Link to={`/contacts/${contact.id}`}>View</Link>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactsList;