import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../App"; // Adjust the import based on your context location
import EditForm from "./EditContact";

export default function ContactDetail() {
  const { id } = useParams();
  const { contacts, setContacts, handleNavigation } = useContext(Context);
  const contact = contacts.find((contact) => contact.id === parseInt(id));

  useEffect(() => {
    const button = document.getElementById("create-contact-button");
    if (button) {
      button.style.display = "none";
    }

    return () => {
      if (button) {
        button.style.display = "block";
      }
    };
  }, []);

  const handleRemove = (id) => {
    console.log(id);
    setContacts(contacts.filter((contact) => contact.id !== id));
    handleNavigation('/')
  };

  const handleEdit = (id) => {
    console.log("edit hit")

    handleNavigation(`/edit/contacts/${id}`)
  }

  if (!contact) {
    return (
      <div>
        <p>Contact not found</p>
        <button onClick={() => handleNavigation("/")}>Return</button>
      </div>
    );
  }

  return (
    <div>
      <h1>
        {contact.firstName} {contact.lastName}
      </h1>
      <p>Street: {contact.street}</p>
      <p>City: {contact.city}</p>
      <button onClick={() => handleNavigation("/")}>Return</button>
      <button onClick={() => handleRemove(contact.id)}>Delete Contact</button>
      <button onClick={() => handleEdit(contact.id)}>Edit Contact</button>
    </div>
  );
}
