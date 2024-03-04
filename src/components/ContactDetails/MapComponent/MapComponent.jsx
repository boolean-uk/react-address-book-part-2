const MapComponent = ({lat, lng}) => {
  const center = {
    lat: parseFloat(lat) || 63.5, // default latitude
    lng: parseFloat(lng) || 11, // default longitude
  };

  return (
    <div>
      <iframe width="100%" height="100%" src={`https://maps.google.com/maps?q=${center.lat},${center.lng}&z=7&output=embed`} loading="lazy"></iframe>
    </div>
  );
};

export default MapComponent;