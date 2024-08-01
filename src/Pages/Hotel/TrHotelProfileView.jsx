import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MarketPlaceBackgroundImg from "../../assets/img/shop_cover.png";
import HotelCardImg from "../../assets/img/hotel-card.png";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import TrHotelModal from "./TrHotelModal.jsx";
import TrHotelCard from "./TrHotelCard.jsx";
import RatingComponent from "../SP common/RatingComponent.jsx";
import { PrimaryButton } from "../../components/Button.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import ReportModal from "../SP common/ReportModal.jsx";
import Header from "../../components/header.js"


const TrHotelProfileView = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isTrHotelModalOpen, setIsTrHotelModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const cardsPerPage = 8;
  const navigate = useNavigate();
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
    setIsTrHotelModalOpen(true);
  };

  const handleCloseTrHotelModal = () => {
    setSelectedCard(null);
    setIsTrHotelModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
    handleCloseTrHotelModal();
  };

   const rooms = [
     {
       type: "Luxury Suite",
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

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = rooms.slice(indexOfFirstCard, indexOfLastCard);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(rooms.length / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Header profilePic={HotelProfileImg } />
      <div className="relative max-w-full mx-auto mb-0 rounded-lg text-gray-900 mt-20">
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
            <div className="relative w-40 h-40 border-4 border-white rounded-full overflow-hidden">
              <img
                className="object-cover object-center w-full h-full"
                src={HotelProfileImg}
                alt="Hotel Profile"
              />
            </div>
          </div>

          <div
            className="border border-[#0F969C] p-4 rounded-lg mx-4 md:mx-24 lg:mx-40 mt-10 flex flex-col bg-white mt-3"
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
                  Blue Hills Residencies
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

            <div className="border border-[#0F969C] flex flex-col lg:flex-row justify-center bg-white mt-3">
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

          <div className="p-1 flex flex-col items-center gap-2 mt-12">
            <div className="mb-4 flex items-center px-4 py-2 text-2xl text-black font-bold rounded-full">
              LISTINGS
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {currentCards.map((room, index) => (
                <TrHotelCard
                  key={indexOfFirstCard + index}
                  index={indexOfFirstCard + index}
                  room={room}
                  handleSeeMoreClick={handleSeeMoreClick}
                />
              ))}
            </div>
          </div>

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
          {/* <div className="floating-button">
          <a
            href="#!" // Set href to a dummy value
            aria-label="Leave Feedback"
            // onClick={handleRedirect} // Attach click handler for navigation
          >
            <FontAwesomeIcon
              icon={faFacebookMessenger}
              size="2x"
              color="#0F969C"
            />{" "}
          </a>
        </div> */}
        </div>

        {isTrHotelModalOpen && (
          <TrHotelModal
            isOpen={isTrHotelModalOpen}
            onRequestClose={handleCloseTrHotelModal}
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
    </>
  );
};

export default TrHotelProfileView;
