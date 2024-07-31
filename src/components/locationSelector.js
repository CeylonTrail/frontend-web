import React, { useState } from "react";
import {
    APIProvider,
    Map,
    Marker,
    InfoWindow,
} from "@vis.gl/react-google-maps";


export default function SelectLocation({ onLocationChange }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [locationAdded, setLocationAdded] = useState(false);
    const [buttonName, setButtonName] = useState("Add Location");
    const [open, setOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleMapClick = (event) => {
        console.log('Map Click Event:', event); // Log the event object
        const lat = event.detail.latLng.lat;
        const lng = event.detail.latLng.lng;
        console.log('Latitude:', lat, 'Longitude:', lng); // Log the lat and lng values
        if (lat && lng) {
            setSelectedPosition({ lat, lng });
            setLat(lat);
            setLng(lng);
            setModalIsOpen(false);
            setLocationAdded(true);
            setButtonName("Change Location");
            onLocationChange(lat, lng); // Call the onLocationChange prop
        }
    };

    return (
        <>
            
                <APIProvider apiKey="AIzaSyD5UzriIXmPtuLot9v4DirHr3LkJzh6tfk">
                    <div className="w-full h-60">
                        <Map
                            defaultZoom={15}
                            defaultCenter={{ lat: 6.902652922830886, lng: 79.86116883963061 }}
                            onClick={handleMapClick}
                        mapId="ee7c577ba3feb614"
                        options={{
                            scrollwheel: true, // Enable zooming with mouse scroll
                            draggable: true, // Enable dragging the map
                            zoomControl: true, // Enable zoom control buttons
                            mapTypeControl: true, // Enable map type control
                        }}
                        >
                            {selectedPosition && (
                                <Marker position={selectedPosition} onClick={() => setOpen(true)} />
                            )}

                            {open && (
                                <InfoWindow position={selectedPosition} onCloseClick={() => setOpen(false)}>
                                    <p>Selected Location</p>
                                </InfoWindow>
                            )}
                        </Map>
                    </div>
                </APIProvider>
            
        </>
    );
}