import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewContacts() {
  const [contact, setContact] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(
          `https://boolean-api-server.fly.dev/SukunimiVinod1/contact/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setContact(data);
        } else {
          window.alert("Could not fetch the data");
        }
      } catch (error) {
        setContact(null);
      }
    };

    fetchContact();
  }, [id]);

  if (contact === null) {
    return <p>Loading</p>;
  }

  return (
    <div className="contacts-container">
      <div className="contact-details">
        <h2>
          {contact.firstName} {contact.lastName}
        </h2>
        <p>
          {contact.street} {contact.city}
        </p>
      </div>
    </div>
  );
}