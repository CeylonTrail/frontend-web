import React from 'react';
import Header from '../../components/header'; // Assuming you already have a Header component
import SideNav from '../../components/TripsSideNav';
import ContentSection from '../../components/TripDashboard';
import Profile from "../../assets/img/Profile.svg"

export default () => {

    const handleProfileClick = () => {
        window.location.href = "/profile";
    }
    
    return (
        <div className="flex flex-col">
            <Header type={"traveller"} profilePic={Profile} funtion={handleProfileClick} />
            
            <div className="flex-1 flex flex-row mt-20 ">
                <SideNav />
                <ContentSection />
            </div>
        </div>
    );
};


