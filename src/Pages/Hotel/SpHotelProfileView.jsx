import React, { useState } from "react";
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

const SpHotelProfileView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const cardsPerPage = 4;
  const navigate = useNavigate();
  const [isBoostModalOpen, setIsBoostModalOpen] = useState(false); // State to control boost modal visibility
  const [selectedCard, setSelectedCard] = useState(null); // State to track the selected card for boosting
  const [isEditHotelModalOpen, setIsEditHotelModalOpen] = useState(false); // State to control edit modal visibility

  const handleAddListingClick = () => {
    console.log("Popup open");
    setIsModalOpen(true); // Open the modal when "ADD LISTING" is clicked
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    alert("Form Submitted");
    handleCloseModal(); // Close modal on form submission
  };

  const handleSubscribeClick = () => {
    navigate("/subscription-plan"); // Redirect to the subscription plan page
  };

  const editProfileClicked = () => {
    navigate("/edit-market");
    // Handle edit profile action
  };

  const handleBoostClick = (card) => {
    setSelectedCard(card);
    setIsBoostModalOpen(true);
  };

  const handleCloseBoostModal = () => {
    setSelectedCard(null);
    setIsBoostModalOpen(false);
  };

  const handleEditListingClick = (card) => {
    setSelectedCard(card);
    setIsEditHotelModalOpen(true);
  };

  const handleCloseEditHotelModal = () => {
    setSelectedCard(null);
    setIsEditHotelModalOpen(false);
  };
   const handleRedirect = (event) => {
     event.preventDefault();
     navigate("/chat");
   };

  const rooms = [
    {
      type: "Deluxe Rooms",
      price: "LKR 5000/night",
      rating: 4.7,
      src: DeluxeRoomImg,
    },
    {
      type: "Superior Rooms",
      price: "LKR 3500/night",
      rating: 5,
      src: PremiumRoomImg,
    },
    {
      type: "Executive Rooms",
      price: "LKR 6500/night",
      rating: 4.8,
      src: ExecutiveRoomImg,
    },
    {
      type: "Suits",
      price: "LKR 4000/night",
      rating: 4.4,
      src: SuitRoomImg,
    },
    {
      type: "Single Room 5",
      price: "LKR 350/night",
      rating: 4.5,
      src: HotelCardImg,
    },
    {
      type: "Single Room 6",
      price: "LKR 350/night",
      rating: 4.5,
      src: HotelCardImg,
    },
    {
      type: "Single Room 7",
      price: "LKR 350/night",
      rating: 4.5,
      src: HotelCardImg,
    },
    {
      type: "Single Room 8",
      price: "LKR 350/night",
      rating: 4.5,
      src: HotelCardImg,
    },
    {
      type: "Single Room 9",
      price: "LKR 350/night",
      rating: 4.5,
      src: HotelCardImg,
    },
    {
      type: "Single Room 10",
      price: "LKR 350/night",
      rating: 4.5,
      src: HotelCardImg,
    },
    {
      type: "Single Room 11",
      price: "LKR 350/night",
      rating: 4.5,
      src: HotelCardImg,
    },
    {
      type: "Single Room 12",
      price: "LKR 350/night",
      rating: 4.5,
      src: HotelCardImg,
    },
  ];

  // Calculate the current cards to display
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = rooms.slice(indexOfFirstCard, indexOfLastCard);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(rooms.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleSeeReviewsClick = () => {
    navigate("/sp-view-review"); // Navigate to the /sp-review page
  };


  return (
    <>
      <Header
        type="serviceprovider"
        profilePic={HotelProfileImg}
        funtion={() => {}}
      />
      <div className="relative max-w-full mx-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mb-0 rounded-lg text-gray-900 mt-24">
        {/* White Background Box */}
        <div className="absolute inset-0 flex justify-center items-center mt-20">
          <div
            className="absolute bg-white z-[-1]"
            style={{ width: "1250px", height: "104%" }}
          ></div>
        </div>

        <div className="relative">
          <div className="overflow-hidden flex justify-center mt-5 mb-5">
            <img
              style={{ width: "1250px", height: "350px" }}
              className="object-cover object-top"
              src={MarketPlaceBackgroundImg}
              alt="Mountain"
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
                src={HotelProfileImg}
                alt="Woman looking front"
              />
            </div>
            <div
              className="absolute"
              style={{ left: "1000px", top: "105px", right: "auto" }}
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
            className="border border-[#0F969C] p-4 rounded-lg mx-4 md:mx-24 lg:mx-40 mt-10 flex flex-col lg:flex-row justify-center items-center bg-white mt-3"
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
                Blue Hills Residencies
              </div>
              <div
                className="text-xl font-light italic mt-2"
                style={{ fontSize: "20px", fontWeight: "300" }}
              >
                Good in quality
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
                  100
                </div>
                <p className="text-sm font-medium uppercase tracking-widest lg:text-base">
                  Listings
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
              ADD LISTING
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {currentCards.map((room, index) => (
                <HotelCard
                  key={indexOfFirstCard + index}
                  index={indexOfFirstCard + index}
                  room={room}
                  handleBoostClick={handleBoostClick}
                  handleEditListingClick={handleEditListingClick}
                />
              ))}
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8 space-x-2">
            {pageNumbers.map((number) => (
              <button
                key={number}
                className={`py-2 px-4 font-semibold rounded ${
                  currentPage === number
                    ? "bg-[#0F969C] text-white"
                    : "bg-white text-[#0F969C]"
                } border border-[#0F969C] transition duration-300`}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            ))}
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
          onSubmit={handleSubmit}
        />
        <BoostModal
          isOpen={isBoostModalOpen}
          onRequestClose={handleCloseBoostModal}
          onSubmit={handleSubmit}
        />
        <EditHotelModal
          isOpen={isEditHotelModalOpen}
          onRequestClose={handleCloseEditHotelModal}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default SpHotelProfileView;
