import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import LocationCard from "./locationCard";
import place from "../API/place";
import { SuccessAlert, WarningAlert } from "./Alerts";
import Loading from "../Pages/loading";
import { PrimaryButton } from "./Button";
import CalculateDistance from "../Functions/CalculateDistence";
import Trip from "../API/Trip";
import SavedTrips from "./savedTrips";

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
  
  const[showsaveContent,setShowContent]=useState(true);
  const [filteredPlaces, setFilteredPlaces] = useState([]); 
  const [searchQuery, setSearchQuery] = useState("");

  const [day, setDay] = useState(1);
  const [yourPlan, setYourPlan] = useState({}); 

  const [isLoading, setLoading] = useState(false);

  const [showSuccessAlert,setShowSuccessAlert]=useState(false);
  const [successTitle,setSuccessTitle]=useState("");
  const [successMessage,setShowSuccesMessage]=useState("");

  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [warningTitle, setWarningTitle] = useState("");

  const fetchNearestPlaces = async () => {
    try {
      setLoading(true);
      const response = await place.get_nearby_places(selectedPlace);
      if (response.status === "success") {
        setPlaces(response.places);
        setFilteredPlaces(response.places); 
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


  const addToSavedTrips = async (tripid)=>{
    
      setLoading(true);
      try {
          const response = await Trip.save_trip(tripid);
          console.log(response)
          if (response.status == "success") {
              setShowSuccesMessage("Your trip will be in saved tab.");
              setSuccessTitle("Trip saved successfully")
              setShowSuccessAlert(true)
              setTimeout(()=>{
                setShowContent(true);               
              },1000)
          } else if (response.status === "unauthorized") {
              setShowWarning(true);
              setWarningMessage("Session Expired. Please login again!");
              setWarningTitle("Session Expired");
              setTimeout(() => {
                  localStorage.clear();
                  window.location.href = "/login";
              }, 1000);
          } else {
              setShowWarning(true);
              setWarningMessage("Failed to save trip. Please try again.!");
             
          }
      } catch (error) {
          setShowWarning(true);
          setWarningMessage("An error occurred. Please try again later.!");
         
      } finally {
          setLoading(false);
      }
  
  }
  useEffect(() => {
    const filtered = allPlaces.filter((place) =>
      place.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPlaces(filtered); // Set filtered places to match search query
  }, [searchQuery, places]);

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query
  };

  const handleAddToPlan = (place) => {
    setYourPlan((prevPlan) => {
      const updatedPlan = { ...prevPlan };
      const dayPlan = updatedPlan[day] ? [...updatedPlan[day]] : [];
      dayPlan.push(place);
      updatedPlan[day] = dayPlan;
      return updatedPlan;
    });
  
    // Remove the place from the allPlaces list
    setAllPlaces((prevAllPlaces) => 
      prevAllPlaces.filter((p) => p.placeId !== place.placeId)
    );
  
    setSelectedPlace(place);
  
    // Filter out places already in the plan
    const plannedPlaces = Object.values(yourPlan).flat();
    const plannedPlaceIds = new Set(plannedPlaces.map((p) => p.placeId));
  
    const filteredAndSortedPlaces = allPlaces
      .filter((p) => p.placeId !== place.placeId && !plannedPlaceIds.has(p.placeId))
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

  // Add the place back to the allPlaces list
  setAllPlaces((prevAllPlaces) => [
    ...prevAllPlaces,
    place
  ]);

  setPlaces((prev) => [...prev, place]);
};


  const handleSavePlan = async () => {
    const today = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format
    const now = new Date().toISOString(); // Get current date-time in ISO format

    // Prepare the data object
    const planData = {
      destination: location,
      dayCount: parseInt(duration),
      description: localStorage.getItem("description"), // Add your desired description
      createdAt: today,
      updateAt: today,
      eventSet: Object.entries(yourPlan).flatMap(([day, places]) =>
        places.map((place) => ({
          description: "Event description here", 
          dayNum: parseInt(day),
          place: {
            placeId: place.placeId,
            name: place.name,
            latitude: place.latitude,
            longitude: place.longitude,
            description: place.description || "No description available",
            photoUrl: place.photoUrl || "",
            rating: place.rating || 0,
          },
          createdAt: now,
          updateAt: now,
        }))
      ),
    };

    try {
      
      const response = await Trip.plan_trip(planData); // Replace with your actual API function
      setLoading(true)
      if (response.status === "success") {
        addToSavedTrips(response.data.tripId)
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
                placeholder="Search by place name..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="border p-2 w-full"
              />
              {searchQuery === "" ? (
                places.length > 0 ? (
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
                )
              ) : (
                filteredPlaces.length > 0 ? (
                  filteredPlaces.map((place) => (
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
                  <p className="text-center text-gray-500">No search result found.</p>
                )
              )}

              
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

      {showSuccessAlert && (
              <SuccessAlert
                title={successTitle}
                message={successMessage}
                onclose={() => setShowSuccessAlert(false)}
              />
            )}

      {showsaveContent && <SavedTrips/>

      }
    </>
  );
};

export default CreateTripP1;
