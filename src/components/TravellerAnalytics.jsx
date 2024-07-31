import React from "react";
import Profile from "../assets/img/Profile.svg";

const Analytics = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm">
      <div className="flex items-center mb-4">
        <img src={Profile} className="w-12 h-12 rounded-full" alt="Profile" />
        <div className="ml-4">
          <h2 className="font-semibold">Travel Enthusiast 2</h2>
          <div className="text-gray-500 flex flex-row text-center ">
            <div className="border-r ">200 Posts</div>
            <div className="border-r m-y-2">200 Followers</div>
            <div className=" m-y-2">200 Following</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
