import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SidebarComponentMP = ({ pic }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (category) => {
    switch (category) {
      case "accommodation":
        navigate("/marketplace#accommodation"); // Scroll to accommodation section
        break;
      case "restaurant":
        navigate("/marketplace#restaurant"); // Scroll to restaurant section
        break;
      case "equipment":
        navigate("/marketplace#equipment-rental"); // Scroll to equipment rental section
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
    <div className="bg-white p-4 rounded shadow-md h-full">
      {/* Profile Picture */}
      {pic && (
        <img
          src={pic}
          alt="Profile"
          className="w-full h-24 object-cover rounded mb-4"
        />
      )}

      <div className="flex flex-col items-center">
        {/* Search Bar */}
        <div className="w-full mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Categories */}
        <div className="w-full mb-4">
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <ul className="flex flex-col space-y-2">
            <li>
              <button
                onClick={() => handleCategoryClick("accommodation")}
                className={`w-full p-2 rounded text-left hover:bg-gray-200 ${
                  isSavedItemsPage ? "bg-blue-200" : ""
                }`}
              >
                Accommodation
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("restaurant")}
                className={`w-full p-2 rounded text-left hover:bg-gray-200 ${
                  isSavedItemsPage ? "bg-blue-200" : ""
                }`}
              >
                Restaurant
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("equipment")}
                className={`w-full p-2 rounded text-left hover:bg-gray-200 ${
                  isSavedItemsPage ? "bg-blue-200" : ""
                }`}
              >
                Equipment Rental
              </button>
            </li>
          </ul>
        </div>

        {/* Saved Items */}
        <div className="w-full">
          <h3
            className={`text-lg font-semibold mb-2 cursor-pointer ${
              isSavedItemsPage ? "text-blue-600" : ""
            }`}
            onClick={handleSavedItemsClick}
          >
            Saved Items
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponentMP;
