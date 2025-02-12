import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { ContactsContext, ApiBase } from "../../App";
import MainContent from "./MainContent";

function ContactDetails() {
  const { contacts, updateContacts } = useContext(ContactsContext);

  const { id } = useParams();
  const contact = contacts.find((c) => c.id == id);
  const navigate = useNavigate();

  if (!contact) return <p>Failed to find a contact with that ID!</p>;
  const handleDelete = (event) => {
    event.preventDefault();
    fetch(ApiBase + `/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete contact!");
        return res.text();
      })
      .then((data) => {
        console.log("Successfully deleted data: ", data);
        updateContacts();
        navigate("/");
      });
  };

  return (
    <MainContent title={`${contact.firstName} ${contact.lastName}`}>
      <p>Gender: {`${contact.gender}`}</p>
      <p>Job Title: {`${contact.jobTitle}`}</p>
      <p>Address: {`${contact.street}, ${contact.city}`}</p>
      {contact.latitude && contact.longitude && (
        <MapContainer
          center={[contact.latitude, contact.longitude]}
          zoom={10}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[contact.latitude, contact.longitude]}>
            <Popup>{`${contact.firstName} ${contact.lastName}`}</Popup>
          </Marker>
        </MapContainer>
      )}
      <div className="buttons">
        <button
          className="fancy"
          onClick={() => {
            navigate(`/contact/${id}/edit`);
          }}
        >
          Edit Contact
        </button>
        <button className="delete fancy" onClick={handleDelete}>
          Delete Contact
        </button>
      </div>
    </MainContent>
  );
}

export default ContactDetails;
