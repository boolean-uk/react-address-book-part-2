import { useEffect, useState } from "react";
import Contact from "./Contact";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://boolean-api-server.fly.dev/AlexanderNiklasson/contact")
      .then((response) => response.json())
      .then((data) => setContacts(data));
    setIsLoading(false);
  }, []);
  return (
    <div>
      <h1>Contact List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="contact-list">
          {contacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </div>
  );
}
