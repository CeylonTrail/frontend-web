import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EquipmentBackgroundImg from "../../assets/img/equipment_cover.png";
import EquipmentCardImg from "../../assets/img/equipment-card.png";
import EquipmentProfileImg from "../../assets/img/equipment-profile.png";
import { PrimaryButton } from "../../components/Button.js";
import TrEquipmentModal from "./TrEquipmentModal.jsx"; // Import Modal
import TrEquipmentCard from "./TrEquipmentCard.jsx"
import RatingComponent from "../SP common/RatingComponent.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Profile from "../../assets/img/Profile.svg";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import ReportModal from "../SP common/ReportModal.jsx";
import Header from "../../components/header.js";

const TrEquipmentRentalProfileView = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const cardsPerPage = 4;
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null); // State to track the selected card for boosting
 const [showDropdown, setShowDropdown] = useState(false);
 const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const openReportModal = () => {
    setIsReportModalOpen(true);
    setShowDropdown(false); // Close dropdown when modal opens
  };

  const closeReportModal = () => {
    setIsReportModalOpen(false);
  };

   const handleReportSubmit = (reportText) => {
     // Handle the report submission logic here
     console.log("Report submitted:", reportText);
     closeReportModal();
  };
  
  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  const handleSeeMoreClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
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
    <>
      <Header type="traveller" profilePic={Profile} funtion={() => {}} />

      <div className="relative mt-20 fixed right-2 overflow-auto h-[87.5vh] ">
        {/* White Background Box */}
        <div className="relative bg-white w-[1250px] mx-auto">
          <div className="flex justify-center">
            <img
              style={{ width: "1250px", height: "350px" }}
              className="object-cover object-top"
              src={EquipmentBackgroundImg}
              alt="Mountain"
            />
          </div>
          <div className="relative flex justify-center items-center -mt-24">
            <div className="relative w-40 h-40 border-4 border-white rounded-full overflow-hidden">
              <img
                className="object-cover object-center w-full h-full"
                src={EquipmentProfileImg}
                alt="Profile"
              />
            </div>
          </div>
          <div
            className="border border-[#0F969C] p-4 rounded-lg mt-10 flex flex-col mt-3 w-[1200px] mx-auto"
            style={{
              boxShadow:
                "0 7px 12px -3px rgba(15, 150, 156, 0.35), 0 -7px 12px -3px rgba(15, 150, 156, 0.35), 7px 0 12px -3px rgba(15, 150, 156, 0.35), -7px 0 12px -3px rgba(15, 150, 156, 0.35)",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1 flex items-center">
                <RatingComponent />
              </div>

              <div className="flex-1 flex flex-col items-center justify-center ml-4">
                <div
                  className="text-4xl font-semibold whitespace-nowrap"
                  style={{ fontWeight: "400", fontSize: "40px" }}
                >
                  Pearl of Lanka Inn
                </div>
                <div className="flex flex-col mt-2 items-center">
                  <div className="text-xl font-light italic mb-4">
                    Good in quality
                  </div>
                  <PrimaryButton
                    name={isFollowing ? "Follow" : "Following"}
                    action={handleFollowToggle}
                    isActive={isFollowing}
                    className="mt-4"
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col items-end ml-4 relative">
                <div>
                  <div className="text-sm mb-2 flex items-center">
                    <button
                      onClick={toggleDropdown}
                      className="ml-2 focus:outline-none"
                    >
                      <FontAwesomeIcon icon={faEllipsisV} />
                    </button>
                    {showDropdown && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-md">
                        <button
                          onClick={openReportModal}
                          className="block px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100 w-full"
                        >
                          Report Profile
                        </button>
                      </div>
                    )}
                  </div>{" "}
                </div>

                <div className="text-sm mb-2">
                  <span className="font-semibold">Phone:</span> +123 456 7890
                </div>
                <div className="text-sm mb-2">
                  <span className="font-semibold">Opening Hours:</span>
                  <br />
                  Mon - Fri: 9:00 AM - 9:00 PM
                  <br />
                  Sat - Sun: 10:00 AM - 6:00 PM
                </div>
                <div className="text-sm mb-2">
                  <span className="font-semibold">Address:</span> 123 Blue Hills
                  Road, Hilltown
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <a
                    href="https://www.facebook.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    href="https://www.twitter.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    href="https://www.instagram.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href="https://www.yourwebsite.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                  <a
                    href="https://www.yourwebsite.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    href="https://www.yourwebsite.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="border border-[#0F969C]  flex flex-col lg:flex-row justify-center bg-white mt-3">
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
          </div>

          {/* Card Section */}
          <div className="p-1 flex flex-col items-center gap-2 mt-12">
            <div
              className="mb-4 flex items-center px-4 py-2 text-2xl text-black font-bold rounded-full"
               // Open modal on click
            >LISTINGS
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {currentCards.map((equipment, index) => (
                <TrEquipmentCard
                  key={indexOfFirstCard + index}
                  index={indexOfFirstCard + index}
                  equipment={equipment}
                  handleSeeMoreClick={handleSeeMoreClick}
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

          {isModalOpen && (
            <TrEquipmentModal
              isOpen={isModalOpen}
              onRequestClose={handleCloseModal}
              onSubmit={handleSubmit}
              selectedCard={selectedCard}
            />
          )}
          <ReportModal
            isOpen={isReportModalOpen}
            onRequestClose={closeReportModal}
            onSubmit={handleReportSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default TrEquipmentRentalProfileView;
