import React, { useRef, useEffect } from 'react'

function ContactMap({ latitude, longitude }) {
    const mapRef = useRef(null);

    useEffect(() => {
        // Check if latitude and longitude are valid
        if (latitude && longitude) {
            // Create map centered on the given latitude and longitude
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: latitude, lng: longitude },
                zoom: 10, // Adjust zoom level as needed
            });

            // Create a marker for the contact's location
            new window.google.maps.Marker({
                position: { lat: latitude, lng: longitude },
                map: map,
                title: 'Contact Location',
            });
        }
    }, [latitude, longitude])


    return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
}

export default ContactMap