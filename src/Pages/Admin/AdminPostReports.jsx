import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SidebarComponentAdmin from "./SidebarComponentAdmin";
import Header from "../../components/header";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const AdminPostReports = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const data = [
    {
      id: 1,
      authorUsername: "david_smith",
      reportCount: 3,
      reportReasons: ["Spam", "Inappropriate Content", "Misleading"],
      status: "Post Removed", // Add status field
    },
    {
      id: 2,
      authorUsername: "laura_jones",
      reportCount: 1,
      reportReasons: ["Harassment"],
      status: "Resolved", // Add status field
    },
    {
      id: 3,
      authorUsername: "mark_taylor",
      reportCount: 2,
      reportReasons: ["Spam", "Fake News"],
      status: "Post Removed", // Add status field
    },
    {
      id: 4,
      authorUsername: "emily_davis",
      reportCount: 0,
      reportReasons: [],
      status: "Resolved", // Add status field
    },
  ];

  const columns = [
    {
      name: "Post ID",
      selector: (row) => row.id,
      sortable: true,
      width: "100px",
    },
    {
      name: "Author's Username",
      selector: (row) => row.authorUsername,
      sortable: true,
      width: "230px",
    },
    {
      name: "Report Count",
      selector: (row) => row.reportCount,
      sortable: true,
      right: true,
      width: "150px",
    },
    {
      name: "Status", // New Status column
      selector: (row) => row.status,
      sortable: true,
      right: true,
      width: "150px",
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-2 items-center">
          <button
            onClick={() => navigate(`/admin-post-reports-view/${row.id}`)} // Use navigate for redirection
            className="text-[#6DA5C0]"
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const customStyles = {
    headRow: {
      style: { backgroundColor: "#6DA5C0", borderTop: "1px solid #e9ecef" },
    },
    headCells: {
      style: {
        fontSize: "14px",
        fontWeight: "600",
        textTransform: "uppercase",
        padding: "8px",
        color: "#ffffff",
      },
    },
    rows: {
      style: {
        minHeight: "30px",
        "&:nth-child(even)": { backgroundColor: "#EBF3F6" },
        "&:hover": { backgroundColor: "#E5F4FB" },
      },
    },
    cells: { style: { padding: "8px" } },
    pagination: { style: { borderTop: "1px solid #e9ecef" } },
  };

  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    [item.authorUsername].join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        type="admin"
        profilePic={HotelProfileImg}
        function={() => {}}
      />
      <div className="flex flex-1 mt-8">
        <SidebarComponentAdmin />
        <div className="w-[80%] fixed right-2 p-6 overflow-auto">
          <div className="my-6 p-4 bg-white rounded-lg shadow-md overflow-auto h-[87.5vh]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-semibold">Post Reports</h2>
                <div className="relative ml-60">
                  <input
                    type="text"
                    placeholder="Search by username..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-2 border rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-[#6DA5C0] border-[#6DA5C0]"
                  />
                  <span className="absolute left-4 top-2 text-[#6DA5C0]">
                    🔍
                  </span>
                </div>
              </div>
            </div>

            <div style={{ width: "70%", margin: "10 auto" }}>
              <DataTable
                columns={columns}
                data={filteredData}
                customStyles={customStyles}
                pagination
                responsive
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPostReports;
