import React from "react";
import { PrimaryButton } from "../../components/Button.js";
import "../../assets/styles/SetUpMarketPlace.css";
import { useNavigate } from "react-router-dom";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import Header from "../../components/header.js";
import SidebarComponentAdmin from "./SidebarComponentAdmin";

const AdminBusinessApprovalView = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/admin-businessapp"); // Updated redirect path
  };

  // Dummy data for Service Provider Info
  const dummyData = {
    name: "Elite Travels",
    type: "Travel Agency",
    username: "elitetravels123",
    email: "contact@elitetravels.com",
    ownerName: "Alice Johnson",
    createdOn: "2023-12-15",
    document: "path/to/document.pdf", // Placeholder for the document path
  };

  // State for approval status
  const [approvalStatus, setApprovalStatus] = React.useState("pending");

  const handleStatusChange = (event) => {
    setApprovalStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for handling submission (e.g., save approval status to the backend)
    console.log(`Document status updated to: ${approvalStatus}`);
  };

  return (
    <>
      <Header type="admin" profilePic={HotelProfileImg} funtion={() => {}} />

      <div className="relative flex items-center justify-center h-[87.5vh]">
        <SidebarComponentAdmin />
        <div className="w-full lg:w-2/3 bg-white p-5 rounded-xl shadow-lg border-2 border-[#6DA5C0] max-w-3xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-4">
              <strong>Business Info</strong>
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
              {/* Name */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="name"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={dummyData.name}
                />
              </div>

              {/* Type */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="type"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Type
                </label>
                <input
                  id="type"
                  name="type"
                  type="text"
                  readOnly
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={dummyData.type}
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
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-[#E7E7E7] shadow-sm sm:text-xs"
                  defaultValue={dummyData.email}
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
                  defaultValue={dummyData.ownerName}
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
                  defaultValue={dummyData.createdOn}
                />
              </div>

              {/* Document Section */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="document"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Verification Document
                </label>
                <a
                  href={dummyData.document}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-blue-600 underline"
                >
                  View Document
                </a>
              </div>

              {/* Approval Status */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="approval-status"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Approval Status
                </label>
                <select
                  id="approval-status"
                  value={approvalStatus}
                  onChange={handleStatusChange}
                  className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 shadow-sm sm:text-xs"
                >
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                  <option value="pending">Pending</option>
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
