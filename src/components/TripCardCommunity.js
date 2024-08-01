import React from 'react';
import Profile from '../assets/img/Profile.svg';
import share from '../assets/img/shareArrow.svg';
import edit from '../assets/img/edit_pen.svg';
import deleteb from '../assets/img/fillDelete.svg';

const TripCard = ({trips}) => {
    

    return (
        <div className="w-full flex flex-col items-center  px-10">
            {trips.map((trip, index) => (
                <div key={index} className="bg-[#f8f8f8] p-4 rounded-3xl shadow border-slate-800 w-full flex flex-col items-center mb-4">
                    <div className="flex flex-row items-start justify-between space-x-4 w-full mb-4">
                        <div className="flex flex-row justify-between gap-4">
                            <img
                                src={Profile}
                                alt="Profile"
                                className="w-12 h-12 rounded-full"
                            />
                            <div className="flex flex-col">
                                <h2 className="text-lg font-semibold">{trip.title}</h2>
                                <span className="text-gray-500">{trip.days} days</span>
                            </div>
                        </div>
                        <div className="ml-auto flex space-x-2">
                            <button className="text-blue-500">
                                <img src={share} alt="share" />
                            </button>
                            <button className="text-primary">
                                <img src={edit} alt="edit" />
                            </button>
                            <button className="text-blue-500">
                                <img src={deleteb} alt="delete" />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full mt-4 md:mt-0">
                        <ul className="flex-1 space-y-2 border-r border-gray-300 pr-4">
                            {trip.places.map((place, i) => (
                                <li key={i} className="flex items-center">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>{place}
                                </li>
                            ))}
                        </ul>
                        <div className="flex-1 pl-4">
                            <p>{trip.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TripCard;
