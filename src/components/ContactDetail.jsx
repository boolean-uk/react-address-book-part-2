import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ContactDetail() {
  const [contactToDisplay, setContactToDisplay] = useState({});
  const contactId = Number(useParams().id);

  useEffect(() => {
    const url = `https://boolean-api-server.fly.dev/MrStashy/contact/${contactId}`;
    const getData = async () => {
      const data = await fetch(url);
      const json = await data.json();
      setContactToDisplay(json);
    };
    getData();
  }, [contactId]);

  return (
    <>
      <h2>
        {contactToDisplay.firstName} {contactToDisplay.lastName}
      </h2>
      <p>
        {contactToDisplay.street} {contactToDisplay.city}
      </p>
      <button>Edit</button>
    </>
  );
}
