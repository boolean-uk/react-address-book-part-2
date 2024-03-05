import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ViewContact() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/maritmoe/contact/${id}`)
      .then((response) => response.json())
      .then(setContact);
  }, [id, contact]);

  if (!contact) return <p>No contact with that id found...</p>;

  const handleDelete = () => {
    // Deletes contact by making DELETE request
    fetch(`https://boolean-api-server.fly.dev/maritmoe/contact/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    // Navigate to dashboard
    navigate("/");
  };

  return (
    <article className="contact-information">
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <p>Street: {contact.street}</p>
      <p>City: {contact.city}</p>
      {contact.latitude && contact.longitude && (
        <p>
          <iframe
            height="350"
            width="50%"
            src={`https://maps.google.com/maps?q=${contact.latitude},${contact.longitude}&output=embed&z=2`}
          ></iframe>
        </p>
      )}
      <button onClick={() => navigate(`/edit/${id}`)}>Update</button>
      <button onClick={() => handleDelete()}>Delete</button>
    </article>
  );
}

export default ViewContact;
