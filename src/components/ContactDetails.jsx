import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function ContactDetails({username}) {

    const {id} = useParams();
    const [contact, setContact] = useState(null);

    useEffect(() => {
        const url = `https://boolean-uk-api-server.fly.dev/${username}/contact/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setContact(data))
            .catch(error => console.error('Error fetching contact details:', error));
    }, [username, id]);

    if (!contact) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <h1>Contact Details</h1>
            <p><strong>First Name:</strong> {contact.firstName}</p>
            <p><strong>Last Name:</strong> {contact.lastName}</p>
            <p><strong>Street:</strong> {contact.street}</p>
            <p><strong>City:</strong> {contact.city}</p>
            <Link to={`/dashboard/${id}/edit`}>Edit Contact</Link>
            {contact.latitude && contact.longitude && (
                <MapContainer
                center = {[contact.latitude, contact.longitude]}
                zoom = {13}
                style = {{height: '400px', width: '100%'}}
                >
                    <TileLayer
                    url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                      <Marker position={[contact.latitude, contact.longitude]}>
                        <Popup>
                            {contact.firstName} {contact.lastName}<br />
                            {contact.street}, {contact.city}
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
        </div>
    );

}

export default ContactDetails