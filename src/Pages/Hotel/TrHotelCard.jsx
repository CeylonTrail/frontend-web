import React from "react";
import { PrimaryButton } from "../../components/Button.js";

const TrHotelCard = ({
  card,
  room,
  // handleBoostClick,
  handleSeeMoreClick,
}) => {
  return (
    <div
      className="relative flex-shrink-0 m-6 overflow-hidden rounded-lg shadow-lg border-2 border-[#0F969C] group transition-transform duration-300 transform hover:scale-105"
      style={{ width: "250px", height: "330px" }}
    >
      <div className="relative w-full h-full">
        <img
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          src={room.src}
          alt=""
        />
        <div
          className="absolute bottom-8 left-0 w-full bg-[#0F969C] text-white text-left py-1 flex justify-between items-center px-4 transition-opacity duration-300 group-hover:opacity-0"
          style={{ zIndex: 5 }}
        >
          <div className="text-sm">
            <p className="font-bold text-lg mb-1">{room.type}</p>
            <p>{room.price}</p>
          </div>
          <div className="flex items-center text-sm">
            <p>⭐ {room.rating}</p>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 p-4">
          <div className="flex flex-col items-center gap-y-2">
            {/* <PrimaryButton
              name="Boost"
              action={() => handleBoostClick(card)}
              isActive={false}
            /> */}
            <PrimaryButton
              name="See more"
              action={() => handleSeeMoreClick(card)}
              isActive={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrHotelCard;
