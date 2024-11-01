import React from "react";
import SidebarComponentMP from "./SidebarComponentMP";
import MpContent from "./MpContent";
import Header from "../../components/header";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import Profile from "../../assets/img/picskel.png";


// Main component
const MarketPlace = () => {
  return (
    <div className="flex flex-col">
      <Header type="public" profilePic={Profile} funtion={() => {}} />
      <div className="flex flex-1 mt-20">
        <SidebarComponentMP />
        <MpContent />
      </div>
    </div>
  );
};

export default MarketPlace;
