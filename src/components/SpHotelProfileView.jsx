import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MarketPlaceBackgroundImg from "../assets/img/shop_cover.png";
import HotelCardImg from "../assets/img/hotel-card.png";
import PlusImg from "../assets/img/plus.png";
import { PrimaryButton, SecondaryButton } from "./Button.js";
import Modal from "./HotelModal.jsx"; // Import Modal

const SpHotelProfileView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const cardsPerPage = 8;
  const navigate = useNavigate();

  const handleSubscribeClick = () => {
    navigate("/subscription-plan");
  };

  const handleBoostClick = (index) => {
    alert(`Boost Clicked for Card ${index}`);
  };

  const handleAddListingClick = () => {
    setIsModalOpen(true); // Open the modal when "ADD LISTING" is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    alert("Form Submitted");
    handleCloseModal(); // Close modal on form submission
  };

  const allCards = Array.from({ length: 13 }, (_, index) => index + 1);

  // Calculate the current cards to display
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);

  // Pagination logic
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allCards.length / cardsPerPage); i++) {
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
            src={MarketPlaceBackgroundImg}
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
                action={() => alert("Edit Profile Clicked")}
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
        <div className="border border-[#0F969C] -10 p-4 rounded-lg mx-4 md:mx-24 lg:mx-40 mt-16 flex flex-col lg:flex-row">
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
            {currentCards.map((card) => (
              <div
                key={card}
                className="relative flex-shrink-0 m-6 overflow-hidden rounded-lg shadow-lg border-2 border-[#0F969C] group transition-transform duration-300 transform hover:scale-105"
                style={{ width: "250px", height: "330px" }}
              >
                <div className="relative w-full h-full">
                  <img
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    src={HotelCardImg}
                    alt=""
                  />
                  <div
                    className="absolute bottom-8 left-0 w-full bg-[#0F969C] text-white text-left py-1 flex justify-between items-center px-4 transition-opacity duration-300 group-hover:opacity-0"
                    style={{ zIndex: 5 }}
                  >
                    <div className="text-sm">
                      <p className="font-bold text-lg mb-1">Single room</p>
                      <p>LKR 350/night</p>
                    </div>
                    <div className="flex items-center text-sm">
                      <p>⭐ 4.5</p>
                    </div>
                  </div>
                  {/* Hover Effect */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 p-4">
                    <div className="flex flex-col items-center gap-y-2">
                      <PrimaryButton
                        name="Boost"
                        action={() => handleBoostClick(card)}
                        isActive={true}
                      />
                      <SecondaryButton
                        name="Edit"
                        action={() => handleBoostClick(card)}
                        isActive={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
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
              } border border-[#0F969C]`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default SpHotelProfileView;
