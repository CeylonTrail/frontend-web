import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MarketPlaceBackgroundImg from "../../assets/img/shop_cover.png";
import HotelCardImg from "../../assets/img/hotel-card.png";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import DeluxeRoomImg from "../../assets/img/deluxeroom.png";
import PremiumRoomImg from "../../assets/img/premiumroom.png";
import SuitRoomImg from "../../assets/img/suitroom.png";
import ExecutiveRoomImg from "../../assets/img/executiveroom.png";
import PlusImg from "../../assets/img/plus.png";
import { PrimaryButton } from "../../components/Button.js";
import Modal from "./HotelModal.jsx"; // Import Modal
import BoostModal from "../SP common/BoostModal.jsx"; // Import BoostModal
import HotelCard from "./HotelCard.jsx";
import EditHotelModal from "./EditHotelModal.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import "../../assets/styles/form.css"; 
import Header from "../../components/header.js";
import { get_sp_profile, remove_ad, set_active_ad, set_inactive_ad } from "../../API/sp.js";
import Loading from "../loading.js";
import Swal from 'sweetalert2'; // Import SweetAlert2

const SpHotelProfileView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const cardsPerPage = 4;
  const navigate = useNavigate();
  const [isBoostModalOpen, setIsBoostModalOpen] = useState(false); // State to control boost modal visibility
  const [selectedCard, setSelectedCard] = useState(null); // State to track the selected card for boosting
  const [isEditHotelModalOpen, setIsEditHotelModalOpen] = useState(false); // State to control edit modal visibility


  const handleAddListingClick = () => {
    if (data.verificationStatus === "PENDING") {
      Swal.fire({
        icon: 'warning',
        title: 'Account Not Verified',
        text: 'Your account is not verified yet. Please wait until your account is verified!',
        confirmButtonText: 'OK'
      });
    } else if (data.verificationStatus === "REJECTED") {
      // Display a SweetAlert when max ad count is reached
      Swal.fire({
        icon: 'warning',
        title: 'Your Account is Rejected',
        text: 'Your account is rejected. Please contact the admin for more information!',
        confirmButtonText: 'OK'
      });
    } else if (data.publishedAddCount >= data.maxAddCount) {
      Swal.fire({
        icon: 'warning',
        title: 'Max Advertisements Count Reached',
        text: 'You have reached the maximum number of advertisements allowed. Please subscribe to add more!',
        confirmButtonText: 'OK'
      });
    } else {
      setIsModalOpen(true);
    }
  };
  

  const handleSubscribeClick = () => {
    navigate("/subscription-plan");
  };

  const editProfileClicked = () => {
    navigate(`/edit-market/${data.serviceProviderId}`);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
    fetchProfile();
  };

  const handleBoostClick = (id) => {
    setSelectedCard(id);
    setIsBoostModalOpen(true);
  };

  const handleCloseBoostModal = () => {
    setSelectedCard(null);
    setIsBoostModalOpen(false);
  };

  const handleEditListingClick = (id) => {
    setSelectedCard(id);
    setIsEditHotelModalOpen(true);
  };

  const handleCloseEditHotelModal = () => {
    setSelectedCard(null);
    setIsEditHotelModalOpen(false);
  };

  const handleSetInactiveClick = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to set this advertisement as inactive?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, set it inactive!",
    });
  
    if (result.isConfirmed) {
      try {
        const response = await set_inactive_ad(id);
        if (response.status === "success") {
          Swal.fire("Set Inactive!", "The advertisement is now inactive.", "success");
          fetchProfile();
        } else {
          Swal.fire("Error", "Failed to set the advertisement as inactive.", "error");
        }
      } catch (error) {
        Swal.fire("Error", "Something went wrong.", "error");
        console.error(error);
      }
    }
  };
  
  const handleSetActiveClick = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to set this advertisement as active?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, set it active!",
    });
  
    if (result.isConfirmed) {
      try {
        const response = await set_active_ad(id);
        if (response.status === "success") {
          Swal.fire("Set Active!", "The advertisement is now active.", "success");
          fetchProfile();
        } else {
          Swal.fire("Error", "Failed to set the advertisement as active.", "error");
        }
      } catch (error) {
        Swal.fire("Error", "Something went wrong.", "error");
        console.error(error);
      }
    }
  };
  
  const handleRemoveClick = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove this advertisement? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    });
  
    if (result.isConfirmed) {
      try {
        const response = await remove_ad(id);
        if (response.status === "success") {
          Swal.fire("Removed!", "The advertisement has been removed.", "success");
        } else {
          Swal.fire("Error", "Failed to remove the advertisement.", "error");
        }
      } catch (error) {
        Swal.fire("Error", "Something went wrong.", "error");
        console.error(error);
      }
    }
  };

   const handleRedirect = (event) => {
     event.preventDefault();
     navigate("/chat");
   };

    const [data, setData] = useState(null);
  
    const fetchProfile = async () => {
      try {
        const response = await get_sp_profile();
  
        console.log(response);
        if (response.status === 'success') {
          setData(response.data);
          
        } else if (response.status === 'unauthorized') {
          localStorage.clear();
          navigate('/login');
        } else {
          console.error(response.message);
        }
  
      } catch (error) {
        console.error("Error fetching pending sps data:", error);
      }
    };
  
    useEffect(() => {
      fetchProfile();
    }, []);
  
    // Display a loading message while data is being fetched
    if (!data) {
      return <Loading />;
    }
  
    const rooms = data.ads;

    console.log(data);


  // // Calculate the current cards to display
  // const indexOfLastCard = currentPage * cardsPerPage;
  // const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  // const currentCards = rooms.slice(indexOfFirstCard, indexOfLastCard);

  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(rooms.length / cardsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  const handleSeeReviewsClick = () => {
    navigate("/sp-view-review"); // Navigate to the /sp-review page
  };


  return (
    <>
      <Header
        type="serviceprovider"
        profilePic={data.profilePictureUrl || HotelProfileImg}
        funtion={() => {}}
      />
      <div className="relative mt-20 fixed right-2 overflow-auto h-[87.5vh] ">
        {/* White Background Box */}
        <div className="relative bg-white w-[1250px] mx-auto">
          <div className="flex justify-center">
            <img
              style={{ width: "1250px", height: "350px" }}
              className="object-cover object-top"
              src={data.coverPictureUrl || MarketPlaceBackgroundImg}
              alt="Cover"
            />
          </div>
          <div className="relative flex justify-center items-center -mt-24">
            <div
              className="relative w-40 h-40 border-4 border-white rounded-full overflow-hidden"
              style={{
                right: "450px",
              }}
            >
              <img
                className="object-cover object-center w-full h-full"
                src={data.profilePictureUrl || HotelProfileImg}
                alt="Hotel Profile"
              />
            </div>
            <div
              className="absolute"
              style={{ top: "7rem", right: "3.7rem" }}
            >
              <div className="flex space-x-4">
                <PrimaryButton
                  name="Edit Profile"
                  action={editProfileClicked}
                  isActive={true}
                />
                <PrimaryButton
                  name="Subscribe"
                  action={handleSubscribeClick}
                  isActive={false}
                />
              </div>
            </div>
          </div>
          <div
            className="border border-[#0F969C] p-4 rounded-lg  mt-10 flex flex-col lg:flex-row justify-center items-center bg-white mt-3 w-[1200px] mx-auto"
            style={{
              boxShadow:
                "0 7px 12px -3px rgba(15, 150, 156, 0.35), 0 -7px 12px -3px rgba(15, 150, 156, 0.35), 7px 0 12px -3px rgba(15, 150, 156, 0.35), -7px 0 12px -3px rgba(15, 150, 156, 0.35)",
            }}
          >
            {/* Text Section */}
            <div className="lg:w-1/2 pr-8 lg:pl-0">
              <div
                className="text-4xl font-semibold"
                style={{ fontWeight: "400", fontSize: "40px" }}
              >
                {data.serviceName}
              </div>
              <div
                className="text-xl font-light italic mt-2"
                style={{ fontSize: "20px", fontWeight: "300" }}
              >
                {data.description}
              </div>
              <div
                className="text-lg font-light mt-2"
                style={{ fontSize: "18px", fontWeight: "300" }}
              ></div>
              <div className="flex items-center mt-2">
                <svg
                  className="w-4 h-4 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: "#FFD700" }}
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: "#FFD700" }}
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: "#FFD700" }}
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: "#FFD700" }}
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: "#D3D3D3" }}
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <div className="flex items-center mt-1">
                  <a
                    href="#!" // Dummy href for the example
                    onClick={handleSeeReviewsClick} // Function for navigation
                    style={{
                      fontSize: "1.05rem",
                      padding: "0.5rem 1rem",
                      color: "#0f969c", // Text color
                      textDecoration: "none", // Remove underline
                      borderRadius: "0.25rem", // Rounded corners
                      display: "inline-block", // Makes the link behave like a button
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "background-color 0.3s, transform 0.2s",
                    }}
                  >
                    See reviews
                  </a>
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="lg:w-1/2 flex flex-wrap gap-8 mt-8 lg:mt-0">
              <div className="flex-1 text-center border-r-2 border-[#0F969C] pr-12 py-6">
                <div className="font-heading text-[2.6rem] font-semibold lg:text-4xl xl:text-4xl">
                  {data.publishedAddCount}
                </div>
                <p className="text-sm font-medium uppercase tracking-widest lg:text-base">
                  Advertisement
                </p>
              </div>
              <div className="flex-1 text-center border-r-2 border-[#0F969C] pr-12 py-6">
                <div className="font-heading text-[2.6rem] font-semibold lg:text-4xl xl:text-4xl">
                  145
                </div>
                <p className="text-sm font-medium uppercase tracking-widest lg:text-base">
                  Followers
                </p>
              </div>
              <div className="flex-1 text-center py-6">
                <div className="font-heading text-[2.6rem] font-semibold lg:text-4xl xl:text-4xl">
                  150
                </div>
                <p className="text-sm font-medium uppercase tracking-widest lg:text-base">
                  Following
                </p>
              </div>
            </div>
          </div>

          {/* Card Section */}
          <div className="p-1 flex flex-col items-center gap-2 mt-12">
            <div
              className="mb-4 flex items-center cursor-pointer px-4 py-2 text-2xl text-black font-bold rounded-full transition-transform duration-300 transform hover:scale-105"
              onClick={handleAddListingClick} // Open modal on click
            >
              <img
                style={{ width: "30px", height: "30px" }}
                className="mr-2"
                src={PlusImg}
                alt="plus icon"
              />
              Add Advertisement
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {rooms.map((ad) => (
                <HotelCard
                  ad={ad}
                  handleBoostClick={handleBoostClick}
                  handleEditListingClick={handleEditListingClick}
                  handleSetInactiveClick={handleSetInactiveClick}
                  handleSetActiveClick={handleSetActiveClick}
                  handleRemoveClick={handleRemoveClick}
                />
              ))}
            </div>
          </div>

          <div className="sp-own-view-floating-button">
            <a
              href="#!" // Set href to a dummy value
              aria-label="Contact via Facebook Messenger"
              onClick={handleRedirect} // Attach click handler for navigation
            >
              <FontAwesomeIcon
                icon={faFacebookMessenger}
                size="2x"
                color="#0F969C"
              />{" "}
            </a>
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
        />
        <BoostModal
          isOpen={isBoostModalOpen}
          onRequestClose={handleCloseBoostModal}
          id = {selectedCard}
        />
        <EditHotelModal
          isOpen={isEditHotelModalOpen}
          onRequestClose={handleCloseEditHotelModal}
          id = {selectedCard}
        />
      </div>
    </>
  );
};

export default SpHotelProfileView;
