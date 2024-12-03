import React from "react";
import { PrimaryButton } from "../../components/Button.js";

const HotelCard = ({
  ad,
  handleBoostClick,
  handleEditListingClick,
  handleSetInactiveClick,
  handleSetActiveClick,
  handleRemoveClick
}) => {
  return (
    <div
      className="relative flex-shrink-0 m-6 overflow-hidden rounded-lg shadow-lg border-2 border-[#0F969C] group transition-transform duration-300 transform hover:scale-105"
      style={{ width: "250px", height: "330px" }}
    >
      <div className="relative w-full h-full">
        {/* Active Status Indicator */}
        <div
          className={`absolute top-2 right-2 w-4 h-4 rounded-full`}
          style={{ zIndex: 10 }}
        >{ad.isActive === "YES" ? "🟢" : "🔴"}</div>
        <img
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          src={ad.images[0]}
          alt=""
        />
        <div
          className="absolute bottom-8 left-0 w-full bg-[#0F969C] text-white text-left py-1 flex justify-between items-center px-4 transition-opacity duration-300 group-hover:opacity-0"
          style={{ zIndex: 5 }}
        >
          <div className="text-sm">
            <p className="font-bold text-lg mb-1">{ad.title}</p>
            {ad.rateType === "HOUR" ? (
              <p>LKR {ad.rate}/Hour</p>
            ) : ad.rateType === "NIGHT" ? (
              <p>LKR {ad.rate}/Night</p>
            ) : ad.rateType === "DAY" ? (
              <p>LKR {ad.rate}/Day</p>
            ) : ad.rateType === "WEEK" ? (
              <p>LKR {ad.rate}/Week</p>
            ) : ad.rateType === "MONTH" ? (
              <p>LKR {ad.rate}/Month</p>
            ) : (
              <p>LKR {ad.rate}</p>
            )}
          </div>

        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 p-4">
          <div className="flex flex-col items-center gap-y-2">
          <PrimaryButton
              name="Boost"
              action={() => handleBoostClick(ad.id)}
              isActive={true}
            />
            <PrimaryButton
              name="Edit"
              action={() => handleEditListingClick(ad.id)}
              isActive={true}
            />
            {ad.isActive === "YES" ? (
              <PrimaryButton
                name="Set Inactive"
                action={() => handleSetInactiveClick(ad.id)}
                isActive={true}
              />
            ) : (
              <PrimaryButton
                name="Set Active"
                action={() => handleSetActiveClick(ad.id)}
                isActive={true}
              />
            )}
            <PrimaryButton
              name="Remove"
              action={() => handleRemoveClick(ad.id)}
              isActive={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
