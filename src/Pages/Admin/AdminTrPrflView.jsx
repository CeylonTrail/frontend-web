import React from "react";
import { PrimaryButton } from "../../components/Button";
import "../../assets/styles/SetUpMarketPlace.css";
import { useNavigate } from "react-router-dom";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import Header from "../../components/header.js";

const AdminTrPrflView = () => {
  const navigate = useNavigate();
  // Dummy data
  const dummyData = {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe123",
    email: "john.doe@example.com",
    createdOn: "2024-01-01",
  };

  return (
    <>
      <Header
        type="serviceprovider"
        profilePic={HotelProfileImg}
        funtion={() => {}}
      />
      <div className="relative flex items-center justify-center h-[87.5vh]">
        <div className="w-full lg:w-2/3 bg-white p-5 rounded-xl shadow-lg border-2 border-[#6DA5C0] max-w-3xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-4">
              <strong>Traveller Info</strong>
            </h2>
          </div>

          <form action="#" method="POST" className="space-y-6">
            {/* Marketplace Info */}
            <div className="border-t border-gray-300 pt-4">
              {/* First Name */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="first-name"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  First Name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={dummyData.firstName}
                />
              </div>

              {/* Last Name */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="last-name"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={dummyData.lastName}
                />
              </div>

              {/* Username */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="username"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={dummyData.username}
                />
              </div>

              {/* Email */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="email"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={dummyData.email}
                />
              </div>

              {/* Created On */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="created-on"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Created On
                </label>
                <input
                  id="created-on"
                  name="created-on"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={dummyData.createdOn}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 mt-2">
              <PrimaryButton
                name="Back"
                action={() => navigate("/user-mgt")} // Redirects to /user-mgt
                isActive={true}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminTrPrflView;
