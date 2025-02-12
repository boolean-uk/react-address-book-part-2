import { useState, useEffect } from "react";
import ContactList from "../components/ContactList";

function Dashboard() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/abdi0609/contact")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <div>
      <h1>Contacts</h1>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default Dashboard;
