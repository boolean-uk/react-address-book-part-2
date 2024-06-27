import { useLocation, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ContactView(props) {
  const { deleteContact } = props;
  let { state } = useLocation();
  let contact = state.contact;

  const navigate = useNavigate();

  if (contact == null) return <p>Loading ...</p>;

  function handleOnClickEdit() {
    navigate(`/contacts/${contact.id}/edit`, { state: { contact: contact } });
  }

  function handleOnClickDelete() {
    deleteContact(contact.id);
    navigate("/contacts");
    console.log(deleteContact);
  }

  return (
    <>
      <div className="contact-view">
        <h2>
          {contact.firstName} {contact.lastName}
        </h2>
        <p>Email : {contact.email}</p>
        <p>City : {contact.city}</p>
        <p>Street : {contact.street}</p>

        <MapContainer
          center={[contact.longitude, contact.latitude]}
          zoom={9}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[contact.longitude, contact.latitude]}></Marker>
        </MapContainer>

        <div className="actions">
          <button className="btn-edit" onClick={handleOnClickEdit}>
            Edit
          </button>
          <button className="btn-delete" onClick={handleOnClickDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactView;
