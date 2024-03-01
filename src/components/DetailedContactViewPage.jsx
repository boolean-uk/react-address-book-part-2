import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailedContactViewPage(props) {
  const { contactsList } = props;
  //console.log(contactsList);

  const [contact, setContact] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const foundContact = contactsList.find((c) => c.id === parseInt(id));
    //console.log(foundContact);
    if (foundContact) {
      setContact(foundContact);
    } else {
      console.error(`Contact with id ${id} not found in contactsList`);
    }
  }, [id, contactsList]);

  if (!contact) return <p>Loading...</p>;

  return (
    <div className="contact-item-container">
      <h3>{`${contact.firstName} ${contact.lastName}`}</h3>
      <p>{`Street: ${contact.street} | City: ${contact.city}`}</p>
      <button>
        Delete<span className="material-symbols-outlined">delete</span>
      </button>
    </div>
  );
}

export default DetailedContactViewPage;
