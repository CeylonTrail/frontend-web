import React, { useState } from "react";
import SidebarComponentAdmin from "./SidebarComponentAdmin";
import Header from "../../components/header";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEye } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  const data1 = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      createdOn: "2023-10-01",
      isActive: true, // Boolean value for account status
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      username: "janesmith",
      email: "jane.smith@example.com",
      createdOn: "2023-10-05",
      isActive: false,
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      username: "alicej",
      email: "alice.johnson@example.com",
      createdOn: "2023-10-10",
      isActive: true,
    },
    {
      id: 4,
      firstName: "Bob",
      lastName: "Brown",
      username: "bobb",
      email: "bob.brown@example.com",
      createdOn: "2023-10-15",
      isActive: false,
    },
  ];

  const data2 = [
    {
      id: 1,
      serviceName: "Cleaning Service",
      serviceType: "Housekeeping",
      username: "davidsmith",
      createdOn: "2023-10-01",
      isActive: true, // Boolean value for account status
      verificationStatus: "Verified", // Verification status
    },
    {
      id: 2,
      serviceName: "Catering Service",
      serviceType: "Food & Beverages",
      username: "lauraj",
      createdOn: "2023-10-05",
      isActive: false,
      verificationStatus: "Pending",
    },
    {
      id: 3,
      serviceName: "Transportation Service",
      serviceType: "Travel",
      username: "markt",
      createdOn: "2023-10-10",
      isActive: true,
      verificationStatus: "Rejected",
    },
    {
      id: 4,
      serviceName: "Event Planning",
      serviceType: "Events",
      username: "emilyd",
      createdOn: "2023-10-15",
      isActive: false,
      verificationStatus: "Verified",
    },
  ];

  const columns1 = [
    {
      name: "Full Name",
      selector: (row) => `${row.firstName} ${row.lastName}`,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Created Date",
      selector: (row) => row.createdOn,
      sortable: true,
      right: true,
    },
    {
      name: "Account Status",
      selector: (row) => (
        <span
          style={{
            color: row.isActive ? "green" : "red",
          }}
        >
          {row.isActive ? "Activated" : "Not Activated"}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          onClick={() => alert(`Deleting user: ${row.username}`)}
          className="hover:text-red-700"
        >
          <FontAwesomeIcon icon={faTrashAlt} className="text-red-500" />
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const columns2 = [
    {
      name: "Service Name",
      selector: (row) => row.serviceName,
      sortable: true,
    },
    {
      name: "Service Type",
      selector: (row) => row.serviceType,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Created Date",
      selector: (row) => row.createdOn,
      sortable: true,
      right: true,
    },
    {
      name: "Account Status",
      selector: (row) => (
        <span
          style={{
            color: row.isActive ? "green" : "red",
          }}
        >
          {row.isActive ? "Activated" : "Not Activated"}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Verification Status",
      selector: (row) => (
        <span
          style={{
            color:
              row.verificationStatus === "Verified"
                ? "green"
                : row.verificationStatus === "Pending"
                ? "orange"
                : "red",
          }}
        >
          {row.verificationStatus}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex space-x-2">
          <button
            onClick={() => alert(`Viewing service provider: ${row.username}`)}
            className="hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faEye} className="text-blue-500 mr-4" />
          </button>
          <button
            onClick={() => alert(`Deleting service provider: ${row.username}`)}
            className="hover:text-red-700"
          >
            <FontAwesomeIcon icon={faTrashAlt} className="text-red-500" />
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
        fontSize: "16px",
        fontWeight: "600",
        textTransform: "uppercase",
        padding: "10px",
        color: "#ffffff",
      },
    },
    rows: {
      style: {
        minHeight: "40px",
        "&:nth-child(even)": { backgroundColor: "#EBF3F6" },
        "&:hover": { backgroundColor: "#E5F4FB" },
      },
    },
    cells: { style: { padding: "10px" } },
    pagination: { style: { borderTop: "1px solid #e9ecef" } },
  };

  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");

  const filteredData1 = data1.filter((item) =>
    [item.firstName, item.lastName, item.username, item.email]
      .join(" ")
      .toLowerCase()
      .includes(search1.toLowerCase())
  );

  const filteredData2 = data2.filter((item) =>
    item.username.toLowerCase().includes(search2.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header type="admin" profilePic={HotelProfileImg} function={() => {}} />
      <div className="flex flex-1 mt-8">
        <SidebarComponentAdmin />
        <div className="w-[80%] fixed right-2 p-6 overflow-auto h-[94.5vh]">
          {/* First Table */}
          <div className="my-6 p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">All Travellers</h2>
              <div className="w-[300px] relative">
                <input
                  type="text"
                  placeholder="Search travellers..."
                  value={search1}
                  onChange={(e) => setSearch1(e.target.value)}
                  className="w-full p-2 border rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-[#6DA5C0] border-[#6DA5C0]"
                />
                <span className="absolute left-4 top-2 text-[#6DA5C0]">🔍</span>
              </div>
            </div>
            <DataTable
              columns={columns1}
              data={filteredData1}
              customStyles={customStyles}
              pagination
              responsive
              style={{ height: "400px" }} // Adjust height as needed
            />
          </div>

          {/* Second Table */}
          <div className="my-6 p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">All Service Providers</h2>
              <div className="w-[300px] relative">
                <input
                  type="text"
                  placeholder="Search service providers..."
                  value={search2}
                  onChange={(e) => setSearch2(e.target.value)}
                  className="w-full p-2 border rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-[#6DA5C0] border-[#6DA5C0]"
                />
                <span className="absolute left-4 top-2 text-[#6DA5C0]">🔍</span>
              </div>
            </div>
            <DataTable
              columns={columns2}
              data={filteredData2}
              customStyles={customStyles}
              pagination
              responsive
              style={{ height: "400px" }} // Adjust height as needed
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
