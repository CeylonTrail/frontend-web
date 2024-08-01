import React from 'react';

const LocationCard = ({ image, title, rating, reviews }) => {
    return (
        <div className="flex items-center bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="w-16 h-16 bg-gray-200 rounded-md mr-4">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="flex-1">
                <h3 className="font-semibold">{title}</h3>
                <div className="flex items-center">
                    <span className="text-yellow-500 mr-2">⭐️⭐️⭐️⭐️⭐️</span>
                    <span className="text-sm text-gray-500">{rating}</span>
                </div>
                <p className="text-sm text-gray-500">{reviews} reviews</p>
            </div>
            <button className="text-blue-500 font-semibold text-xl">+</button>
        </div>
    );
};

export default LocationCard;
