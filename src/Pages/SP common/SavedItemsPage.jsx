import React from "react";
import SidebarComponentMP from "../SP common/SidebarComponentMP";
import MpContent from "../SP common/SavedItemsPageCompo";
import Header from "../../components/header";
import HotelProfileImg from "../../assets/img/hotel-profile.png";

// Main component
const SavedItemsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header
        type="serviceprovider"
        profilePic={HotelProfileImg}
        funtion={() => {}}
        className="fixed top-0 left-0 w-full z-30" // Fixed position, full width, high z-index
      />
      <div className="flex flex-1 mt-16">
        {" "}
        {/* mt-16 to push content below header */}
        <div className="w-1/8 fixed top-24 bottom-0 left-0 bg-white z-20">
          <SidebarComponentMP />
        </div>
        <div className="w-7/8 ml-[17%] p-4 flex-1 overflow-auto">
          <MpContent />
        </div>
      </div>
    </div>
  );
};

export default SavedItemsPage;
