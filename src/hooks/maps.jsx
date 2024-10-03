import { useState, useCallback } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

function useMaps(apiKey, initialCoordinates) {
  const [map, setMap] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey
  });

  const onLoad = useCallback(
    (map) => {
      if (initialCoordinates) {
        const bounds = new window.google.maps.LatLngBounds(initialCoordinates);
        map.fitBounds(bounds);
      }
      setMap(map); 
    },
    [initialCoordinates] 
  );

  const onUnmount = useCallback(() => {
    setMap(null); 
  }, []);

  return {
    isLoaded,
    map,
    onLoad,
    onUnmount,
  };
}

export default useMaps;