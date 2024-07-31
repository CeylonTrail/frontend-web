import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantBackgroundImg from "../../assets/img/restaurant_cover.png";
import RestaurantProfileImg from "../../assets/img/restaurant-profile.png";
import PlusImg from "../../assets/img/plus.png";
import RestaurantCardImg from "../../assets/img/restaurant-card.png";
import { PrimaryButton } from "../../components/Button.js";
import Modal from "./RestaurantModal.jsx";
<<<<<<< HEAD
<<<<<<< HEAD
// import BoostModal from "../SP common/BoostModal.jsx";
import RestaurantCard from "./RestaurantCard.jsx";
// import EditRestaurantModal from "./EditRestaurantModal.jsx";
=======
import BoostModal from "../SP common/BoostModal.jsx";
import RestaurantCard from "./RestaurantCard.jsx";
import EditRestaurantModal from "./EditRestaurantModal.jsx";
>>>>>>> c31e338 (Hotel Traveller View done and other tr view pages initiated)
=======
// import BoostModal from "../SP common/BoostModal.jsx";
import RestaurantCard from "./RestaurantCard.jsx";
// import EditRestaurantModal from "./EditRestaurantModal.jsx";
>>>>>>> 50e2e69387a3bbaa4e6a2efd0a6a42ced1223221
import RatingComponent from "../SP common/RatingComponent.jsx";

const TrRestaurantProfileView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 50e2e69387a3bbaa4e6a2efd0a6a42ced1223221
  // const [isBoostModalOpen, setIsBoostModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  // const [isEditRestaurantModalOpen, setIsEditRestaurantModalOpen] =
  //   useState(false);
<<<<<<< HEAD
=======
  const [isBoostModalOpen, setIsBoostModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isEditRestaurantModalOpen, setIsEditRestaurantModalOpen] =
    useState(false);
>>>>>>> c31e338 (Hotel Traveller View done and other tr view pages initiated)
=======
>>>>>>> 50e2e69387a3bbaa4e6a2efd0a6a42ced1223221
  const cardsPerPage = 12;
  const navigate = useNavigate();

  const handleAddRestaurantCardClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
    handleCloseModal();
  };
  // const handleSubscribeClick = () => navigate("/subscription-plan");
  // const editProfileClicked = () => navigate("/edit-market");
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 50e2e69387a3bbaa4e6a2efd0a6a42ced1223221
  // const handleBoostClick = (card) => {
  //   setSelectedCard(card);
  //   setIsBoostModalOpen(true);
  // };
  // const handleCloseBoostModal = () => {
  //   setSelectedCard(null);
  //   setIsBoostModalOpen(false);
  // };
  // const handleEditRestaurantCardClick = (card) => {
  //   setSelectedCard(card);
  //   setIsEditRestaurantModalOpen(true);
  // };
  // const handleCloseEditRestaurantModal = () => {
  //   setSelectedCard(null);
  //   setIsEditRestaurantModalOpen(false);
  // };
<<<<<<< HEAD
=======
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
>>>>>>> c31e338 (Hotel Traveller View done and other tr view pages initiated)
=======
>>>>>>> 50e2e69387a3bbaa4e6a2efd0a6a42ced1223221

  const fooditems = Array.from({ length: 15 }, (_, i) => ({
    type: `Chicken Briyani ${i + 1}`,
    price: "LKR 350/night",
    rating: 4.5,
    src: RestaurantCardImg, // assuming image is for demonstration
  }));

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = fooditems.slice(indexOfFirstCard, indexOfLastCard);

  const pageNumbers = Array.from(
    { length: Math.ceil(fooditems.length / cardsPerPage) },
    (_, i) => i + 1
  );

  return (
    <div className="relative max-w-full mx-4 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mb-0 rounded-lg text-gray-900 mt-14">
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
            src={RestaurantBackgroundImg}
            alt="Cover"
          />
        </div>
        <div className="relative flex justify-center items-center -mt-24">
         
          <div
            className="relative w-40 h-40 border-4 border-white rounded-full overflow-hidden"
            // style={{
            //   right: "450px",
            // }}
          >
            <img
              className="object-cover object-center w-full h-full"
              src={RestaurantProfileImg}
              alt="Hotel Profile"
            />
          </div>
        </div>

        {/* Combined Section: Text, Rating, and Contact Info */}
        <div
          className="border border-[#0F969C] p-4 rounded-lg mx-4 md:mx-24 lg:mx-40 mt-10 flex flex-col bg-white mt-3"
          style={{
            boxShadow:
              "0 7px 12px -3px rgba(15, 150, 156, 0.35), 0 -7px 12px -3px rgba(15, 150, 156, 0.35), 7px 0 12px -3px rgba(15, 150, 156, 0.35), -7px 0 12px -3px rgba(15, 150, 156, 0.35)",
          }}
        >
         <div className="flex items-center justify-between">
  {/* <!-- First Column: Rating --> */}
  <div className="flex-1 flex items-center">
    <RatingComponent />
  </div>

  {/* <!-- Second Column: Hotel Name and Description --> */}
  <div className="flex-1 flex flex-col items-center justify-center ml-4">
    <div className="text-4xl font-semibold whitespace-nowrap" style={{ fontWeight: "400", fontSize: "40px" }}>
      Blue Hills Residencies
    </div>
    <div className="flex flex-col mt-2 items-center">
      <div className="text-xl font-light italic">
        Good in quality
      </div>
    </div>
  </div>

  {/* <!-- Third Column: Additional Information --> */}
  <div className="flex-1 flex flex-col items-end ml-4">
    <div className="text-sm mb-2">
      <span className="font-semibold">Hotel</span>
    </div>
    <div className="text-sm mb-2">
      <span className="font-semibold">Email:</span> contact@bluehills.com
    </div>
    <div className="text-sm mb-2">
      <span className="font-semibold">Phone:</span> +123 456 7890
    </div>
    <div className="text-sm mb-2">
      <span className="font-semibold">Opening Hours:</span> 9:00 AM - 9:00 PM
    </div>
    <div className="text-sm mb-2">
      <span className="font-semibold">Address:</span> 123 Blue Hills Road, Hilltown
    </div>
    <div className="text-sm mb-2">
      <span className="font-semibold">Owner:</span> John Doe
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
        <div className="p-1 flex flex-col items-center gap-2 mt-12">
          <div
            className="mb-4 flex items-center cursor-pointer px-4 py-2 text-2xl text-black font-bold rounded-full transition-transform duration-300 transform hover:scale-105"
            onClick={handleAddRestaurantCardClick}
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
                // handleBoostClick={handleBoostClick}
                // handleEditRestaurantCardClick={handleEditRestaurantCardClick}
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
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
      {/* <BoostModal
        isOpen={isBoostModalOpen}
        onRequestClose={handleCloseBoostModal}
        onSubmit={handleSubmit}
      /> */}
      {/* <EditRestaurantModal
        isOpen={isEditRestaurantModalOpen}
        onRequestClose={handleCloseEditRestaurantModal}
        onSubmit={handleSubmit}
      /> */}
    </div>
  );
};

export default TrRestaurantProfileView;
