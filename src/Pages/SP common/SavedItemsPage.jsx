import React from "react";
import SidebarComponentMP from "../SP common/SidebarComponentMP";
import MpContent from "../SP common/SavedItemsPageCompo";
import Header from "../../components/header";
import HotelProfileImg from "../../assets/img/hotel-profile.png";

// Main component
const SavedItemsPage = () => {
  return (
    <div className="flex flex-col">
      <Header
        type="serviceprovider"
        profilePic={HotelProfileImg}
        funtion={() => {}}
      />
      <div className="flex-1 flex flex-row mt-14 ">
        <SidebarComponentMP />
        <MpContent />
        </div>
      </div>
  );
};

export default SavedItemsPage;
