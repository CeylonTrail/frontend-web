import React from "react";
import { PrimaryButton, SecondaryButton } from "./Button.js";

const EquipmentCard = ({
  card,
  equipment,
  handleBoostClick,
  handleEditEquipmentCardClick,
}) => {
  return (
    <div
      className="relative flex-shrink-0 m-6 overflow-hidden rounded-lg shadow-lg border-2 border-[#0F969C] group transition-transform duration-300 transform hover:scale-105"
      style={{ width: "250px", height: "280px" }}
    >
      <div className="relative w-full h-full">
        <img
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          src={equipment.src}
          alt=""
        />
        <div
          className="absolute top-5 left-0 w-full bg-[#0F969C] text-white text-left py-1 flex justify-between items-center px-4 transition-opacity duration-300 group-hover:opacity-0"
          style={{ zIndex: 5 }}
        >
          <div className="text-sm">
            <p className="font-bold text-lg mb-1">{equipment.type}</p>
            <p>{equipment.rent}</p>
          </div>
          <div className="flex items-center text-sm">
            <p>⭐ {equipment.rating}</p>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 p-4">
          <div className="flex flex-col items-center gap-y-2">
            <PrimaryButton
              name="Boost"
              action={() => handleBoostClick(card)}
              isActive={true}
            />
            <SecondaryButton
              name="Edit"
              action={() => handleEditEquipmentCardClick(card)}
              isActive={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;
