import { useContext, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../App.jsx";

export default function Contact() {
  const { id } = useParams();
  const { contacts, setContacts } = useContext(GlobalContext);
  const navigate = useNavigate();
  const contact = contacts.find((c) => c.id === parseInt(id));

  useEffect(() => {
    if (!contact) {
      navigate("/");
    }
  }, [contact, navigate]);

  const handleDelete = async () => {
    const response = await fetch(
      `https://boolean-uk-api-server.fly.dev/VictorsCodingCorner/contact/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      setContacts(contacts.filter((c) => c.id !== parseInt(id)));
      navigate("/");
    } else {
      console.error("Failed to delete contact");
    }
  };

  if (!contact) return null;

  return (
    <>
      <div>
        <Link to={`/edit/${contact.id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div>
        <h2>
          {contact.firstName} {contact.lastName}
        </h2>
        {contact.profileImage && contact.profileImage !== "" && (
          <img src={contact.profileImage} alt={contact.firstName} />
        )}
        {contact.jobTitle && contact.jobTitle !== "" && (
          <p>Job Title: {contact.jobTitle}</p>
        )}
        <p>
          Location: {contact.street}, {contact.city}
        </p>
        {contact.latitude !== 0 && contact.longitude !== 0 && (
          <p>
            Coordinates: ({contact.latitude}, {contact.longitude})
          </p>
        )}
        {contact.email && contact.email !== "" && <p>Email: {contact.email}</p>}
        {contact.favouriteColour && contact.favouriteColour !== "" && (
          <p>Favourite Colour: {contact.favouriteColour}</p>
        )}
      </div>
    </>
  );
}
