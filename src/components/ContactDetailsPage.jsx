import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ContactDetailsPage = () => {
  const [contact, setContact] = useState(null);
  const { id } = useParams();

  console.log("Id", id);

  const fetchContact = async () => {
    const result = await fetch(
      `https://boolean-api-server.fly.dev/LinusWillmont/contact/${id}`
    );
    const json = await result.json();
    return json;
  };

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const json = await fetchContact();
      if (!ignore) {
        setContact(json);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [setContact]);

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
