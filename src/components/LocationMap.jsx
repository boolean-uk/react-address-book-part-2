function LocationMap({ latitude, longitude }) {
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  return (
    <div className="map-container">
      <iframe
        title="Contact Location"
        width="100%"
        height="100%"
        src={mapUrl}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default LocationMap;
