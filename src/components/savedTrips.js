import React from 'react';
import vectorPlace1 from '../assets/img/vectorPlace1.jpeg';
import vectorPlace2 from '../assets/img/vectorPlace2.jpeg';
import vectorPlace3 from '../assets/img/vectorPlace3.jpg';
import vectorPlace4 from '../assets/img/vectorPlace4.jpg';

const ContentSection = () => {
    return (
        <div className="w-[77%] fixed right-2 bg-white rounded p-6 overflow-auto h-[87.5vh]">
            {/* <div className="mb-8">
                <h1 className="text-3xl font-bold">Trips</h1>
            </div> */}

            <div>
                <h2 className="text-2xl font-semibold mb-4">Drafts</h2>
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <TripCard title="Nuwara Eliya Trip" duration="3 day" image={vectorPlace2} />
                    <TripCard title="Kandy Trip" duration="3 day" image={vectorPlace3} />
                    <TripCard title="Jaffna Trip" duration="3 day" image={vectorPlace1} />
                </div>

                <h2 className="text-2xl font-semibold mb-4">Saved Trips</h2>
                <div className="grid grid-cols-3 gap-4 mb-8 ">
                    <TripCard title="Tangalle Trip" duration="3 day" image={vectorPlace1} />
                    <TripCard title="Thalpe Trip" duration="3 day" image={vectorPlace4} />
                    <TripCard title="Hapugala Trip" duration="3 day" image={vectorPlace2} />


                </div>
{/* 
                <h2 className="text-2xl font-semibold mb-4">Your Trips</h2>
                <div className="grid grid-cols-3 gap-4">
                    <TripCard title="Ella Trip" duration="3 day" image={vectorPlace4} />
                    <TripCard title="Madakalapuwa Trip" duration="3 day" image={vectorPlace3} />
                    <TripCard title="Kaluthara Trip" duration="3 day" image={vectorPlace1} />
                </div> */}
            </div>
        </div>
    );
};

const TripCard = ({ title, duration, image }) => {
    return (
        <div className="border rounded-lg p-4 flex flex-col items-center">
            <div className="w-80 h-48 bg-gray-200 mb-4 flex items-center justify-start">
                {/* <span className="material-icons text-gray-500">image</span> */}
                <img src={image} className='w-full h-full' />
            </div>
            <h3 className="text-lg font-semibold w-full">{title}</h3>
            <p className="text-gray-500 w-full">{duration}</p>
        </div>
    );
};

export default ContentSection;
