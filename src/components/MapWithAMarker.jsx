import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function MapWithAMarker({ latitude, longitude }) {
  const position = { lat: latitude, lng: longitude };

  return (
    <APIProvider apiKey={process.env.MAPS_KEY}>
      <div style={{ height: "50vh", width: "50vh" }}>
        <Map defaultZoom={9} defaultCenter={position}>
          <Marker position={position} />
        </Map>
      </div>
    </APIProvider>
  );
}
