import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import Profile from '../../assets/img/picskel.png';
import CurrentTrip from '../../components/CurrentTrip';
import TripDashboard from '../../components/TripDashboard';
import PlanTrip from '../../components/planTrip';
import SavedTrips from '../../components/savedTrips';

const Trip = () => {
    const [isDashboardActive, setDashboardActive]=useState(true);
    const [isPlanTripActive,setPlanTripActive]=useState(false);
    const [isCurrentTripActive,setCurrentTripActive]=useState(false);
    const [isSavedTripActive,setSavedTripActive]=useState(false);
    const [navlink, setNavlink] = useState('');
    const navigate = useNavigate();

    const handleProfileClick = () => {
        window.location.href = "/profile";
    }


    const handleDashboardClick=()=>{
        setDashboardActive(true);
        setCurrentTripActive(false);
        setPlanTripActive(false);
        setSavedTripActive(false);
    }
    const handlePlanTripClick=()=>{
        setDashboardActive(false);
        setCurrentTripActive(false);
        setPlanTripActive(true);
        setSavedTripActive(false);
    }
    const handleCurrentTripClick=()=>{
        setDashboardActive(false);
        setCurrentTripActive(true);
        setPlanTripActive(false);
        setSavedTripActive(false);
    }
    const handleSavedTripClick=()=>{
        setDashboardActive(false);
        setCurrentTripActive(false);
        setPlanTripActive(false);
        setSavedTripActive(true);
    }

    return (
        <div className="flex flex-col">
            <Header type={"traveller"} profilePic={Profile} funtion={handleProfileClick} />
            
            <div className="flex-1 flex flex-row mt-20 ">

                {/* Side navigation for trip Tab */}
                <div className="fixed rounded shadow z-40 top-20 left-1.5 w-full bottom-1.5 p-6 bg-white space-y-8 overflow-auto max-w-xs">
                <nav>
                    <ul>
                        <li className={` ${isDashboardActive ? 'bg-secondary rounded-xl' : ''}`}>
                            <a className={`flex items-center ${isDashboardActive ? 'text-white' : 'text-black'} hover:text-blue-600 py-5 pl-2`} onClick={handleDashboardClick}>
                                <span className="material-symbols-outlined">home</span>
                                Dashboard
                            </a>
                        </li>
                        <li className={` ${isPlanTripActive ? 'bg-secondary rounded-xl' : ''}`}>
                            <a  className={`flex items-center ${isPlanTripActive ? 'text-white' : 'text-black'} hover:text-blue-600 py-5 pl-2`} onClick={handlePlanTripClick}>
                                <span className="material-symbols-outlined">book</span>
                                Plan Trip
                            </a>
                        </li>
                        <li className={` ${isCurrentTripActive ? 'bg-secondary rounded-xl' : ''}`}>
                            <a  className={`flex items-center ${isCurrentTripActive ? 'text-white' : 'text-black'} hover:text-blue-600 py-5 pl-2`} onClick={handleCurrentTripClick}>
                                <span className="material-symbols-outlined">timer</span>
                                Current Trip
                            </a>
                        </li>
                        <li className={` ${isSavedTripActive ? 'bg-secondary rounded-xl' : ''}`}>
                            <a className={`flex items-center ${isSavedTripActive ? 'text-white' : 'text-black'} hover:text-blue-600 py-5 pl-2`} onClick={handleSavedTripClick}>
                                <span className="material-symbols-outlined">bookmark</span>
                                Saved Trips
                            </a>
                        </li>
                        {/* <li className={` ${active === 'Favorite Places' ? 'bg-secondary rounded-xl' : ''}`}>
                            <a href="/favorite_places" className={`flex items-center ${active === 'Favorite Places' ? 'text-white' : 'text-black'} hover:text-blue-600 py-5 pl-2`} onClick={(e) => handleNavClick('Favorite Places', '/favorite_places', e)}>
                                <span className="material-symbols-outlined">favorite</span>
                                Favorite Places
                            </a>
                        </li> */}
                    </ul>
                </nav>
                <div className="bottom-3 fixed flex justify-center w-64">
                    <p className="text-xs font-thin">© 2024 UCSC Undergraduates</p>
                </div>
                </div>
                
                {/* DashBoard */}
                {isDashboardActive && <TripDashboard/>}

                {/* PlanTrip */}
                {isPlanTripActive && <PlanTrip/>}

                {/* Current trip */}
                {isCurrentTripActive && <CurrentTrip/>}

                {/* Saved Trip */}
                {isSavedTripActive && <SavedTrips/>}
            </div>
        </div>
        
    );
};

export default Trip;
