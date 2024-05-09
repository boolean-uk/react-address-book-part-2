import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Address() {
  const [contact, setContact] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://boolean-api-server.fly.dev/samisalehsaeed/contact/${params.id}`
    )
      .then((res) => res.json())
      .then(setContact);
  }, []);

  if (!contact) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <h2>Contact Details</h2>
        <p>
          <strong>Name:</strong> {contact.firstName} {contact.lastName}
        </p>
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
        <p>
          <strong>Address:</strong> {contact.city}, {contact.street}
        </p>
      </div>
    </>
  );
}
