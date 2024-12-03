import React, { useState, useCallback, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import LocationCard from "./locationCard";
import place from "../API/place";
import { WarningAlert } from "./Alerts";
import Loading from "../Pages/loading";
import backArrow from "../assets/img/arrow_back.svg";
import frontArrow from "../assets/img/arrow_forward.svg";
import PlanTrip from "./planTrip";

const CreateTripP1 = ({ location }) => {
  const [destination, setDestination] = useState(location);
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(location);
  const [showContent, setShowContent] = useState("createTripP1");

  const [duration, setDuration] = useState(2); // Default duration value
  const [yourPlan, setYourPlan] = useState([]);

  // Loading
  const [isLoading, setLoading] = useState(false);

  // Warning message
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [warningTitle, setWarningTitle] = useState("");

  

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setLoading(true);
        const response = await place.get_nearby_places(selectedPlace);
        if (response.status === "success") {
          setPlaces(response.places);
        } else if (response.status === "JWTerror") {
          setShowWarning(true);
          setWarningMessage("Session Expired. Please login again.!");
          setWarningTitle("Session Expired");

          setTimeout(() => {
            localStorage.clear();
            window.location.href = "/login";
          }, 1000);
        } else {
          setShowWarning(true);
          setWarningMessage("No places found. Please try again.");
          setWarningTitle("No Results");
        }
      } catch (error) {
        setShowWarning(true);
        setWarningMessage("Please try again later.");
        setWarningTitle("Error fetching places.");
      } finally {
        setLoading(false);
      }
    };

    const storedDuration = localStorage.getItem("duration");
    if (storedDuration) {
      setDuration(parseInt(storedDuration));
    }

    fetchPlaces();
  }, [selectedPlace]);

  const handleDurationChange = (e) => {
    setDuration(parseInt(e.target.value)); // Update duration when dropdown changes
    localStorage.setItem("duration", e.target.value); // Store updated duration in localStorage
  };

  const handleAddToPlan = (place) => {
    setYourPlan((prev) => [...prev, place]); // Add place to "Your Plan"
    setPlaces(places.filter((p) => p.placeId !== place.placeId)); // Remove it from search places
  };

  const handleRemoveFromPlan = (place) => {
    setYourPlan(yourPlan.filter((p) => p.placeId !== place.placeId)); // Remove from "Your Plan"
    setPlaces((prev) => [...prev, place]); // Add it back to search places
  };


  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Access API key from .env
  });

  // Map container style
  const containerStyle = {
    width: "100%",
    height: "450px",
  };

  // Default center of the map
  const center = {
    lat: location.latitude || 6.037385,
    lng: location.longitude || 80.2180559,
  };

  if (!isLoaded) return <p>Loading Map...</p>; // Display a loader until the API is loaded

  return (
    <>
      <div className="w-[77%] fixed right-2 bg-white rounded p-2  h-full flex flex-col flex-1 gap-5">
        
       {/* Rest of the Component */}
        {/* <div className="flex flex-row justify-between z-10">
         
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-transparent hover:border-primary hover:shadow-lg hover:bg-gray-100 transition"
            onClick={()=>setShowContent("planTripForm")}
          >
            <img src={backArrow} alt="Back" className="w-5 h-5" />
          </button>

          
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-transparent hover:border-primary hover:shadow-lg hover:bg-gray-100 transition"
            onClick={() => console.log("Forward Arrow Clicked")}
          >
            <img src={frontArrow} alt="Forward" className="w-5 h-5" />
          </button>
        </div> */}

  
        {/* Remaining content */}
        <div className="w-[77%] fixed right-2 bg-white rounded mt-[4rem] overflow-auto flex  h-[77.5vh] flex-row flex-1 gap-5">
          <div className="w-full">
            <div className="bg-white rounded-lg  p-4 mb-4">
              <input
                type="text"
                placeholder="Search Places"
                className="w-full p-2 mb-4 border rounded-md"
              />
  
              {places.length > 0 ? (
                places.map((place) => (
                  <LocationCard
                    key={place.placeId}
                    image={place.photoUrl || "/path/to/placeholder"}
                    title={place.name}
                    rating={place.rating}
                    onClick={ () => handleAddToPlan(place)}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500">No places found.</p>
              )}
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
              >
                {places.map((place) => (
                  <Marker
                    key={place.placeId}
                    position={{ lat: place.latitude, lng: place.longitude }}
                    title={place.name}
                  />
                ))}
              </GoogleMap>
            </div>
          </div>
          <div className="w-full">
        {/* Your Plan Section */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">Your Plan</h2>
          <div className="flex justify-between items-center mb-4">
            <select
              value={duration}
              onChange={handleDurationChange}
              className="border-2 border-secondary p-2 rounded-md"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} Day{num > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            {yourPlan.length > 0 ? (
              yourPlan.map((place) => (
                <div key={place.placeId} className="mb-4">
                  <LocationCard
                    image={place.photoUrl || "/path/to/placeholder"}
                    title={place.name}
                    rating={place.rating}
                  >
                    <button
                      onClick={() => handleRemoveFromPlan(place)}
                      className="bg-red-500 text-white py-1 px-4 rounded mt-2"
                    >
                      Remove
                    </button>
                  </LocationCard>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No places added to your plan yet.</p>
            )}
          </div>
        </div>
          </div>
        </div>
      </div>
  
      {isLoading && <Loading />}
  
      {showWarning && (
        <WarningAlert
          title={warningTitle}
          message={warningMessage}
          onclose={() => setShowWarning(false)}
        />
      )}

      {/* {showContent==="planTripForm" && <PlanTrip /> } */}


    </>
  );
  
};

export default CreateTripP1;
