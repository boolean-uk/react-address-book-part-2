import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const Map = ({ center }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyA7Yd0OHDDHw5yFrF7DXwUxq3CWPMtrogI",
    });

    return (
        <>
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={
                        center.lat && center.lng ? center : { lat: 0, lng: 0 }
                    }
                    zoom={10}
                />
            )}
        </>
    );
};

export default Map;
