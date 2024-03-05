import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewContact() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/maritmoe/contact/${id}`)
      .then((response) => response.json())
      .then(setContact);
  }, [id]);

  if (!contact) return <p>No person with that id found...</p>;

  return (
    <article>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <p>Street: {contact.street}</p>
      <p>City: {contact.city}</p>
    </article>
  );
}

export default ViewContact;
