import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ContactPage() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/abdi0609/contact/${id}`)
      .then((res) => res.json())
      .then((data) => setContact(data));
  }, [id]);

  if (!contact) return <p>Loading...</p>;

  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>Street: {contact.street}</p>
      <p>City: {contact.city}</p>
    </div>
  );
}

export default ContactPage;
