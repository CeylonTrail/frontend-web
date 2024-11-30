import React, { useState } from "react";
import SidebarComponentAdmin from "./SidebarComponentAdmin";
import Header from "../../components/header";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import DataTable from "react-data-table-component";

const AdminSubscriptionList = () => {
  const data = [
    {
      id: 1,
      firstName: "David",
      lastName: "Smith",
      email: "david.smith@example.com",
      businessType: "Hotel",
      ownerName: "Alice Johnson",
      subscribePlan: "Gold",
      subscriptionDate: "2023-10-01",
    },
    {
      id: 2,
      firstName: "Laura",
      lastName: "Jones",
      email: "laura.jones@example.com",
      businessType: "Restaurant",
      ownerName: "Michael Brown",
      subscribePlan: "Silver",
      subscriptionDate: "2023-10-05",
    },
    {
      id: 3,
      firstName: "Mark",
      lastName: "Taylor",
      email: "mark.taylor@example.com",
      businessType: "Tour Agency",
      ownerName: "Emma White",
      subscribePlan: "Bronze",
      subscriptionDate: "2023-10-10",
    },
    {
      id: 4,
      firstName: "Emily",
      lastName: "Davis",
      email: "emily.davis@example.com",
      businessType: "Equipment Rental",
      ownerName: "James Wilson",
      subscribePlan: "Gold",
      subscriptionDate: "2023-10-15",
    },
  ];

  const columns = [
    {
      name: "Business Name",
      selector: (row) => `${row.firstName} ${row.lastName}`,
      sortable: true,
    },
    {
      name: "Business Type",
      selector: (row) => row.businessType,
      sortable: true,
    },
    {
      name: "Business Owner Name",
      selector: (row) => row.ownerName,
      sortable: true,
    },
    {
      name: "Subscribe Plan",
      selector: (row) => (
        <span
          style={{
            fontWeight: "bold",
            color:
              row.subscribePlan === "Gold"
                ? "#ffd700"
                : row.subscribePlan === "Silver"
                ? "#c0c0c0"
                : "#cd7f32",
          }}
        >
          {row.subscribePlan}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Subscription Date",
      selector: (row) => row.subscriptionDate,
      sortable: true,
      right: true,
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
    [
      item.firstName,
      item.lastName,
      item.email,
      item.businessType,
      item.subscribePlan,
      item.ownerName,
    ]
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
      <div className="flex flex-1 mt-14">
        <SidebarComponentAdmin />
        <div className="w-[80%] fixed right-2 p-6 overflow-auto h-[94.5vh]">
          {/* Section for Subscription Plans */}
          <div className="bg-white p-4 mb-6 rounded-lg shadow-md flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
              Manage Subscription Plans
            </h3>
            <a
              href="/admin-subscriptionplan"
              className="bg-[#6DA5C0] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#5B94B0] transition"
            >
              View Plans
            </a>
          </div>

          {/* Business Subscriptions Table */}
          <div className="my-6 p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">All Subscriptions</h2>
              <div className="w-[300px] relative">
                <input
                  type="text"
                  placeholder="Search subscriptions..."
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
              style={{ height: "400px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSubscriptionList;
