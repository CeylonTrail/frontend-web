import React, { useState, useEffect } from "react";
import { PrimaryButton } from "../../components/Button.js";
import "../../assets/styles/SetUpMarketPlace.css";
import { useNavigate, useParams } from "react-router-dom";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import Header from "../../components/header.js";
import SidebarComponentAdmin from "./SidebarComponentAdmin";
import { get_sp } from "../../API/admin.js";

const AdminSpPrflView = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/admin-usermgt");
  };

  const [data, setData] = useState([]);
  const [ownerName, setOwnerName] = useState("")

  const fetchSP = async () => {
    try {
      const response = await get_sp(id);

      if (response.status === 'success') {
        setData(response.data);
        setOwnerName(response.data.firstname + " " + response.data.lastname)
      } else if (response.status === 'unauthorized'){
        localStorage.clear()
        navigate('/login')
      } else 
        console.error(response.message);

    } catch (error) {
      console.error("Error fetching sp data:", error);
    }
  };
  
  useEffect(() => {
    fetchSP();
  }, []);

  return (
    <>
      <Header type="admin" profilePic={HotelProfileImg} funtion={() => {}} />
      <div className="relative flex items-center justify-center h-[87.5vh]">
        <SidebarComponentAdmin />
        <div className="w-full lg:w-2/3 bg-white p-5 rounded-xl shadow-lg border-2 border-[#6DA5C0] max-w-3xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-4">
              <strong>Service Provider Info</strong>
            </h2>
          </div>

          <form action="#" method="POST" className="space-y-6">
            {/* Service Provider Info */}
            <div className="border-t border-gray-300 pt-4">
              {/* Name */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="name"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Service Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={data.serviceName}
                />
              </div>

              {/* Type */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="type"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Service Type
                </label>
                <input
                  id="type"
                  name="type"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={data.serviceType}
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
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={data.username}
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
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={data.email}
                />
              </div>

              {/* Owner's Name */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="owner-name"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Owner's Name
                </label>
                <input
                  id="owner-name"
                  name="owner-name"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={ownerName}
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
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={data.createdAt}
                />
              </div>

              {/* Account Status */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="account-status"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Account Status
                </label>
                <input
                  id="account-status"
                  name="account-status"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={data.accountStatus}
                />
              </div>
            {/* Status */}
            <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="status"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Setup Status
                </label>
                <input
                  id="status"
                  name="status"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={data.setupStatus}
                />
              </div>

            <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="status"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Verification Status
                </label>
                <input
                  id="status"
                  name="status"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={data.verificationStatus}
                />
              </div>
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="status"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Verification Status Updated On
                </label>
                <input
                  id="status"
                  name="status"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={data.verificationStatusUpdatedAt}
                />
              </div>
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="status"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Description
                </label>
                <input
                  id="status"
                  name="status"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={data.description}
                />
              </div>
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="status"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Contact Number
                </label>
                <input
                  id="status"
                  name="status"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={data.contactNumber}
                />
              </div>
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="status"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Address
                </label>
                <input
                  id="status"
                  name="status"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={data.address}
                />
              </div>
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="status"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Subscription Plan
                </label>
                <input
                  id="status"
                  name="status"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={data.subscriptionPlan}
                />
              </div>
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="status"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Subscription Plan Purchase On
                </label>
                <input
                  id="status"
                  name="status"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={data.subscriptionPurchaseDate}
                />
              </div>
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="status"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Subscription Plan Expiry On
                </label>
                <input
                  id="status"
                  name="status"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={data.subscriptionExpiryDate}
                />
              </div>
            


          </div>
            {/* Submit Button */}
            <div className="flex justify-end space-x-4 mt-2">
              <PrimaryButton
                name="Back"
                action={handleBackClick} // Calls updated function
                isActive={true}
              />
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminSpPrflView;
