import React from "react";
import Profile from "../assets/img/picskel.png";
import { capitalizeWords } from "../Functions/FormatName";

const Analytics = () => {
  // Set initial PostCount for demonstration purposes
  if (!localStorage.getItem("PostCount")) {
    localStorage.setItem("PostCount", 18);
  }

  // Retrieve data from localStorage with fallbacks
  const userName = capitalizeWords(localStorage.getItem("userName") || "Guest User");
  const profilePicture = localStorage.getItem("profilePictureUrl") || Profile;
  const postCount = localStorage.getItem("PostCount") || 0;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-sm">
      <div className="flex items-center mb-4">
        {/* Profile Picture */}
        <img src={profilePicture} className="w-12 h-12 rounded-full" alt="Profile" />
        <div className="ml-4">
          {/* User Name */}
          <h2 className="font-semibold">{userName}</h2>
          {/* Analytics */}
          <div className="text-gray-500 flex text-center">
            <div className="border-r px-4 flex-1">
              <p className="font-bold">{postCount}</p>
              <p className="text-sm">Posts</p>
            </div>
            <div className="border-r px-4 flex-1">
              <p className="font-bold">5</p>
              <p className="text-sm">Followers</p>
            </div>
            <div className="px-4 flex-1">
              <p className="font-bold">3</p>
              <p className="text-sm">Following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
