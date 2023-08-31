import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoicGFub3NrYXI5OCIsImEiOiJjbGx1Z3Z0cjMxaHdsM2NwOHA1aWx4aDY5In0.PWfHaNihe4NVZzWumTCAUA';

const MapWithPin = ({ longitude, latitude }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 12,
    });

    new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
    
    return () => map.remove();
  }, [longitude, latitude]);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

export default MapWithPin;
