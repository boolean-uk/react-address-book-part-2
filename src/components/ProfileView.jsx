import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProfileView(props) {
  const [contact, setContact] = useState(null);

  const { id } = useParams();
  const { contacts } = props;

  useEffect(() => {
    if (contacts && id) {
      setContact(contacts.find((person) => person.id === Number(id)));
    }
  }, [contacts, id]);

  if (!contact) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <ul>
        <li>Street: {contact.street}</li>
        <li>City: {contact.city}</li>
      </ul>
    </article>
  );
}
