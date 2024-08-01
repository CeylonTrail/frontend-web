import React from 'react';
import LocationCard from './locationCard';

const PlanTrip = () => {
    return (
        <div className="w-[77%] fixed right-2 bg-white rounded p-6 overflow-auto h-[87.5vh] flex flex-row flex-1 gap-5">
            <div className="w-full ">
                <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                    <input
                        type="text"
                        placeholder="Search Places"
                        className="w-full p-2 mb-4 border rounded-md"
                    />
                    <LocationCard
                        image="/path/to/image"
                        title="Galle Fort"
                        rating="4.7"
                        reviews="16,157"
                    />
                    <LocationCard
                        image="/path/to/image"
                        title="Galle Fort"
                        rating="4.7"
                        reviews="16,157"
                    />
                    <LocationCard
                        image="/path/to/image"
                        title="Galle Fort"
                        rating="4.7"
                        reviews="16,157"
                    />
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62803.838266419204!2d79.88808353578547!3d6.037385293996556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17296c5c15dbd%3A0x3b6a8f52cd6bffda!2sGalle%20Fort!5e0!3m2!1sen!2slk!4v1627811468964!5m2!1sen!2slk"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Galle Map"
                    ></iframe>
                </div>
            </div>
            <div className="w-full ">
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-semibold mb-4">Your Plan</h2>
                    <div className="flex justify-between items-center mb-4">
                        <button className="text-blue-500 font-semibold">Day 1</button>
                        <button className="text-blue-500 font-semibold">Day 2</button>
                    </div>
                    <div className="flex-1 bg-gray-100 rounded-md p-4">
                        <p className="text-center text-gray-500">Add Event</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanTrip;
