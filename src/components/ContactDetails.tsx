import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../App";
import { useNavigate, useParams } from "react-router";
import { Contact } from "../types";

export default function ContactDetails() {
  const [contact, setContact] = useState<Contact | null>();
  const { contacts, updateContacts } = useContext(ContactContext);
  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const pageContact = contacts.find((c) => c.id === parseInt(id ?? "-1"));
    setContact(pageContact);
  }, [id, contacts]);

  const deleteContact = async (id: number) => {
    const url = `https://boolean-uk-api-server.fly.dev/kristbsy/contact/${id}`;
    await fetch(url, { method: "DELETE" });
    updateContacts();
    nav("/");
  };

  return (
    <>
      <h2>
        {contact?.firstName} {contact?.lastName}
      </h2>
      <p>{contact?.email}</p>
      <p>
        Lives in {contact?.street}, {contact?.city}
      </p>
      {}
      <br />
      <button onClick={() => deleteContact(contact?.id ?? -1)}>
        Delete contact
      </button>
    </>
  );
}
