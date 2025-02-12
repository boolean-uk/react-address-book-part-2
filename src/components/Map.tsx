import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface MapProps {
  latitude: number;
  longitude: number;
  name: string;
}

function MapComponent({ latitude, longitude, name }: MapProps) {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      style={{
        height: "200px",
        width: "300px",
        maxWidth: "100%",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>{name} is here</Popup>
      </Marker>
    </MapContainer>
  );
}

export { MapComponent };
