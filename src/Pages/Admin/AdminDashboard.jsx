import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBuilding,
  faExclamationTriangle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import SidebarComponentAdmin from "./SidebarComponentAdmin";
import Header from "../../components/header";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import ReactApexChart from "react-apexcharts";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const Admin = () => {
  const totalUsers = 100;
  const recentUsers = 10;
  const totalBusinessProfiles = 50;
  const recentBusinessProfiles = 5;
  const totalReports = 20;
  const recentReports = 2;
  const totalInquiries = 30;
  const recentInquiries = 7;

  // Chart configuration
 const chartOptions = {
   series: [
     {
       name: "Subscriptions",
       data: [50, 40, 300, 320, 500, 350, 200, 230, 500, 100, 50, 400],
     },
   ],
   chart: {
     type: "bar",
     height: 300, // Decreased height, adjust this value as needed
     toolbar: {
       show: false,
     },
   },
   title: {
     show: false,
   },
   dataLabels: {
     enabled: false,
   },
   colors: ["#020617"],
   plotOptions: {
     bar: {
       columnWidth: "10%",
       borderRadius: 2,
     },
   },
   xaxis: {
     axisTicks: {
       show: false,
     },
     axisBorder: {
       show: false,
     },
     labels: {
       style: {
         colors: "#616161",
         fontSize: "10px",
         fontFamily: "inherit",
         fontWeight: 400,
       },
     },
     categories: [
       "Jan",
       "Feb",
       "Mar",
       "Apr",
       "May",
       "Jun",
       "Jul",
       "Aug",
       "Sep",
       "Oct",
       "Nov",
       "Dec",
     ],
   },
   yaxis: {
     labels: {
       style: {
         colors: "#616161",
         fontSize: "10px",
         fontFamily: "inherit",
         fontWeight: 400,
       },
     },
   },
   grid: {
     show: true,
     borderColor: "#dddddd",
     strokeDashArray: 5,
     xaxis: {
       lines: {
         show: true,
       },
     },
     padding: {
       top: 5,
       right: 20,
     },
   },
   fill: {
     opacity: 0.8,
   },
   tooltip: {
     theme: "dark",
   },
 };



  // Data and columns for the DataTable
  const data = [
    { id: 1, name: "Profile A", status: "Approved", date: "2024-09-01" },
    { id: 2, name: "Profile B", status: "Pending", date: "2024-09-02" },
    { id: 3, name: "Profile C", status: "Rejected", date: "2024-09-03" },
  ];

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <span style={{ color: getStatusColor(row.status) }}>
          {row.status}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "green";
      case "Rejected":
        return "red";
      case "Pending":
        return "orange";
      default:
        return "black"; // default color
    }
  };

  const customStyles = {
    header: {
      style: {
        fontSize: "22px",
        fontWeight: "bold",
        textAlign: "left",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#6DA5C0",
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderTopColor: "#e9ecef",
      },
    },
    headCells: {
      style: {
        fontSize: "16px",
        fontWeight: "600",
        textTransform: "uppercase",
        paddingLeft: "16px",
        paddingRight: "16px",
        color: "#ffffff",
      },
    },
    cells: {
      style: {
        paddingLeft: "16px",
        paddingRight: "16px",
      },
    },
    rows: {
      style: {
        minHeight: "50px",
        "&:nth-child(even)": {
          backgroundColor: "#EBF3F6",
        },
        "&:hover": {
          backgroundColor: "#E5F4FB",
        },
      },
    },
  };


  const subscriptions = [
    {
      id: 1,
      name: "Shop Name 1",
      type: "Shop Type 1",
      profilePic: HotelProfileImg,
    },
    {
      id: 2,
      name: "Shop Name 2",
      type: "Shop Type 2",
      profilePic: HotelProfileImg,
    },
    {
      id: 3,
      name: "Shop Name 3",
      type: "Shop Type 3",
      profilePic: HotelProfileImg,
    },
    {
      id: 4,
      name: "Shop Name 4",
      type: "Shop Type 4",
      profilePic: HotelProfileImg,
    },
    {
      id: 5,
      name: "Shop Name 5",
      type: "Shop Type 5",
      profilePic: HotelProfileImg,
    },
    {
      id: 6,
      name: "Shop Name 6",
      type: "Shop Type 6",
      profilePic: HotelProfileImg,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        type="admin"
        profilePic={HotelProfileImg}
        function={() => {}}
      />
      <div className="flex flex-1 mt-14">
        <SidebarComponentAdmin />
        <div className="w-[80%] fixed right-2 p-6 overflow-auto h-[90.5vh]">
          {/* Content Area with Gradient Background */}
          <div className="bg-[#0F969C] rounded-lg p-6 h-[14.5vh]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Total Users Card */}
              <div
                className="group bg-white rounded-lg shadow-md p-4 flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-[#6DA5C0] hover:text-white hover:shadow-lg"
                onClick={() => console.log("Total Users Clicked")}
              >
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-600">
                    Total Users
                  </h3>
                  <p className="text-3xl font-bold text-left">{totalUsers}</p>
                  <p className="text-left text-sm text-gray-500 mt-1">
                    <span className="text-lg font-semibold">{recentUsers}</span>{" "}
                    <span className="ml-1 text-400">New</span>
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faUsers}
                  size="2x"
                  className="text-[#6DA5C0] group-hover:text-white"
                />
              </div>

              {/* Total Business Profiles Card */}
              <div
                className="group bg-white rounded-lg shadow-md p-4 flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-[#6DA5C0] hover:text-white hover:shadow-lg"
                onClick={() => console.log("Business Profiles Clicked")}
              >
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-600">
                    Total Business Profiles
                  </h3>
                  <p className="text-3xl font-bold text-left">
                    {totalBusinessProfiles}
                  </p>
                  <p className="text-left text-sm text-gray-500 mt-1">
                    <span className="text-lg font-semibold">
                      {recentBusinessProfiles}
                    </span>{" "}
                    <span className="ml-1 text-400">New</span>
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faBuilding}
                  size="2x"
                  className="text-[#6DA5C0] group-hover:text-white"
                />
              </div>

              {/* Reports Card */}
              <div
                className="group bg-white rounded-lg shadow-md p-4 flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-[#6DA5C0] hover:text-white hover:shadow-lg"
                onClick={() => console.log("Reports Clicked")}
              >
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-600">
                    Reports
                  </h3>
                  <p className="text-3xl font-bold text-left">{totalReports}</p>
                  <p className="text-left text-sm text-gray-500 mt-1">
                    <span className="text-lg font-semibold">
                      {recentReports}
                    </span>{" "}
                    <span className="ml-1 text-400">New</span>
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  size="2x"
                  className="text-[#6DA5C0] group-hover:text-white"
                />
              </div>

              {/* Inquiries Card */}
              <div
                className="group bg-white rounded-lg shadow-md p-4 flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-[#6DA5C0] hover:text-white hover:shadow-lg"
                onClick={() => console.log("Inquiries Clicked")}
              >
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-600">
                    Subscriptions
                  </h3>
                  <p className="text-3xl font-bold text-left">
                    {totalInquiries}
                  </p>
                  <p className="text-left text-sm text-gray-500 mt-1">
                    <span className="text-lg font-semibold">
                      {recentInquiries}
                    </span>{" "}
                    <span className="ml-1 text-400">New</span>
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="text-[#6DA5C0] group-hover:text-white"
                />
              </div>
            </div>
          </div>

          {/* Flex Container for Chart and Data Table */}
          <div className="flex flex-row gap-6 mt-20">
            {/* Chart Section */}
            <div className="bg-white rounded-lg shadow-md p-6 flex-1 h-64">
              <h2 className="text-xl font-semibold text-gray-700">
                Subscriptions
              </h2>
              <ReactApexChart
                options={chartOptions}
                series={chartOptions.series}
                type="bar"
                height={180}
              />
            </div>

            {/* Data Table Section */}
            <Link to="/admin-businessapp" className="block">
              <div className="bg-white rounded-lg shadow-md p-6 flex-1 h-64 cursor-pointer">
                <h2 className="text-xl font-semibold text-gray-700">
                  Business Profile Approvals
                </h2>
                <DataTable
                  columns={columns}
                  data={data}
                  customStyles={customStyles}
                />
              </div>
            </Link>
          </div>

          {/* Flex Container for Chart and Data Table */}
          <div className="flex flex-row gap-6 mt-10">
            {/* Pie Chart Section */}
            <div className="bg-white rounded-lg shadow-md p-6 flex-1 h-64">
              <h2 className="text-xl font-semibold text-gray-700">
                Total Users
              </h2>
              <ReactApexChart
                options={{
                  chart: {
                    type: "pie",
                  },
                  labels: ["Travelers", "Service Providers"],
                  colors: ["#0F969C", "#6DA5C0"],
                  legend: {
                    position: "bottom",
                  },
                }}
                series={[70, 30]} // Example: 70% Travelers, 30% Service Providers
                type="pie"
                height={200}
              />
            </div>

            {/* Data Table Section */}
            <div className="bg-white rounded-lg shadow-md p-4 flex-1 h-64 overflow-hidden">
              <h2 className="text-xl font-semibold text-gray-700">
                Recent Subscriptions
              </h2>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {subscriptions.map((subscription) => (
                  <div
                    key={subscription.id}
                    className="flex items-center space-x-2 p-2 rounded-lg shadow-sm border border-gray-200 bg-white"
                  >
                    <img
                      src={subscription.profilePic}
                      alt={`Subscriber ${subscription.id}`}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-xs">
                        {subscription.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {subscription.type}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
