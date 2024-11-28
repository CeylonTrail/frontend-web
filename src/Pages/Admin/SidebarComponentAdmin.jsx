import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBriefcase,
  faChartBar,
  faClipboardCheck,
  faFileAlt,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

const SidebarComponentAdmin = ({ pic }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (category) => {
    switch (category) {
      case "dashboard":
        navigate("/admin/dashboard");
        break;
      case "user-management":
        navigate("/admin/user-management");
        break;
      case "business-management":
        navigate("/admin/business-management");
        break;
      case "revenue-management":
        navigate("/admin/revenue-management");
        break;
      case "content-moderation":
        navigate("/admin/content-moderation");
        break;
      case "analysis":
        navigate("/admin/analysis");
        break;
      default:
        break;
    }
  };

  return (
    <div className="fixed rounded-xl shadow-lg top-20 left-1.5 bottom-1.5 p-6 space-y-8 overflow-auto w-full md:w-[18%] bg-white h-[87.5vh]">
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
        </div>
        <div className="w-full mb-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <button
                onClick={() => handleCategoryClick("dashboard")}
                className="w-full p-2 rounded-lg text-left hover:bg-[#6DA5C0] hover:text-white flex items-center transition duration-200 ease-in-out"
              >
                <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />{" "}
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("user-management")}
                className="w-full p-2 rounded-lg text-left hover:bg-[#6DA5C0] hover:text-white flex items-center transition duration-200 ease-in-out"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" /> User
                Management
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("business-management")}
                className="w-full p-2 rounded-lg text-left hover:bg-[#6DA5C0] hover:text-white flex items-center transition duration-200 ease-in-out"
              >
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Business
                Management
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("revenue-management")}
                className="w-full p-2 rounded-lg text-left hover:bg-[#6DA5C0] hover:text-white flex items-center transition duration-200 ease-in-out"
              >
                <FontAwesomeIcon icon={faChartBar} className="mr-2" /> Revenue
                Management
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("content-moderation")}
                className="w-full p-2 rounded-lg text-left hover:bg-[#6DA5C0] hover:text-white flex items-center transition duration-200 ease-in-out"
              >
                <FontAwesomeIcon icon={faClipboardCheck} className="mr-2" />{" "}
                Content Moderation
              </button>
            </li>
            <li>
              <button
                onClick={() => handleCategoryClick("analysis")}
                className="w-full p-2 rounded-lg text-left hover:bg-[#6DA5C0] hover:text-white flex items-center transition duration-200 ease-in-out"
              >
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" /> Analysis
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponentAdmin;
