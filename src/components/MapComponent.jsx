import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function RecenterMap({ position, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(position, zoom);
  }, [position, zoom, map]);
  return null;
}

export default function MapComponent({ latitude, longitude, name, zoom = 13 }) {
  const position = [latitude, longitude];

  return (
    <div style={{ width: "500px", height: "400px" }}>
      <MapContainer center={position} zoom={zoom} style={{ width: "100%", height: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>{name}</Popup>
        </Marker>
        <RecenterMap position={position} zoom={zoom} />
      </MapContainer>
    </div>
  );
}
