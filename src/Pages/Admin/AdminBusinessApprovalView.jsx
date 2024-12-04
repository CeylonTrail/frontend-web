import React, { useState, useEffect } from "react";
import { PrimaryButton } from "../../components/Button.js";
import "../../assets/styles/SetUpMarketPlace.css";
import { useNavigate, useParams } from "react-router-dom";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import Header from "../../components/header.js";
import SidebarComponentAdmin from "./SidebarComponentAdmin";
import { get_verification_sp, update_verification_sp } from "../../API/admin.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faRefresh } from '@fortawesome/free-solid-svg-icons';

const AdminBusinessApprovalView = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/admin-businessapp");
  };


  const [data, setData] = useState([]);
  const [ownerName, setOwnerName] = useState("")

  const fetchSP = async () => {
    try {
      const response = await get_verification_sp(id);

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

  const [approvalStatus, setApprovalStatus] = React.useState("PENDING");

  const handleStatusChange = (e) => {
    setApprovalStatus(e.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!approvalStatus || approvalStatus === "SELECT_ONE") {
      alert("Please select a valid verification status!");
      return;
    }
  
    try {
      const response2 = await update_verification_sp(id, approvalStatus);
      if (response2.status === "success") {
        alert("Verification status updated successfully!");
        navigate("/admin-businessapp");
      } else if (response2.status === "unauthorized") {
        localStorage.clear();
        navigate("/login");
      } else {
        alert(`Error: ${response2.message}`);
      }
    } catch (error) {
      console.error(error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };
  

  return (
    <>
      <Header type="admin" profilePic={HotelProfileImg} funtion={() => {}} />

      <div className="relative flex items-center justify-center h-[87.5vh]">
        <SidebarComponentAdmin />
        <div className="w-full lg:w-2/3 bg-white p-5 rounded-xl shadow-lg border-2 border-[#6DA5C0] max-w-3xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-4">
              <strong>Service Provider Infomation</strong>
            </h2>
          </div>

          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Service Provider Info */}
            <div className="border-t border-gray-300 pt-4">

            <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="document"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900 flex items-center"
                >
                  <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-gray-700" />
                  Profile Picture
                </label>
                {data.profilePictureUrl === null ? (
                  <p className="flex-1 text-red-600 flex items-center gap-x-1">
                    No profile Picture Uploaded
                  </p>
                ) : (
                  <a
                    href={data.profilePictureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-blue-600 underline flex items-center gap-x-1"
                  >
                    View Profile Picture
                  </a>
                )}
              </div>
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="document"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900 flex items-center"
                >
                  <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-gray-700" />
                  Cover Picture
                </label>
                {data.coverPictureUrl === null ? (
                  <p className="flex-1 text-red-600 flex items-center gap-x-1">
                    No Cover Picture Uploaded
                  </p>
                ) : (
                  <a
                    href={data.coverPictureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-blue-600 underline flex items-center gap-x-1"
                  >
                    View Cover Picture
                  </a>
                )}
              </div>
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



              {/* Document Section */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="document"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900 flex items-center"
                >
                  <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-gray-700" />
                  Verification Document
                </label>
                  <a
                    href={data.verificationDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-blue-600 underline flex items-center gap-x-1"
                  >
                    View Document
                  </a>
              </div>
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="status"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Document Uploaded On
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
                  Current Verification Status
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

              {/* Approval Status */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="approval-status"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  <FontAwesomeIcon icon={faRefresh} className="mr-2 text-gray-700" />
                  Update to
                </label>
                <select
                  id="approval-status"
                  value={approvalStatus}
                  onChange={handleStatusChange}
                  className={`flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm sm:text-xs ${
                    approvalStatus === "APPROVED"
                      ? "bg-green-100 border-green-400"
                      : approvalStatus === "REJECTED"
                      ? "bg-red-100 border-red-400"
                      : approvalStatus === "PENDING"
                      ? "bg-orange-100 border-orange-400"
                      : "border-[#6DA5C0]"
                  }`}
                  required
                >
                  <option value="SELECT_ONE">SELECT ONE</option>
                  {data.verificationStatus !== "APPROVED" && (
                    <option value="APPROVED" style={{ color: "green" }}>APPROVED</option>
                  )}
                  {data.verificationStatus !== "REJECTED" && (
                    <option value="REJECTED" style={{ color: "red" }}>REJECTED</option>
                  )}
                  {data.verificationStatus !== "PENDING" && (
                    <option value="PENDING" style={{ color: "orange" }}>PENDING</option>
                  )}
                </select>


              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 mt-2">
              <PrimaryButton
                name="Back"
                action={handleBackClick} // Calls updated function
                isActive={true}
              />
              <PrimaryButton type="submit" name="Submit" isActive={false} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
        

export default AdminBusinessApprovalView;
