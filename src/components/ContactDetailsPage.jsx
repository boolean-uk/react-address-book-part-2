import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ContactDetailsPage = ({ contacts }) => {
  const { id } = useParams();

  const [contact, setContact] = useState(null);

  useEffect(() => {
    setContact(contacts.find((c) => c.id.toString() === id));
  }, [id, contacts]);

  if (!contact) return <p>Loading...</p>;

  return (
    <ul>
      <li>
        <h2>{`${contact.firstName} ${contact.lastName}`}</h2>
      </li>
      <li>
        <p>{`Adress: ${contact.city}, ${contact.street}`}</p>
      </li>
    </ul>
  );
};
