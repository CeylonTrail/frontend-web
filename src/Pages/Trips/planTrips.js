import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideNav from '../../components/TripsSideNav';
import PlanTrip from '../../components/planTrip';
import Header from '../../components/header';
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
                <PlanTrip />
            </div>
        </div>
    );
};


