import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import LocationCard from "./locationCard";
import place from "../API/place";
import { WarningAlert } from "./Alerts";
import Loading from "../Pages/loading";
import { PrimaryButton } from "./Button";
import CalculateDistance from "../Functions/CalculateDistence";
import Trip from "../API/Trip";

const CreateTripP1 = ({ location }) => {
  const [destination, setDestination] = useState(location);
  const [places, setPlaces] = useState([]);
  const[allPlaces,setAllPlaces]=useState([]);
  const [center, setCenter] = useState({
    lat: location.latitude || 6.037385,
    lng: location.longitude || 80.2180559,
  });
  const [selectedPlace, setSelectedPlace] = useState(location);
  const [duration, setDuration] = useState(localStorage.getItem("duration")); 
  
  const [day, setDay] = useState(1);
  const [yourPlan, setYourPlan] = useState({}); 

  const [isLoading, setLoading] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [warningTitle, setWarningTitle] = useState("");

  const fetchNearestPlaces = async () => {
    try {
      setLoading(true);
      const response = await place.get_nearby_places(selectedPlace);
      if (response.status === "success") {
        setPlaces(response.places);
        if (response.places.length > 0) {
          setCenter({
            lat: response.places[5].latitude,
            lng: response.places[5].longitude,
          })}
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

  const fetchAllPlaces = async () => {
    try {
      
      const response = await place.get_all_places();
      if (response.status === "success") {
        setAllPlaces(response.places);
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
    } 
  };

  // Loading the places for the selected location
  useEffect(() => {
    fetchNearestPlaces();
  }, []);

  useEffect(() => {
    fetchAllPlaces();
  }, []);

  const handleDurationChange = (e) => {
    setDay(parseInt(e.target.value)); // Update selected day
  };

  const handleAddToPlan = (place) => {
    setYourPlan((prevPlan) => {
      const updatedPlan = { ...prevPlan };
      const dayPlan = updatedPlan[day] ? [...updatedPlan[day]] : []; // Ensure a new array
      dayPlan.push(place); // Add the new place
      updatedPlan[day] = dayPlan; // Assign the updated array back to the day
      return updatedPlan;
    });
  
    setSelectedPlace(place);
  
    // Filter out places already in the plan
    const plannedPlaces = Object.values(yourPlan).flat(); // Get all places in the plan
    const plannedPlaceIds = new Set(plannedPlaces.map((p) => p.placeId)); // Get their IDs for filtering
  
    const filteredAndSortedPlaces = allPlaces
      .filter((p) => p.placeId !== place.placeId && !plannedPlaceIds.has(p.placeId)) // Exclude already planned places
      .map((p) => ({
        ...p,
        distance: CalculateDistance(
          place.latitude,
          place.longitude,
          p.latitude,
          p.longitude
        ),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 10); // Limit to the top 10 places
  
    setPlaces(filteredAndSortedPlaces);
  };
  
  const handleRemoveFromPlan = (place) => {
    setYourPlan((prevPlan) => {
      const updatedPlan = { ...prevPlan };
      updatedPlan[day] = updatedPlan[day].filter(
        (p) => p.placeId !== place.placeId
      );
      return updatedPlan;
    });

    setPlaces((prev) => [...prev, place]);
  };

  const handleSavePlan = async () => {
    const today = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format
    const now = new Date().toISOString(); // Get current date-time in ISO format

    // Prepare the data object
    const planData = {
      destination: location,
      dayCount: duration,
      description: localStorage.getItem("description"), // Add your desired description
      createdAt: today,
      updateAt: today,
      eventSet: Object.entries(yourPlan).map(([day, places]) => ({
        description: `Plan for Day ${day}`, // Customize per your requirements
        dayNum: parseInt(day), // Day number
        places: places.map((place) => ({
          placeId: place.placeId,
          name: place.name,
          latitude: place.latitude,
          longitude: place.longitude,
          description: place.description || "No description available",
          photoUrl: place.photoUrl || "",
          rating: place.rating || 0,
        })),
        createdAt: now,
        updateAt: now,
      })),
    }
    alert(planData)

    try {
      // Call the API
      const response = await Trip.plan_trip(planData); // Replace with your actual API function
      setLoading(true)
      if (response.status === "success") {
        alert("Trip plan saved successfully!");
        localStorage.removeItem("yourPlan"); // Clear the plan-related local storage data
        localStorage.removeItem("destination"); // Adjust key names as needed
        // window.location.href = "/trip"; // Redirect to trip page
      } else if (response.status === "unauthorized") {
        setShowWarning(true);
        setWarningMessage("Session Expired. Please login again.!");
        setWarningTitle("Session Expired");

        setTimeout(() => {
          localStorage.clear();
          window.location.href = "/login";
        }, 1000);
      } else {
        alert("Failed to save trip plan. Please try again.");
      }
    } catch (error) {
      console.error("Error saving trip plan:", error);
      alert("An error occurred. Please try again later.");
    }
    finally{
      setLoading(false)

    }
  };

  const handleCancel = () => {
    localStorage.removeItem("yourPlan");
    localStorage.removeItem("destination"); // Adjust key names as needed
    window.location.href = "/trip"; // Redirect to trip page
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const containerStyle = {
    width: "100%",
    height: "450px",
  };


  if (!isLoaded) return <p>Loading Map...</p>;

  return (
    <>
      <div className="w-[77%] fixed right-2 bg-white rounded p-2 h-full flex flex-col flex-1 gap-5">
        <div className="w-[77%] fixed right-2 bg-white rounded overflow-auto flex h-[77.5vh] flex-row flex-1 gap-5">
          <div className="w-full">
            <div className="bg-white rounded-lg p-4 mb-4">
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
                    onClick={() => handleAddToPlan(place)}
                    buttonText={"+"}
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

          <div className="w-full relative">
            <div className="absolute top-2 right-2 flex gap-2">
              <PrimaryButton name={"Save"} isActive={false} action={handleSavePlan}/>
              <button
                className="bg-warningLight hover:bg-warning text-white px-4 py-2 rounded-full"
                onClick={() => 
                  handleCancel()
                }
              >
                Cancel
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-4">Your Plan</h2>
              <div className="flex justify-between items-center mb-4">
                <select
                  value={day}
                  onChange={handleDurationChange}
                  className="border-2 border-secondary p-2 rounded-md"
                >
                  {Array.from({ length: duration }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      Day {index + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                {yourPlan[day] && yourPlan[day].length > 0 ? (
                  yourPlan[day].map((place) => (
                    <div key={place.placeId} className="mb-4">
                      <LocationCard
                        image={place.photoUrl || "/path/to/placeholder"}
                        title={place.name}
                        rating={place.rating}
                        buttonText={"−"}
                        onClick={() => handleRemoveFromPlan(place)}
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">
                    No places added to your plan yet.
                  </p>
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
    </>
  );
};

export default CreateTripP1;
