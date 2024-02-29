import { useNavigate } from "react-router-dom";
// import ".."

export const ContactListItem = ({
  contact,
  contacts,
  setContacts,
  deleteActive,
}) => {
  const navigate = useNavigate();
  const handleView = () => {
    navigate(`/contacts/${contact.id}`);
  };
  const handleEdit = () => {
    navigate(`/contacts/${contact.id}/edit`, { state: contact });
  };

  const handleDelete = async (id) => {
    console.log("Delete", contact.id);
    const contactsBeforeDelete = contact;
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
    try {
      await fetch(
        `https://boolean-api-server.fly.dev/LinusWillmont/contact/${id}`,
        { method: "DELETE" }
      );
    } catch (error) {
      console.error("Failed to delete contact:", error);
      setContacts(contactsBeforeDelete);
    }
  };

  return (
    <li>
      {`${contact.firstName} ${contact.lastName}`}
      {deleteActive ? (
        <button
          onClick={() => handleDelete(contact.id)}
          className="deleteButton"
        >
          Delete
        </button>
      ) : (
        <button onClick={handleView}> View </button>
      )}
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
};
