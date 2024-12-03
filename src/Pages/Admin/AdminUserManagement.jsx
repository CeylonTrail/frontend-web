import React, { useState, useEffect } from "react";
import SidebarComponentAdmin from "./SidebarComponentAdmin";
import Header from "../../components/header";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import {load_travellers, load_sps, delete_sp, delete_traveller} from "../../API/admin";
import Swal from "sweetalert2";


const Admin = () => {

  const navigate = useNavigate();

  const columns1 = [
    {
      name: "Full Name",
      selector: (row) => `${row.firstname} ${row.lastname}`
    },
    {
      name: "Username",
      selector: (row) => row.username
    },
    {
      name: "Email",
      selector: (row) => row.email
    },
    {
      name: "Created Date",
      selector: (row) => row.createdAt,
      right: true,
    },
    {
      name: "Account Status",
      selector: (row) => (
        <span
          style={{
            color: row.accountStatus ? "green" : "red",
          }}
        >
          {row.accountStatus ? "Activated" : "Not Activated"}
        </span>
      )
    },
    {
      name: "Action",
      cell: (row) => (
        <button
        onClick={() => {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to undo this action!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              handleDeleteTraveller(row.userId);
              Swal.fire("Deleted!", "The traveller has been deleted.", "success");
            }
          });
        }}
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
      selector: (row) => row.serviceName
    },
    {
      name: "Service Type",
      selector: (row) => row.serviceType
    },
    {
      name: "Username",
      selector: (row) => row.username
    },
    {
      name: "Created Date",
      selector: (row) => row.createdAt,
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
      )
    },
    {
      name: "Verification Status",
      selector: (row) => (
        <span
          style={{
            color:
              row.verificationStatus === "APPROVED"
                ? "green"
                : row.verificationStatus === "PENDING"
                ? "orange"
                : row.verificationStatus === "REJECTED"
                ? "red" : "black"
          }}
        >
          {row.verificationStatus}
        </span>
      )
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleView(row.spId)}
            className="hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faEye} className="text-blue-500 mr-4" />
          </button>
          <button
        onClick={() => {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to undo this action!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              handleDeleteSP(row.userId);
              Swal.fire("Deleted!", "Service Provider has been deleted.", "success");
            }
          });
        }}
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
    cells: { style: { padding: "10px" } }
  };

  const handleView = (id) => {
    navigate(`/admin-usermgt-sp/${id}`);
  };

  const handleDeleteTraveller = (id) => {
    try {
      const response = delete_traveller(id);
      if (response.status === "success") {
        alert(response.message)
        fetchTravellers()
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error("Error deleting travellers:", error);
    }
  };

  const handleDeleteSP = (id) => {
    try {
      const response = delete_sp(id);
      if (response.status === "success") {
        alert(response.message)
        fetchServiceProviders()
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error("Error deleting sp:", error);
    }
  };

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");

  const fetchTravellers = async () => {
    try {
      const response = await load_travellers();
      if (response.status === "success") {
        setData1(response.data.travellers);
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error("Error fetching travellers data:", error);
    }
  };
  
  const fetchServiceProviders = async () => {
    try {
      const response = await load_sps();
      if (response.status === "success") {
        setData2(response.data.sps);
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error("Error fetching service providers data:", error);
    }
  };
  

  useEffect(() => {
    fetchTravellers();
  }, []);
  
  useEffect(() => {
    fetchServiceProviders();
  }, []);



  const filteredData1 = data1.filter((item) =>
    [item.firstname, item.lastname, item.username, item.email]
      .join(" ")
      .toLowerCase()
      .includes(search1.toLowerCase())
  );

  const filteredData2 = data2.filter((item) =>
    [item.serviceName, item.serviceType, item.username]
      .join(" ")
      .toLowerCase()
      .includes(search2.toLowerCase())
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
              paginationPerPage={5}
              paginationRowsPerPageOptions={[5, 10, 15, 20]}
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
              paginationPerPage={5}
              paginationRowsPerPageOptions={[5, 10, 15, 20]}
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
