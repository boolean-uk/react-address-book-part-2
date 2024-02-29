import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteContact } from "../helpers/APIRequester";
import { useNavigate } from "react-router-dom";
export default function ViewContactInfo({ contacts }) {
  const navigate = useNavigate();
  console.log(contacts);
  const params = useParams();
  console.log(params);
  const [contact, setContact] = useState({});
  useEffect(() => {
    const contact = contacts.find(
      (contact) => contact.id.toString() === params.id.toString()
    );
    setContact(contact);
  }, [contacts, params.id]);

  async function deleteContactHandler(id) {
    try {
      await deleteContact(id);
      setContact((prevContacts) => {
        return prevContacts.filter((contact) => contact.id !== id);
      });
      navigate("/view");
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  }

  return (
    <div>
      <h2>Contact Info</h2>
      <p>Name: {contact.firstName}</p>
      <p>Email: {contact.email}</p>
      <Link to={`/view/${contact.id}/edit`}>Edit Contact</Link>
      <a onClick={() => deleteContactHandler(contact.id)}>Delete</a>
      <iframe
        width="600"
        height="450"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${
          contact.longitude - 0.01
        }%2C${contact.latitude - 0.01}%2C${contact.longitude + 0.01}%2C${
          contact.latitude + 0.01
        }&layer=mapnik&marker=${contact.latitude}%2C${contact.longitude}`}
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
}
