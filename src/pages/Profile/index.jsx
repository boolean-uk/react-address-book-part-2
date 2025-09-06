// src/pages/Profile.jsx
import { useParams, useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { ApiContext } from "../../App";

function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { api, contacts, setContacts } = useContext(ApiContext);

  const person = contacts.find((p) => String(p.id) === id);

  const handleDelete = async () => {
    await fetch(`${api}/contact/${id}`, { method: "DELETE" });
    setContacts((prev) => prev.filter((p) => String(p.id) !== id));
    navigate("/");
  };

  return (
    <main>
      <h1>{person.firstName} {person.lastName}</h1>
      <p>Street: {person.street}</p>
      <p>City: {person.city}</p>

      <Link to={`/contacts/${id}/edit`}>Edit</Link>
      {" | "}
      <button onClick={handleDelete}>Delete</button>
    </main>
  );
}

export default Profile;
