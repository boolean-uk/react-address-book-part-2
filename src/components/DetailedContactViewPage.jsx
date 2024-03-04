import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UpdateContactForm from "./UpdateContactDetailsForm";

function DetailedContactViewPage(props) {
  const { contactsList } = props;
  const URL = `https://boolean-api-server.fly.dev/llllllll-l/contact`;

  const [contact, setContact] = useState(null);
  const [editedContact, setEditContact] = useState(null);
  const [editState, setEditState] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const foundContact = contactsList.find((c) => c.id === parseInt(id));
    //console.log(foundContact);
    if (foundContact) {
      setContact(foundContact);
      setEditContact(foundContact);
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

  const handleUpdate = () => {
    console.log("update");
    setEditState(true);
  };

  const handleSave = async () => {
    try {
      const req = await fetch(URL + `/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedContact),
      });

      if (!req.ok) {
        console.log(`HTTP ERROR! status code: ${req.status}`);
        return;
      }

      const updateContact = await req.json();
      setContact(updateContact);
      setEditState(false);
    } catch (er) {
      console.log("OBS!!! Something went wrogn trying to update the contact.");
    }
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setEditContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  if (!contact) return <p>Loading...</p>;

  return (
    <div className="contact-item-container">
      {editState ? (
        <UpdateContactForm
          contact={editedContact}
          onInputChange={onInputChange}
          onSave={handleSave}
        />
      ) : (
        <>
          <div>
            <h3>{`${contact.firstName} ${contact.lastName}`}</h3>
            <p>{`Street: ${contact.street} | City: ${contact.city}`}</p>
          </div>
          <div>
            <button className="event-button" onClick={handleDelete}>
              <span className="material-symbols-outlined" alt="delete">
                delete
              </span>
            </button>
            <button className="event-button" onClick={handleUpdate}>
              <span className="material-symbols-outlined" alt="update">
                update
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default DetailedContactViewPage;
