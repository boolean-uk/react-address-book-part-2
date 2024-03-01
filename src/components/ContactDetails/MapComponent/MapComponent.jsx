import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '60vw',
  height: '60vh',
};


const MapComponent = ({lat, lng}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries,
  });

  const center = {
    lat: parseFloat(lat) || 63.5, // default latitude
    lng: parseFloat(lng) || 11, // default longitude
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={5}
        center={center}
      >
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  );
};

export default MapComponent;