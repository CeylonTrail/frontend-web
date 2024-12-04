import React, { useEffect, useState } from 'react';
import { SuccessAlert, WarningAlert } from "./Alerts";
import Loading from "../Pages/loading";
import Trip from '../API/Trip';
import dimage from '../assets/img/vectorPlace4.jpg';
import { capitalizeWords } from '../Functions/FormatName';
import CurrentTrip from './CurrentTrip';
import green_bookmark from '../assets/img/bookmark_green.svg'

const TripCard = ({ title, duration, image, onClick,onSave}) => {
    return (
        <div
            className="relative border rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow"
            
        >
            {/* Saved Icon */}
            <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow" onClick={onClick}>
                <img src={green_bookmark}/>
            </div>

            {/* Image */}
            <div className="z-10 w-80 h-48 bg-gray-200 mb-4 flex items-center justify-center" onClick={onSave}>
                <img src={image} alt={title} className="w-full h-full object-cover rounded" />
            </div>

            <div className='flex flex-row justify-between w-80' onClick={onClick}>
                {/* Title and Duration */}
                <div>
                    <h3 className="text-lg font-semibold w-full ">{capitalizeWords(title)}</h3>
                    <p className="text-gray-500 w-full ">{duration}</p>
                </div>
                

                {/* Start Button */}
                {/* <button
                    className="mt-4 bg-primary text-white py-2 px-4 rounded hover:primaryDark"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent card click from triggering
                        onStart();
                    }}
                >
                    Start
                </button> */}
            </div>
            
        </div>
    );
};

const TripDashboard = () => {
    const [savedTrips, setSavedTrips] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [tripDetail,setTripDetail]=useState([]);
    const [showTripDetail,setShowTripDetail]=useState(false)
    const [showWarning, setShowWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState("");
    const [warningTitle, setWarningTitle] = useState("");

    const [showSuccessAlert,setShowSuccessAlert]=useState(false);
  const [successTitle,setSuccessTitle]=useState("");
  const [successMessage,setShowSuccesMessage]=useState("");

    const fetchAllTrips = async () => {
        setLoading(true);
        try {
            const response = await Trip.all_trip();
            if (response.status === "success") {
                setSavedTrips(response.data);
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
                setWarningMessage("Failed to fetch trips. Please try again.!");
            }
        } catch (error) {
            setShowWarning(true);
            setWarningMessage("An error occurred. Please try again later.!");
        } finally {
            setLoading(false);
        }
    };

    const getTripById=async (tripID) => {
        setLoading(true);
        try {
            const response = await Trip.get_trip(tripID);
            console.log(response)
            if (response.status === "success") {
                setTripDetail(response.data);
                setShowTripDetail(true)
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
                setWarningMessage("Failed to fetch trip details. Please try again.!");
               
            }
        } catch (error) {
            setShowWarning(true);
            setWarningMessage("An error occurred. Please try again later.!");
           
        } finally {
            setLoading(false);
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
        fetchAllTrips();
    }, []);

    const handleCardClick = (tripId) => {
        // alert(`Navigating to trip details for Trip ID: ${tripId}`);/
        getTripById(tripId)
        
    };

    const handleOnSave=(tripId)=>{
        addToSavedTrips(tripId);
        // setShowSuccessAlert(true);
        // setShowSuccesMessage("Trip Saved")
    }

    // const handleStartTrip = (tripId) => {
    //     // alert(`Starting trip with Trip ID: ${tripId}`);
    //     localStorage.setItem("CurrentTrip",tripId);
    //     setShowSuccessAlert(true);
    //     setShowSuccesMessage("Please ove to current trip tab.")
    //     setSuccessTitle("Trip started successfully.")
    // };

    return (
        <>
            <div className="w-[77%] fixed right-2 bg-white rounded p-6 overflow-auto h-[87.5vh]">
                <h2 className="text-2xl font-semibold mb-4">All Trips</h2>

                {savedTrips.length > 0 ? (
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        {savedTrips.map((trip) => (
                            <TripCard
                                key={trip.tripId}
                                title={trip.destination}
                                duration={`${trip.dayCount} day${trip.dayCount > 1 ? 's' : ''}`}
                                image={trip.imageURL || dimage}
                                // image={ dimage}

                                onClick={() => handleCardClick(trip.tripId)}
                                onSave={()=> handleOnSave(trip.tripId)}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No trips found.</p>
                )}


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
            {/* {console.log(tripDetail)}/ */}

            
{showTripDetail && 
                <CurrentTrip places={tripDetail}/>
                }
        </>
    );
};

export default TripDashboard;
