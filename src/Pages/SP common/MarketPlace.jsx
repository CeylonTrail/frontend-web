import React from "react";
import SidebarComponentMP from "../SP common/SidebarComponentMP";
import MpContent from "../SP common/MpContent";
import Header from "../../components/header";
import HotelProfileImg from "../../assets/img/hotel-profile.png";

// Main component
const MarketPlace = () => {
  return (
    <div className="flex flex-col">
      <Header
        type="traveller"
        profilePic={HotelProfileImg}
        funtion={() => {}}
      />
      <div className="flex flex-1 mt-20">
        <SidebarComponentMP />
        <MpContent />
        </div>
    </div>
  );
};

export default MarketPlace;
