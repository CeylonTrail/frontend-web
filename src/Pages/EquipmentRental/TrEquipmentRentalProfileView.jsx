import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EquipmentBackgroundImg from "../../assets/img/equipment_cover.png";
import EquipmentCardImg from "../../assets/img/equipment-card.png";
import EquipmentProfileImg from "../../assets/img/equipment-profile.png";
import PlusImg from "../../assets/img/plus.png";
import { PrimaryButton } from "../../components/Button.js";
import Modal from "./EquipmentModal.jsx"; // Import Modal
import BoostModal from "../SP common/BoostModal.jsx"; // Import BoostModal
import EquipmentCard from "./EquipmentCard.jsx";
import EditEquipmentModal from "./EditEquipmentModal.jsx";
import EquipmentRatingComponent from "./EquipmentRatingComponent.jsx";

const TrEquipmentRentalProfileView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const cardsPerPage = 12;
  const navigate = useNavigate();
  const [isBoostModalOpen, setIsBoostModalOpen] = useState(false); // State to control boost modal visibility
  const [selectedCard, setSelectedCard] = useState(null); // State to track the selected card for boosting
  const [isEditEquipmentModalOpen, setIsEditEquipmentModalOpen] =
    useState(false); // State to control edit modal visibility

  const handleAddEquipmentCardClick = () => {
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

  const handleEditEquipmentCardClick = (card) => {
    setSelectedCard(card);
    setIsEditEquipmentModalOpen(true);
  };

  const handleCloseEditEquipmentModal = () => {
    setSelectedCard(null);
    setIsEditEquipmentModalOpen(false);
  };

  const equipments = [
    {
      type: "Camping Bag 80L",
      rent: "LKR 200/day",
      rating: 4.5,
      src: EquipmentCardImg,
    },
    {
      type: "Camping Bag 80L",
      rent: "LKR 200/day",
      rating: 4.5,
      src: EquipmentCardImg,
    },
    {
      type: "Camping Bag 80L",
      rent: "LKR 200/day",
      rating: 4.5,
      src: EquipmentCardImg,
    },
    {
      type: "Camping Bag 80L",
      rent: "LKR 200/day",
      rating: 4.5,
      src: EquipmentCardImg,
    },
    {
      type: "Camping Bag 80L",
      rent: "LKR 200/day",
      rating: 4.5,
      src: EquipmentCardImg,
    },
    {
      type: "Camping Bag 80L",
      rent: "LKR 200/day",
      rating: 4.5,
      src: EquipmentCardImg,
    },
    {
      type: "Camping Bag 80L",
      rent: "LKR 200/day",
      rating: 4.5,
      src: EquipmentCardImg,
    },
    {
      type: "Camping Bag 80L",
      rent: "LKR 200/day",
      rating: 4.5,
      src: EquipmentCardImg,
    },
    {
      type: "Camping Bag 80L",
      rent: "LKR 200/day",
      rating: 4.5,
      src: EquipmentCardImg,
    },
    {
      type: "Camping Bag 80L",
      rent: "LKR 200/day",
      rating: 4.5,
      src: EquipmentCardImg,
    },
    {
      type: "Camping Bag 80L",
      rent: "LKR 200/day",
      rating: 4.5,
      src: EquipmentCardImg,
    },
    {
      type: "Camping Bag 80L",
      rent: "LKR 200/day",
      rating: 4.5,
      src: EquipmentCardImg,
    },
    {
      type: "Camping Bag 80L",
      rent: "LKR 200/day",
      rating: 4.5,
      src: EquipmentCardImg,
    },
    {
      type: "Camping Bag 80L",
      rent: "LKR 200/day",
      rating: 4.5,
      src: EquipmentCardImg,
    },
    {
      type: "Camping Bag 80L",
      rent: "LKR 200/day",
      rating: 4.5,
      src: EquipmentCardImg,
    },
  ];

  // Calculate the current cards to display
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = equipments.slice(indexOfFirstCard, indexOfLastCard);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(equipments.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="relative max-w-full mx-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mb-0 rounded-lg text-gray-900 mt-14">
      {/* White Background Box */}
      <div className="absolute inset-0 flex justify-center items-center mt-20">
        <div
          className="absolute bg-white z-[-1] "
          style={{ width: "1250px", height: "104%" }}
        ></div>
      </div>

      <div className="relative">
        <div className="overflow-hidden flex justify-center mt-5 mb-5">
          <img
            style={{ width: "1250px", height: "350px" }}
            className="object-cover object-top"
            src={EquipmentBackgroundImg}
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
              src={EquipmentProfileImg}
              alt="Profile"
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
              <PrimaryButton
                name="Subscribe"
                action={handleSubscribeClick}
                isActive={false}
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
          <EquipmentRatingComponent />

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
            onClick={handleAddEquipmentCardClick} // Open modal on click
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
            {currentCards.map((equipment, index) => (
              <EquipmentCard
                key={indexOfFirstCard + index}
                index={indexOfFirstCard + index}
                equipment={equipment}
                handleBoostClick={handleBoostClick}
                handleEditEquipmentCardClick={handleEditEquipmentCardClick}
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
      <EditEquipmentModal
        isOpen={isEditEquipmentModalOpen}
        onRequestClose={handleCloseEditEquipmentModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default TrEquipmentRentalProfileView;
