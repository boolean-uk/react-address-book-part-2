import React from 'react';
import { Marker, ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

const MapComponent = ({ latitude, longitude }) => {
  if (latitude == null || longitude == null) {
    return <p>Loading map...</p>;
  }

  return (
    <div className="map-container">
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{
          scale: 200, 
        }}
        width={600} 
        height={400} 
      >
        <ZoomableGroup center={[longitude, latitude]} zoom={1.5} disablePanning>
          <Geographies geography="https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#E0E0E0"
                  stroke="#333"
                  strokeWidth={0.5}
                />
              ))
            }
          </Geographies>
          <Marker coordinates={[longitude, latitude]}>
            <circle r={4} fill="red" stroke="white" strokeWidth={2} />
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapComponent;
