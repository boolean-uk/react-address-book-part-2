import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

export default function ContactInfo({ contacts }) {
    const { id } = useParams();
    const contact = contacts.find(contact => contact.id === parseInt(id));

    if (!contact) {
        return <p>Contact not found</p>;
    }

    return (
        <div>
            <h1>Contact Info</h1>
            <ul>
                <li>First Name: {contact.firstName}</li>
                <li>Last Name: {contact.lastName}</li>
                <li>Street: {contact.street}</li>
                <li>City: {contact.city}</li>
            </ul>
            {console.log(contact.latitude, contact.longitude)}
            {contact.latitude && contact.longitude && (
                <MapContainer 
                    center={[contact.latitude, contact.longitude]} 
                    zoom={13} 
                    style={{ height: "200px", width: "50%" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[contact.latitude, contact.longitude]}>
                        <Popup>
                            {contact.firstName} {contact.lastName}
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
        </div>
    );
}
