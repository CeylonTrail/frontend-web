import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MarketPlaceBackgroundImg from "../../assets/img/shop_cover.png";
import HotelCardImg from "../../assets/img/hotel-card.png";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import PlusImg from "../../assets/img/plus.png";
import { PrimaryButton } from "../../components/Button.js";
import Modal from "./HotelModal.jsx"; // Import Modal
import BoostModal from "../SP common/BoostModal.jsx"; // Import BoostModal
import HotelCard from "./HotelCard.jsx";
import EditHotelModal from "./EditHotelModal.jsx";
import HotelRatingComponent from "./HotelRatingComponent.jsx";

const TrHotelProfileView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const cardsPerPage = 8;
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

  const rooms = [
    {
      type: "Single Room 1",
      price: "LKR 350/night",
      rating: 4.5,
      src: HotelCardImg,
    },
    {
      type: "Single Room 2",
      price: "LKR 350/night",
      rating: 4.5,
      src: HotelCardImg,
    },
    {
      type: "Single Room 3",
      price: "LKR 350/night",
      rating: 4.5,
      src: HotelCardImg,
    },
    {
      type: "Single Room 4",
      price: "LKR 350/night",
      rating: 4.5,
      src: HotelCardImg,
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

  return (
    <div className="relative max-w-full mx-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mb-0 rounded-lg text-gray-900 mt-14">
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
            {/* <div className="flex space-x-4">
              <PrimaryButton
                name="Edit Profile"
                action={editProfileClicked}
                isActive={true}
              />
            </div> */}
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
          
           <HotelRatingComponent />

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
  );
};

export default TrHotelProfileView;
