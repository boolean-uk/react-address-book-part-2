import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({clr}) =>  <div
style={{
  backgroundColor: clr,
  height: '15px',
  width: '15px',
  borderRadius: '50%', 
}}
></div>

function SimpleMap({contact}){
    const defaultProps = {
        center: {
          lat: contact.latitude,
          lng: contact.longitude
        },
        zoom: 11
      };

      return (

        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            // google api goes here
            bootstrapURLKeys={{ key: ''}}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              clr={contact.favouriteColour}
            />
          </GoogleMapReact>
        </div>
      );
}

export default SimpleMap