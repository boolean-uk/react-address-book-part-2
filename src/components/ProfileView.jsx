import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ProfileView(props) {
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();
  const { contacts, setContacts } = props;

  useEffect(() => {
    if (contacts && id) {
      setContact(contacts.find((person) => person.id === Number(id)));
    }
  }, [contacts, id]);

  if (!contact) return <p>Loading...</p>;

  const deleteContact = () => {
    fetch(
      "https://boolean-api-server.fly.dev/pkekkonen/contact/" + contact.id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then(() => {
        setContacts(contacts.filter((person) => person.id !== contact.id));
      });

    navigate("/dashboard");
  };

  return (
    <article>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <ul>
        <li>Street: {contact.street}</li>
        <li>City: {contact.city}</li>
      </ul>
      <button onClick={deleteContact}>Delete contact</button>
      <button onClick={() => navigate(`/update/${contact.id}`)}>Update contact</button>
    </article>
  );
}
