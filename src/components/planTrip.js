import React, { useEffect, useState } from 'react';
import { SimpleInput } from './inputFields'; 
import planImage from '../assets/img/planTrip.svg';
import { PrimaryButton } from './Button';
import CreateTripP1 from './createTripP1';

const PlanTrip = () => {
    const [destination, setDestination] = useState('');
    const [duration, setDuration] = useState(2); // Default value
    const [description, setDescription] = useState('');
    const [showContent, setShowContent] = useState("planTripForm");
    const [destinationTouched, setDestinationTouched] = useState(false);

    const handleDurationChange = (change) => {
        setDuration((prev) => Math.max(0, prev + change)); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!destination.trim()) {
            setDestinationTouched(true);
            return;
        }
        localStorage.setItem("location",destination);
        localStorage.setItem("duration",duration);
        localStorage.setItem("description",description);
        setShowContent("createTripP1");
    };

    // useEffect(() => {
        
            
    //         setDestination(localStorage.getItem("location") || '');
    //         setDescription(localStorage.getItem("description") || '');
    //         setDuration(parseInt(localStorage.getItem("duration")) || 2); 
        
    // },[]); 


    return (
        <div className="w-[77%] fixed right-2 bg-white rounded p-6  h-[87.5vh] flex flex-row flex-1">
            {showContent === "planTripForm" && (
                <>
                    <img src={planImage} alt="Plan a trip" />
                    <div className='flex flex-col w-full pt-5 px-10'>
                        <h1 className="text-2xl font-bold mb-6 text-center">Plan a New Trip</h1>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-gray-700 mb-2">Where to go :</label>
                                <SimpleInput
                                    pholder="Destination"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    onBlur={() => setDestinationTouched(true)}
                                />
                                {destinationTouched && !destination.trim() && (
                                    <p className="text-warning font-thin text-xs">Destination is required!</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Duration :</label>
                                <div className="flex items-center ">
                                    <button
                                        type="button"
                                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l border-2 border-secondary"
                                        onClick={() => handleDurationChange(-1)}
                                    >
                                        -
                                    </button>
                                    <span className="text-gray-700 px-3 py-1 border-2 border-secondary">{duration} Days</span>
                                    <button
                                        type="button"
                                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-y border-2 border-secondary"
                                        onClick={() => handleDurationChange(1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Description (Optional) :</label>
                                <SimpleInput
                                    pholder="Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <PrimaryButton name={"Create Trip"} action={handleSubmit} />
                        </form>
                    </div>
                </>
            )}

            {showContent === "createTripP1" && <CreateTripP1 location={destination} />}
        </div>
    );
};

export default PlanTrip;