import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function ContactDetails({ people, deleteContact }) {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (people) {
      const person = people.find((p) => p.id === parseInt(id));
      setContact(person);
    }
  }, [id, people]);

  if (!contact) return <div>Loading...</div>;
  const position = [parseFloat(contact.address.geo.lat), parseFloat(contact.address.geo.lng)];

  return (
    <div>
      <h1>{`${contact.name}`}</h1>
      <p>Username: {contact.username}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Street: {contact.address.street}</p>
      <p>City: {contact.address.city}</p>
      <p>Website: {contact.website}</p>
      <p>Company: {contact.company.name}</p>
      <button onClick={() => deleteContact(contact.id)}>Delete Contact</button>

        <div>
           <h2>Location</h2>
           <MapContainer center={position} zoom={13} style={{ height: "300px", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position}></Marker>
           </MapContainer>
        </div>
    </div>
  );
}

export default ContactDetails;
