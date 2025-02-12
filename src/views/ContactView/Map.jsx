import React from 'react';

function Map({ latitude, longitude  }) {
    if (!latitude || !longitude) {
        return <div>No location data available</div>;
    }

    const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

    return (
        <div style={{ marginTop: '20px' }}>
            <iframe
                src={mapUrl}
                width="100%"
                height="300"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            />
        </div>
    );
}

export default Map;