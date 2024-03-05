import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ContactProfile = () => {
  const [contact, setContact] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/toege/contact/${id}`)
      .then((response) => response.json())
      .then(setContact);
  }, []);

  if (!contact) {
    return (<div>Loading...</div>)
  }

  return (
    <main>
      <div>
        <h1>{contact.firstName} {contact.lastName}</h1>
      </div>
      <div>
        <h3>{"Street: "} {contact.street}</h3>
      </div>
      <div>
        <h3>{"City: "} {contact.city}</h3>
      </div>
    </main>
  );
};

export default ContactProfile;
