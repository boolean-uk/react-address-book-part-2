import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

// Setting size of map
const containerStyle = {
  width: '400px',
  height: '400px'
};

function DisplayMap({lat, lng}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // Supposed to be an api key given by google maps, but cant include it here \/
    googleMapsApiKey: ""
  })

  const [map, setMap] = React.useState(null)

  // Placing bounds and then setting map for contact based on their coordinates
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds({lat, lng});
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat, lng}}
        zoom={6}
        onLoad={onLoad}
        onUnmount={onUnmount}
        >
        {/* Place marker on the contact coordinates */}
        <Marker position={{lat, lng}} />
        <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(DisplayMap)
