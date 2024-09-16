import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DeleteContact(props) {
  const { contacts, setContacts, currContactID, setCurrContactID } = props;

  const goToDashboard = useNavigate();

  const [contactToDelete, setContactToDelete] = useState(null);

  const { id } = useParams();


  useEffect(() => {
    setContactToDelete(
      contacts.find((contact) => Number(contact.id) === Number(id))
    );
  }, [contacts, id]);

  const handleDelete = (event) => {
    event.preventDefault();
    console.log("Handle delete");

    fetch(`https://boolean-api-server.fly.dev/svennas/contact/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    setContacts(contacts.filter((contact) => contact.id !== contactToDelete.id));

    setCurrContactID(parseInt(currContactID) - 1);

    goToDashboard("/list");
  };

  if (!contactToDelete) return <p>Loading...</p>;

  return (
    <article>
      <h3>
        {contactToDelete.firstName} {contactToDelete.lastName}
      </h3>
      <button onClick={handleDelete}>Delete this contact</button>
    </article>
  );
}

export default DeleteContact;
