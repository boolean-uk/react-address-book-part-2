import { useState } from 'react'

const MapComponent = ({lat, lng}) => {
  const [showMap, setShowMap] = useState(true)

  const center = {
    lat: parseFloat(lat) || 63.5, // default latitude
    lng: parseFloat(lng) || 11, // default longitude
  };

  return (
    <div>
      {showMap && <iframe 
        width="90%" 
        height="90%" 
        src={`https://maps.google.com/maps?q=${center.lat},${center.lng}&z=7&output=embed`} 
        loading="lazy" 
        onError={() => setShowMap(false)}
      />}
    </div>
  );
};

export default MapComponent;