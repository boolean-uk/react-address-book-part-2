import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent(props) {
    const { contact } = props

    if (!contact.geo || !contact.geo.lat || !contact.geo.lng) {
        return <div>Contact has no position information</div>;
    }

    const position = [contact.address.geo.lat, contact.address.geo.lng];
  
    return (
      <MapContainer center={position} zoom={10} style={{ height: '300px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>{contact.name}'s Location</Popup>
        </Marker>
      </MapContainer>
    );
  }
  export default MapComponent