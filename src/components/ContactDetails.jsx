import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ContactDetails({
  allContacts,
  setAllContacts,
  selectedContact,
  setSelectedContact,
}) {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/zainabch123/contact/${params.id}`
    )
      .then((response) => response.json())
      .then((data) => setSelectedContact(data));
  }, [allContacts, params.id]);

  if (!selectedContact) return <p>Loading...</p>;

  function handleDelete(event) {
    fetch(
      "https://boolean-uk-api-server.fly.dev/zainabch123/contact/" +
        selectedContact.id,
      {
        method: "DELETE",
      }
    );
  }

  return (
    <section>
      <h2>
        {selectedContact.firstName} {selectedContact.lastName}
      </h2>
      <p>
        {selectedContact.street} {selectedContact.city}
      </p>
      <button
        type="submit"
        onClick={function () {
          handleDelete(event), navigate("/contacts-list");
        }}
      >
        Delete
      </button>
      <button
        type="submit"
        onClick={function () {
          navigate(`/update/${selectedContact.id}`);
        }}
      >
        Update
      </button>
    </section>
  );
}
