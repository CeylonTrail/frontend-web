import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EquipmentBackgroundImg from "../../assets/img/equipment_cover.png";
import EquipmentCardImg from "../../assets/img/equipment-card.png";
import EquipmentProfileImg from "../../assets/img/equipment-profile.png";
import PlusImg from "../../assets/img/plus.png";
import { PrimaryButton } from "../../components/Button.js";
import Modal from "./EquipmentModal.jsx";
import BoostModal from "../SP common/BoostModal.jsx";
import EquipmentCard from "./EquipmentCard.jsx";
import EditEquipmentModal from "./EditEquipmentModal.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import "../../assets/styles/form.css"; 
import Header from "../../components/header.js";

const SpEquipmentRentalProfileView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const cardsPerPage = 4;
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
  const handleRedirect = (event) => {
    event.preventDefault();
    navigate("/chat");
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

  const handleSeeReviewsClick = () => {
    navigate("/sp-view-review"); // Navigate to the /sp-review page
  };

  return (
    <>
      <Header
        type="serviceprovider"
        profilePic={EquipmentProfileImg}
        funtion={() => {}}
      />
      <div className="relative mt-20 fixed right-2 overflow-auto h-[87.5vh] ">
        {/* White Background Box */}
        <div className="relative bg-white w-[1250px] mx-auto">
          <div className="flex justify-center">
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
            <div className="absolute" style={{ top: "7rem", right: "3.7rem" }}>
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
                className={`py-2 px-4 font-semibold rounded mb-5 ${
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
        <EditEquipmentModal
          isOpen={isEditEquipmentModalOpen}
          onRequestClose={handleCloseEditEquipmentModal}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default SpEquipmentRentalProfileView;
