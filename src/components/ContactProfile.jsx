import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ContactProfile({ contacts, setContacts }) {
  const [contact, setContact] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedContact, setEditedContact] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("fetch contact with id= ", id);
    const selectedContact = contacts.find((c) => c.id === parseInt(id));
    setContact(selectedContact);
    setEditedContact(selectedContact);
  }, [id, contacts]);

  const handleUpdateContact = async () => {
    try {
      const response = await fetch(
        `https://boolean-api-server.fly.dev/jacobchenjensen/contact/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedContact),
        }
      );

      if (response.ok) {
        setContacts((prevContacts) =>
          prevContacts.map((c) => (c.id === parseInt(id) ? editedContact : c))
        );

        setEditMode(false);
      }
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };
  const handleDeleteContact = async () => {
    try {
      await fetch(
        `https://boolean-api-server.fly.dev/jacobchenjensen/contact/${id}`,
        {
          method: "DELETE",
        }
      );

      setContacts((prevContacts) =>
        prevContacts.filter((c) => c.id !== parseInt(id))
      );

      navigate("/contacts");
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  if (!contact) {
    return <p>Loading...</p>;
  }

  return (
    <article>
      <h2>
        {editMode ? (
          <input
            type="text"
            value={editedContact.firstName}
            onChange={(e) =>
              setEditedContact((prev) => ({
                ...prev,
                firstName: e.target.value,
              }))
            }
          />
        ) : (
          contact.firstName
        )}{" "}
        {editMode ? (
          <input
            type="text"
            value={editedContact.lastName}
            onChange={(e) =>
              setEditedContact((prev) => ({
                ...prev,
                lastName: e.target.value,
              }))
            }
          />
        ) : (
          contact.lastName
        )}
      </h2>
      <p>
        {editMode ? (
          <input
            type="text"
            value={editedContact.street}
            onChange={(e) =>
              setEditedContact((prev) => ({ ...prev, street: e.target.value }))
            }
          />
        ) : (
          `Street: ${contact.street}`
        )}
      </p>
      <p>
        {editMode ? (
          <input
            type="text"
            value={editedContact.city}
            onChange={(e) =>
              setEditedContact((prev) => ({ ...prev, city: e.target.value }))
            }
          />
        ) : (
          `City: ${contact.city}`
        )}
      </p>
      {editMode ? (
        <button onClick={handleUpdateContact}>Submit</button>
      ) : (
        <>
          <button onClick={() => setEditMode(true)}>Update Contact</button>
          <button onClick={handleDeleteContact}>Delete Contact</button>
        </>
      )}
    </article>
  );
}

export default ContactProfile;
