import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faUtensils,
  faToolbox,
  faStar,
  faSearch,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

const SidebarComponentMP = ({ pic }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (category) => {
    switch (category) {
      case "accommodation":
        navigate("/marketplace#accommodation");
        break;
      case "restaurant":
        navigate("/marketplace#restaurant");
        break;
      case "equipment":
        navigate("/marketplace#equipment-rental");
        break;
      case "all":
        navigate("/marketplace");
        break;
      default:
        break;
    }
  };

  const handleSavedItemsClick = () => {
    navigate("/saved");
  };

  const isSavedItemsPage = location.pathname === "/saved";

  return (
    <div className="fixed rounded-xl shadow-lg top-20 left-1.5 bottom-1.5 p-6 space-y-8 overflow-auto w-full md:w-[16%] bg-white h-[87.5vh]">
      {pic && (
        <img
          src={pic}
          alt="Profile"
          className="w-full h-24 object-cover rounded-lg mb-4 shadow-md"
        />
      )}
      <div className="flex flex-col items-center">
        <div className="w-full mb-4 relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-[#6DA5C0] border-[#6DA5C0]"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#6DA5C0]"
          />
        </div>
        <div className="w-full mb-4">
          <h3
            className={`text-lg font-semibold mb-2 cursor-pointer hover:bg-[#6DA5C0] hover:text-white p-2 rounded-lg transition duration-200 ease-in-out flex items-center ${
              location.hash === "#all" ? "bg-[#6DA5C0] text-white" : ""
            }`}
            onClick={() => handleCategoryClick("all")}
          >
            <FontAwesomeIcon icon={faStar} className="mr-2" /> All
          </h3>
          <ul className="flex flex-col space-y-2">
            <li>
              <button
                onClick={() => handleCategoryClick("accommodation")}
                className={`w-full p-2 rounded-lg text-left hover:bg-[#6DA5C0] hover:text-white flex items-center transition duration-200 ease-in-out ${
                  location.hash === "#accommodation"
                    ? "bg-[#6DA5C0] text-white"
                    : ""
                }`}
              >
                <FontAwesomeIcon icon={faHotel} className="mr-2" />{" "}
                Accommodation
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("restaurant")}
                className={`w-full p-2 rounded-lg text-left hover:bg-[#6DA5C0] hover:text-white flex items-center transition duration-200 ease-in-out ${
                  location.hash === "#restaurant"
                    ? "bg-[#6DA5C0] text-white"
                    : ""
                }`}
              >
                <FontAwesomeIcon icon={faUtensils} className="mr-2" />{" "}
                Restaurant
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("equipment")}
                className={`w-full p-2 rounded-lg text-left hover:bg-[#6DA5C0] hover:text-white flex items-center transition duration-200 ease-in-out ${
                  location.hash === "#equipment-rental"
                    ? "bg-[#6DA5C0] text-white"
                    : ""
                }`}
              >
                <FontAwesomeIcon icon={faToolbox} className="mr-2" /> Equipment
                Rental
              </button>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h3
            className={`text-lg font-semibold mb-2 cursor-pointer flex items-center ${
              isSavedItemsPage ? "text-blue-600" : ""
            } hover:text-white hover:bg-[#6DA5C0] p-2 rounded-lg transition duration-200 ease-in-out`}
            onClick={handleSavedItemsClick}
          >
            <FontAwesomeIcon icon={faBookmark} className="mr-2" /> Saved Items
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponentMP;
