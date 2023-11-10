import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ContactsView() {
  const [contact, setContact] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://boolean-api-server.fly.dev/irlydo/contact/${id}`);
        if (response.ok) {
          const data = await response.json();
          setContact(data)
        } else {
          throw new Error("Failed to fetch contact data");
        }
      } catch (error) {
        console.error(error);
        setContact(null);
      }
    };

    fetchContact();
  }, [id]);

  if (contact === null) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>{contact.street} {contact.city}</p>
    </div>
  );
}

export default ContactsView;