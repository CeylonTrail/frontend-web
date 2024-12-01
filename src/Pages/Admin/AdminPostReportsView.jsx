import React, { useState } from "react";
import SidebarComponentAdmin from "./SidebarComponentAdmin";
import Header from "../../components/header";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import RemovePostModal from "../../components/RemovePostModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// Sample data for user reports
const reports = [
  {
    userName: "John Doe",
    profilePic: "https://via.placeholder.com/40",
    time: "2 hours ago",
    reason: "Inappropriate content",
  },
  {
    userName: "Jane Smith",
    profilePic: "https://via.placeholder.com/40",
    time: "1 hour ago",
    reason: "Spam",
  },
  {
    userName: "Alex Johnson",
    profilePic: "https://via.placeholder.com/40",
    time: "30 minutes ago",
    reason: "Harassment",
  },
];

const AdminPostReportsView = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const handleRemovePost = (report) => {
    console.log(`Post removed for report: ${report.userName}`);
    closeModal(); // Close modal after action
  };

  const handleResolveReport = (report) => {
    console.log(`Report resolved for: ${report.userName}`);
  };

  const openModal = (report) => {
    setSelectedReport(report);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedReport(null);
    setModalIsOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header type="admin" profilePic={HotelProfileImg} function={() => {}} />
      <div className="flex flex-1 mt-16">
        <SidebarComponentAdmin />
        <div className="flex w-full max-w-6xl mx-auto p-4 mr-12">
          {/* Post Section */}
          <div className="flex-1 max-w-lg bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/40" // Replace with user's profile picture
                alt="Post Author"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-2">
                <h3 className="font-semibold text-lg">Post Author Name</h3>
                <p className="text-gray-500 text-sm">Posted 2 hours ago</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4 text-base">
              Just had an amazing experience at the new restaurant downtown!
              Highly recommend their pasta.
            </p>
            <img
              src="https://via.placeholder.com/400" // Replace with an image relevant to the post
              alt="Post"
              className="w-full rounded-lg mb-4"
            />
            {/* Action Buttons within the post */}
            <div className="flex justify-end space-x-2">
              <button
                className="text-red-600 hover:text-red-800 flex items-center"
                onClick={() => openModal({ userName: "Post Author Name" })}
                aria-label="Remove Post"
              >
                <FontAwesomeIcon icon={faTrash} className="mr-1" />
                Remove Post
              </button>
              <button
                className="text-blue-600 hover:text-blue-800 flex items-center"
                onClick={() =>
                  handleResolveReport({ userName: "Post Author Name" })
                }
                aria-label="Resolve Report"
              >
                <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                Resolve
              </button>
            </div>
          </div>

          {/* Reports Section */}
          <div className="w-1/4 bg-white rounded-lg shadow-md p-4 ml-4">
            {" "}
            {/* Changed bg-gray-50 to bg-white */}
            <h4 className="font-semibold text-lg mb-2">Reports:</h4>
            {reports.map((report, index) => (
              <div
                key={index}
                className="flex items-center mb-2 p-2 hover:bg-gray-200 rounded"
              >
                <img
                  src={report.profilePic}
                  alt={`${report.userName}'s profile`}
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-2 flex-grow">
                  <h4 className="font-semibold">{report.userName}</h4>
                  <p className="text-gray-500 text-sm">{report.reason}</p>
                  <p className="text-gray-400 text-xs">{report.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for confirmation */}
      <RemovePostModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        handleRemovePost={handleRemovePost}
        selectedReport={selectedReport}
      />
    </div>
  );
};

export default AdminPostReportsView;
