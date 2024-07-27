// LocationSelector.js
import React, { useState, useRef, useEffect } from 'react';

const LocationSelector = ({ onSelectLocation }) => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);

    useEffect(() => {
        if (mapRef.current && !map) {
            const googleMap = new window.google.maps.Map(mapRef.current, {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
            });
            setMap(googleMap);

            googleMap.addListener('click', (event) => {
                const lat = event.latLng.lat();
                const lng = event.latLng.lng();

                if (marker) {
                    marker.setPosition(event.latLng);
                } else {
                    const newMarker = new window.google.maps.Marker({
                        position: event.latLng,
                        map: googleMap,
                    });
                    setMarker(newMarker);
                }

                onSelectLocation({ lat, lng });
            });
        }
    }, [map, onSelectLocation]);

    return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default LocationSelector;
