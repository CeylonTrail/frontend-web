import React, { useState } from "react";
import SidebarComponentAdmin from "./SidebarComponentAdmin";
import Header from "../../components/header";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye} from "@fortawesome/free-solid-svg-icons";

const AdminBusinessApproval = () => {
  const data = [
    {
      id: 1,
      firstName: "David",
      lastName: "Smith",
      email: "david.smith@example.com",
      ownerName: "Owner 1",
      createdOn: "2023-10-01",
      status: "approved",
    },
    {
      id: 2,
      firstName: "Laura",
      lastName: "Jones",
      email: "laura.jones@example.com",
      ownerName: "Owner 2",
      createdOn: "2023-10-05",
      status: "pending",
    },
    {
      id: 3,
      firstName: "Mark",
      lastName: "Taylor",
      email: "mark.taylor@example.com",
      ownerName: "Owner 3",
      createdOn: "2023-10-10",
      status: "rejected",
    },
    {
      id: 4,
      firstName: "Emily",
      lastName: "Davis",
      email: "emily.davis@example.com",
      ownerName: "Owner 4",
      createdOn: "2023-10-15",
      status: "approved",
    },
  ];

  const columns = [
    {
      name: "Business Name",
      selector: (row) => `${row.firstName} ${row.lastName}`,
      sortable: true,
    },
    {
      name: "Type",
      selector: () => "Service Provider", // Placeholder for type
      sortable: true,
    },

    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Owner's Name",
      selector: (row) => row.ownerName,
      sortable: true,
    },
    {
      name: "Created On",
      selector: (row) => row.createdOn,
      sortable: true,
      right: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <span
          style={{
            color:
              row.status === "approved"
                ? "green"
                : row.status === "rejected"
                ? "red"
                : "orange",
            fontWeight: "bold",
          }}
        >
          {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-4 items-center">
          <a href={`/admin-spprflview/${row.id}`} className="text-[#6DA5C0]">
            <FontAwesomeIcon icon={faEye} className="text-[#6DA5C0]" />{" "}
          </a>
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

  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    [item.firstName, item.lastName, item.username, item.email]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
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
          <div className="my-6 p-4 bg-white rounded-lg shadow-md h-[87.5vh]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Business Approvals</h2>
              <div className="w-[300px] relative">
                <input
                  type="text"
                  placeholder="Search providers..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full p-2 border rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-[#6DA5C0] border-[#6DA5C0]"
                />
                <span className="absolute left-4 top-2 text-[#6DA5C0]">🔍</span>
              </div>
            </div>
            <DataTable
              columns={columns}
              data={filteredData}
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

export default AdminBusinessApproval;
