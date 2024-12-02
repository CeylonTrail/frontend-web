import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBuilding,
  faExclamationTriangle,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import SidebarComponentAdmin from "./SidebarComponentAdmin";
import Header from "../../components/header";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import ReactApexChart from "react-apexcharts";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import {load_dashboard} from "../../API/admin";
import defaultPicture from "../../assets/img/picskel.png"

const Admin = () => {

  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await load_dashboard();
        setDashboardData(response.data);
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      }
    };
    fetchData();
  }, []);

  // Display a loading message while data is being fetched
  if (!dashboardData) {
    return <div>Loading...</div>;
  }

  const {
    totalUsers,
    totalTravellers,
    recentUsers,
    totalBusinessProfiles,
    recentBusinessProfiles,
    totalReports,
    recentReports,
    totalRevenue,
    recentRevenue,
    subscriptionChartData,
    pendingBusinessProfiles,
    recentSubscribers,
  } = dashboardData;

  console.log(totalRevenue)

 const chartOptions = {
   series: [
     {
       name: "Subscription Count",
       data: subscriptionChartData.count,
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
     categories: subscriptionChartData.time,
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

  const columns = [
    {
      name: "Name",
      selector: (row) => row.serviceName
    },
    {
      name: "Type",
      selector: (row) => row.serviceType
    },
    {
      name: "Status",
      selector: (row) => (
        <span style={{ color: getStatusColor(row.status) }}>
          {row.verificationStatus}
        </span>
      )
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "APPROVED":
        return "green";
      case "REJECTED":
        return "red";
      case "PENDING":
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



  return (
    <div className="flex flex-col min-h-screen">
      <Header type="admin" profilePic={HotelProfileImg} function={() => {}} />
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

              {/* Subscription Card */}
              <div
                className="group bg-white rounded-lg shadow-md p-4 flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-[#6DA5C0] hover:text-white hover:shadow-lg"
                onClick={() => console.log("Inquiries Clicked")}
              >
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-600">
                    Revenue
                  </h3>
                  <p className="text-3xl font-bold text-left">
                    {totalRevenue}
                  </p>
                  <p className="text-left text-sm text-gray-500 mt-1">
                    <span className="text-lg font-semibold">
                      {recentRevenue}
                    </span>{" "}
                    <span className="ml-1 text-400">New</span>
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faDollarSign}
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
                Subscription Count for Last 12 months
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
                  Pending Business Profiles
                </h2>
                <DataTable
                  columns={columns}
                  data={pendingBusinessProfiles}
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
                series={[(totalTravellers)/totalUsers, ((totalUsers - totalTravellers)*100)/totalUsers]}
                type="pie"
                height={200}
              />
            </div>

            {/* Data Table Section */}
            <div className="bg-white rounded-lg shadow-lg p-4 flex-1 h-64 overflow-hidden">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Recent Subscriptions
              </h2>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {recentSubscribers.map((subscriber) => (
                  <div
                  className="flex items-center space-x-2 p-2 rounded-lg shadow-sm border border-[#0F969C] bg-white hover:shadow-md transition-shadow duration-200"
                  >
                  <img
                    src={subscriber.profilePictureUrl || defaultPicture}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-[#0F969C] transition-transform duration-200 transform hover:scale-110"
                  />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">
                      {subscriber.serviceName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {subscriber.serviceType}
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
