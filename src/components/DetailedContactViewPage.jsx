import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DetailedContactViewPage(props) {
  const { contactsList } = props;
  const URL = `https://boolean-api-server.fly.dev/llllllll-l/contact`;

  const [contact, setContact] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const foundContact = contactsList.find((c) => c.id === parseInt(id));
    //console.log(foundContact);
    if (foundContact) {
      setContact(foundContact);
    } else {
      console.error(`Contact with id ${id} not found in contactsList`);
    }
  }, [id, contactsList]);

  const handleDelete = async () => {
    try {
      const req = await fetch(URL + `/${id}`, {
        method: "DELETE",
      });

      if (!req.ok) {
        console.log(`HTTP ERROR!, status code: ${req.status}`);
      }

      navigate("/");
    } catch (er) {
      console.log("OBS!!! Something went wrong DELETING");
    }
  };

  if (!contact) return <p>Loading...</p>;

  return (
    <div className="contact-item-container">
      <h3>{`${contact.firstName} ${contact.lastName}`}</h3>
      <p>{`Street: ${contact.street} | City: ${contact.city}`}</p>
      <button onClick={handleDelete}>
        Delete<span className="material-symbols-outlined">delete</span>
      </button>
    </div>
  );
}

export default DetailedContactViewPage;
