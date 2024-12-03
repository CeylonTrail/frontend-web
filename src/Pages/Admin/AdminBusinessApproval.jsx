import React, { useState, useEffect } from "react";
import SidebarComponentAdmin from "./SidebarComponentAdmin";
import Header from "../../components/header";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { load_pending_sps } from "../../API/admin";

const AdminBusinessApproval = () => {

  const navigate = useNavigate();

  const columns = [
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
      name: "Owner's Name",
      selector: (row) => `${row.firstname} ${row.lastname}`,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Created On",
      selector: (row) => row.createdAt,
      sortable: true
    },
    {
      name: "Account Status",
      selector: (row) => (
        <span
          style={{
            color:
              row.accountStatus === true
                ? "green"
                : "red",
            fontWeight: "bold",
          }}
        >
          {row.accountStatus === true
                ? "Activated"
                : "Not Activated"}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-4 items-center">
          <button
            onClick={() => handleView(row.spId)}
            className="hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faEye} className="text-blue-500 mr-4" />
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

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchPendingSPs = async () => {
    try {
      const response = await load_pending_sps();

      if (response.status === 'success') 
        setData(response.data.sps);
      else if (response.status === 'unauthorized'){
        localStorage.clear()
        navigate('/login')
      } else 
        console.error(response.message);

    } catch (error) {
      console.error("Error fetching pending sps data:", error);
    }
  };
  
  useEffect(() => {
    fetchPendingSPs();
  });
  

  const filteredData = data.filter((item) =>
    [item.firstname, item.lastname, item.serviceName, item.email, item.serviceType]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleView = (id) => {
    navigate(`/admin-businessappview/${id}`);
  };


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
              <h2 className="text-xl font-semibold">Pending Verification Approvals</h2>
              <div className="w-[300px] relative">
                <input
                  type="text"
                  placeholder="Search..."
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
              paginationPerPage={10}
              paginationRowsPerPageOptions={[10, 15, 20, 25]}
              responsive
              style={{ height: "400px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBusinessApproval;
