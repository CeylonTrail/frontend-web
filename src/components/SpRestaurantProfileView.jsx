import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantBackgroundImg from "../assets/img/restaurant_cover.png";
import RestaurantCardImg from "../assets/img/restaurant-card.png";
import PlusImg from "../assets/img/plus.png";
import { PrimaryButton, SecondaryButton } from "./Button.js";
import Modal from "./RestaurantModal.jsx"; // Import Modal
import BoostModal from "./BoostModal.jsx"; // Import BoostModal
import RestaurantCard from "./RestaurantCard.jsx";
import EditRestaurantModal from "./EditRestaurantModal.jsx";

const SpRestaurantProfileView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const cardsPerPage = 12;
  const navigate = useNavigate();
  const [isBoostModalOpen, setIsBoostModalOpen] = useState(false); // State to control boost modal visibility
  const [selectedCard, setSelectedCard] = useState(null); // State to track the selected card for boosting
  const [isEditRestaurantModalOpen, setIsEditRestaurantModalOpen] = useState(false); // State to control edit modal visibility
  
  const handleAddRestaurantCardClick = () => {
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

  const handleEditRestaurantCardClick = (card) => {
    setSelectedCard(card);
    setIsEditRestaurantModalOpen(true);
  };

  const handleCloseEditRestaurantModal = () => {
    setSelectedCard(null);
    setIsEditRestaurantModalOpen(false);
  };

  const fooditems = [
    {
      type: "Chicken Briyani 1",
      price: "LKR 800",
      rating: 4.5,
      src: RestaurantCardImg,
    },
    {
      type: "Chicken Briyani 2",
      price: "LKR 350/night",
      rating: 4.5,
      src: RestaurantCardImg,
    },
    {
      type: "Chicken Briyani 3",
      price: "LKR 350/night",
      rating: 4.5,
      src: RestaurantCardImg,
    },
    {
      type: "Chicken Briyani 4",
      price: "LKR 350/night",
      rating: 4.5,
      src: RestaurantCardImg,
    },
    {
      type: "Chicken Briyani 5",
      price: "LKR 350/night",
      rating: 4.5,
      src: RestaurantCardImg,
    },
    {
      type: "Chicken Briyani 6",
      price: "LKR 350/night",
      rating: 4.5,
      src: RestaurantCardImg,
    },
    {
      type: "Chicken Briyani 7",
      price: "LKR 350/night",
      rating: 4.5,
      src: RestaurantCardImg,
    },
    {
      type: "Chicken Briyani  8",
      price: "LKR 350/night",
      rating: 4.5,
      src: RestaurantCardImg,
    },
    {
      type: "Chicken Briyani 9",
      price: "LKR 350/night",
      rating: 4.5,
      src: RestaurantCardImg,
    },
    {
      type: "Chicken Briyani 10",
      price: "LKR 350/night",
      rating: 4.5,
      src: RestaurantCardImg,
    },
    {
      type: "Chicken Briyani 11",
      price: "LKR 350/night",
      rating: 4.5,
      src: RestaurantCardImg,
    },
    {
      type: "Chicken Briyani 12",
      price: "LKR 350/night",
      rating: 4.5,
      src: RestaurantCardImg,
    },
    {
      type: "Chicken Briyani 13",
      price: "LKR 350/night",
      rating: 4.5,
      src: RestaurantCardImg,
    },
    {
      type: "Chicken Briyani 14",
      price: "LKR 350/night",
      rating: 4.5,
      src: RestaurantCardImg,
    },
    {
      type: "Chicken Briyani 15",
      price: "LKR 350/night",
      rating: 4.5,
      src: RestaurantCardImg,
    },
  ];

  // Calculate the current cards to display
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = fooditems.slice(indexOfFirstCard, indexOfLastCard);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(fooditems.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="relative max-w-full mx-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mb-0 rounded-lg text-gray-900">
      {/* White Background Box */}
      <div className="absolute inset-0 flex justify-center items-center mt-20">
        <div
          className="absolute bg-white z-[-1]"
          style={{ width: "1250px", height: "104%" }}
        ></div>
      </div>

      <div className="relative z-10">
        <div className="overflow-hidden flex justify-center mt-5 mb-5">
          <img
            style={{ width: "1250px" }}
            className="object-cover object-top"
            src={RestaurantBackgroundImg}
            alt="Mountain"
          />
        </div>
        <div className="relative flex justify-center items-center -mt-24">
          <div
            className="relative w-40 h-40 border-4 border-white rounded-full overflow-hidden"
            style={{
              top: "30px",
              right: "450px",
            }}
          >
            <img
              className="object-cover object-center w-full h-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Woman looking front"
            />
          </div>
          <div
            className="absolute"
            style={{ left: "1000px", top: "120px", right: "auto" }}
          >
            <div className="flex space-x-4">
              <PrimaryButton
                name="Edit Profile"
                action={editProfileClicked}
                isActive={true}
              />
              <SecondaryButton
                name="Subscribe"
                action={handleSubscribeClick}
                isActive={true}
              />
            </div>
          </div>
        </div>
        <div
          className="border border-[#0F969C] p-4 rounded-lg mx-4 md:mx-24 lg:mx-40 mt-10 flex flex-col lg:flex-row justify-center items-center bg-white"
          style={{
            boxShadow:
              "0 7px 12px -3px rgba(15, 150, 156, 0.35), 0 -7px 12px -3px rgba(15, 150, 156, 0.35), 7px 0 12px -3px rgba(15, 150, 156, 0.35), -7px 0 12px -3px rgba(15, 150, 156, 0.35)",
          }}>
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
            onClick={handleAddRestaurantCardClick} // Open modal on click
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
            {currentCards.map((fooditem, index) => (
              <RestaurantCard
                key={indexOfFirstCard + index}
                index={indexOfFirstCard + index}
                fooditem={fooditem}
                handleBoostClick={handleBoostClick}
                handleEditRestaurantCardClick={handleEditRestaurantCardClick}
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
      <EditRestaurantModal
        isOpen={isEditRestaurantModalOpen}
        onRequestClose={handleCloseEditRestaurantModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default SpRestaurantProfileView;
