import React, { useState } from 'react';
import { SimpleInput, Email, DropdownInput } from './inputFields'; 
import planImage from '../assets/img/planTrip.svg';
import { PrimaryButton } from './Button';
import CreateTripP1 from './createTripP1';
import { set } from 'date-fns';

const PlanTrip = () => {
    const [destination, setDestination] = useState('');
    const [duration, setDuration] = useState(2); // Default value
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const [showContent, setShowContent] = useState("planTripForm");

    const handleDurationChange = (change) => {
        setDuration((prev) => Math.max(0, prev + change)); // Ensure duration doesn't go below 0
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowContent("createTripP1");
        console.log({
            destination,
            duration,
            email,
            description,
        });
    };

    return (
        <div className="w-[77%] fixed right-2 bg-white rounded p-6  h-[87.5vh] flex flex-row flex-1">
            {showContent=="planTripForm" && <>
                <img src={planImage} alt="Plan a trip" />
                <div className='flex flex-col w-full pt-5 px-10'>
                    <h1 className="text-2xl font-bold mb-6 text-center">Plan a New Trip</h1>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-gray-700 mb-2">Where to go :</label>
                            <SimpleInput
                                pholder="Destination"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                            />
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
                                <span className="text-gray-700 px-3  py-1 border-2 border-secondary">{duration} Days</span>
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
                            <label className="block text-gray-700 mb-2">Add Travel Buddies (Optional) :</label>
                            <Email
                                pholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
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
            </>}

            {showContent=="createTripP1" && <CreateTripP1 destination={destination} />}
            
           
        </div>
    );
};

export default PlanTrip;
