import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBriefcase,
  faChartBar,
  faClipboardCheck,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import bottomImage from "../../assets/img/admin.png"; // Import the image

const SidebarComponentAdmin = ({ pic }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (category) => {
    switch (category) {
      case "dashboard":
        navigate("/admin");
        break;
      case "user-management":
        navigate("/admin-usermgt");
        break;
      case "business-management":
        navigate("/admin-businessapp");
        break;
      case "subscription-management":
        navigate("/admin-subscriptionlist");
        break;
      case "report-handling":
        navigate("/admin-post-reports");
        break;
      default:
        break;
    }
  };

  // Mapping categories to their routes for easy comparison
  const categoryRoutes = {
    dashboard: "/admin",
    "user-management": "/admin-usermgt",
    "business-management": "/admin-businessapp",
    "subscription-management": "/admin-subscriptionlist",
    "report-handling": "/admin-post-reports",
  };

  return (
    <div className="fixed rounded-xl shadow-lg top-20 left-1.5 bottom-1.5 p-6 space-y-8 overflow-auto w-full md:w-[20%] bg-white h-[87.5vh] border border-[#6DA5C0]">
      {pic && (
        <img
          src={pic}
          alt="Profile"
          className="w-full h-24 object-cover rounded-lg mb-4 shadow-md"
        />
      )}
      <div className="flex flex-col items-center">
        <div className="w-full mb-4 relative">
          {/* Uncomment for search functionality */}
          {/* <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-[#6DA5C0] border-[#6DA5C0]"
          /> */}
        </div>
        <div className="w-full mb-4">
          <ul className="flex flex-col space-y-2">
            {Object.entries(categoryRoutes).map(([category, route]) => (
              <li key={category}>
                <button
                  onClick={() => handleCategoryClick(category)}
                  className={`w-full p-2 rounded-lg text-left flex items-center transition duration-200 ease-in-out shadow-sm hover:shadow-lg transform hover:scale-105 ${
                    location.pathname === route ||
                    (category === "report-handling" &&
                      (location.pathname === "/admin-post-reports" ||
                        location.pathname === "/admin-post-reports-view"))
                      ? "bg-[#6DA5C0] text-white"
                      : "bg-white hover:bg-[#6DA5C0] hover:text-white"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={
                      {
                        dashboard: faTachometerAlt,
                        "user-management": faUser,
                        "business-management": faBriefcase,
                        "subscription-management": faChartBar,
                        "report-handling": faClipboardCheck,
                      }[category]
                    }
                    className="mr-2"
                  />
                  <span className="text-base font-medium">
                    {category
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Add the bottom image here */}
      <img
        src={bottomImage} // Use the imported image directly
        alt="Bottom Decorative"
        className="w-full object-cover mt-auto rounded-lg"
      />
    </div>
  );
};

export default SidebarComponentAdmin;
