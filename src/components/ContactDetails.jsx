import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ContactDetails({ contactList, deleteContact, setIsUpdating }) {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const chosenPerson = contactList.filter((obj) => obj.id == id);
    setPerson(chosenPerson[0]);
  }, [id, contactList]);

  const doDelete = (id) => {
    console.log("deleting");
    deleteContact(id);
    navigate("/");
  };

  const doUpdate = () => {
    setIsUpdating(true);
    navigate(`/updatecontact/${person.id}`);
  };

  if (!person) return <p>Loading...</p>;

  return (
    <div style={{ backgroundColor: person.favoriteColour }}>
      <img src={person.profileImage} alt="Profile" />
      <p>
        Name: {person.firstName} {person.lastName}
      </p>
      <p>Email: {person.email}</p>
      <p>Street: {person.street}</p>
      <p>City: {person.city}</p>
      <p>Job title: {person.jobTitle}</p>
      <p>Latitude: {person.latitude}</p>
      <p>Longitude: {person.longitude}</p>
      <p>Favorite Colour: {person.favoriteColour}</p>
      <button onClick={doUpdate}>Update</button>
      <button onClick={() => doDelete(person.id)}>Delete</button>

      <div style={{ height: "400px", width: "100%" }}>
        <MapContainer
          center={[person.latitude, person.longitude]}
          zoom={3}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[person.latitude, person.longitude]}>
            <Popup>
              {person.firstName} {person.lastName}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default ContactDetails;
