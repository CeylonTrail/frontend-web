import React, { useState, useEffect } from "react";

const CurrentTrip = ({ places }) => {
    const [selectedDate, setSelectedDate] = useState(1); // Default Day 1

    const handleDateChange = (e) => {
        setSelectedDate(Number(e.target.value));
    };

    // Filter places based on the selected day
    const filteredPlaces = places.filter((place) => place.dayNum === selectedDate);

    useEffect(() => {
        if (filteredPlaces.length) {
            const map = new window.google.maps.Map(document.getElementById("map"), {
                center: {
                    lat: filteredPlaces[0].place.latitude,
                    lng: filteredPlaces[0].place.longitude,
                },
                zoom: 13,
            });

            // Add markers for the filtered places
            filteredPlaces.forEach(({ place }) => {
                new window.google.maps.Marker({
                    position: { lat: place.latitude, lng: place.longitude },
                    map,
                    title: place.name,
                });
            });
        }
    }, [filteredPlaces]);

    return (
        <div className="w-[77%] fixed right-2 bg-white rounded p-6 h-[87.5vh] flex flex-row">
            {/* Left Section */}
            <div className="w-full md:w-1/3">
                <div className="p-4 mb-4 relative">
                    {/* Dropdown to Select Date */}
                    <div className="flex items-center border-b pb-2 mb-4">
                        <select
                            value={selectedDate}
                            onChange={handleDateChange}
                            className="p-2 border rounded w-full md:w-auto"
                        >
                            <option value={1}>Day 1</option>
                            <option value={2}>Day 2</option>
                            <option value={3}>Day 3</option>
                        </select>
                    </div>

                    {/* Vertical Progress Bar */}
                    <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                    {/* Itinerary List */}
                    <ul className="relative ml-6">
                        {filteredPlaces.map(({ place }, index) => (
                            <li key={index} className="flex items-start mb-4">
                                <div className="w-4 h-4 bg-primary rounded-full mt-1 mr-4"></div>
                                <div>
                                    <h3 className="font-semibold">{place.name}</h3>
                                    <p className="text-sm">{place.description || "No description"}</p>
                                    <p className="text-sm text-gray-500">Rating: {place.rating}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-2/3">
                <div className="p-4 h-full">
                    {/* Full-Height Map */}
                    <div id="map" className="h-full w-full"></div>
                </div>
            </div>
        </div>
    );
};

export default CurrentTrip;
