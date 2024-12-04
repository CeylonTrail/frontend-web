import React, { useState } from "react"; // Import useState
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faUtensils,
  faToolbox,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import bottomImageMP from "../../assets/img/SideBarMP.png"; // Import the image

const SidebarComponentMP = ({ pic, onCategoryChange }) => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("all"); // State to track selected category

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Update selected category
    onCategoryChange(category);
  };

  return (
    <div className="fixed rounded-xl shadow-lg top-20 left-1.5 bottom-1.5 p-6 space-y-8 overflow-auto w-full md:w-[16%] bg-white h-[87.5vh] border border-[#6DA5C0]">
      {pic && (
        <img
          src={pic}
          alt="Profile"
          className="w-full h-24 object-cover rounded-lg mb-4 shadow-md"
        />
      )}
      <div className="flex flex-col items-center">
        <div className="w-full mb-4">
          <h3
            className={`text-lg font-semibold mb-2 cursor-pointer hover:bg-[#6DA5C0] hover:text-white p-2 rounded-lg transition duration-200 ease-in-out flex items-center ${
              selectedCategory === "all" ? "bg-[#6DA5C0] text-white" : ""
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
                  selectedCategory === "accommodation"
                    ? "bg-[#6DA5C0] text-white"
                    : ""
                }`}
              >
                <FontAwesomeIcon icon={faHotel} className="mr-2" />
                Accommodation
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("restaurant")}
                className={`w-full p-2 rounded-lg text-left hover:bg-[#6DA5C0] hover:text-white flex items-center transition duration-200 ease-in-out ${
                  selectedCategory === "restaurant"
                    ? "bg-[#6DA5C0] text-white"
                    : ""
                }`}
              >
                <FontAwesomeIcon icon={faUtensils} className="mr-2" />
                Restaurant
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("equipment")}
                className={`w-full p-2 rounded-lg text-left hover:bg-[#6DA5C0] hover:text-white flex items-center transition duration-200 ease-in-out ${
                  selectedCategory === "equipment"
                    ? "bg-[#6DA5C0] text-white"
                    : ""
                }`}
              >
                <FontAwesomeIcon icon={faToolbox} className="mr-2" />
                Equipment Rental
              </button>
            </li>
          </ul>
        </div>
      </div>
      <img
        src={bottomImageMP} // Use the imported image directly
        alt="Bottom Decorative"
        className="w-full object-cover mt-auto rounded-lg"
      />
    </div>
  );
};

export default SidebarComponentMP;
