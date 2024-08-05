import React, { useState } from "react";
import MarketplaceAccommodationCard from "./MarketplaceAccommodationCard";
import MarketplaceRestaurantCard from "./MarketplaceRestaurantCard";
import MarketplaceEquipmentRentalCard from "./MarketplaceEquipmentRentalCard";
import MarketplaceModal from "../SP common/MarketplaceModal";
import DeluxeRoomImg from "../../assets/img/deluxeroom.png";
import SuitRoomImg from "../../assets/img/suitroom.png";
import ExecutiveRoomImg from "../../assets/img/executiveroom.png";
import KottuImg from "../../assets/img/kottu.png";
import BurgerImg from "../../assets/img/burger.png";
import BriyaniImg from "../../assets/img/briyani.png";
import BicycleImg from "../../assets/img/bicycle.png";
import TentImg from "../../assets/img/tent.png";
import GearImg from "../../assets/img/gear.png";

const MpContent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSeeMoreClick = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  const cardStyle = {
    width: "22rem", // Set the desired width
    height: "24rem", // Set the desired height
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
  };

  const accommodations = [
    {
      id: 1,
      src: DeluxeRoomImg,
      type: "Deluxe Room",
      price: "LKR 5000/night",
      rating: 4.2,
      marketplaceName: "Pearl of Lanka Inn",
    },
    {
      id: 2,
      src: ExecutiveRoomImg,
      type: "Executive Room",
      price: "LKR 3500/night",
      rating: 4.5,
      marketplaceName: "La Bloom Hotel",
    },
    {
      id: 3,
      src: SuitRoomImg,
      type: "Suit Room",
      price: "LKR 4000/night",
      rating: 4.7,
      marketplaceName: "Lanka Lagoon Inn",
    },
    // Add more accommodation data
  ];

  const restaurants = [
    {
      id: 1,
      src: BurgerImg,
      type: "Chicken Burger",
      price: "LKR 1250",
      rating: 4.7,
      marketplaceName: "Saffron Bite",
    },
    {
      id: 2,
      src: BriyaniImg,
      type: "Prawn Briyani",
      price: "LKR 1650",
      rating: 4.7,
      marketplaceName: "Gem Tastes",
    },
    {
      id: 3,
      src: KottuImg,
      type: "Chicken Kottu",
      price: "LKR 900",
      rating: 4.7,
      marketplaceName: "Spicy Eats",
    },
    // Add more restaurant data
  ];

  const equipments = [
    {
      id: 1,
      src: BicycleImg,
      type: "Bicycle Rental",
      price: "LKR 500/day",
      rating: 4.3,
      marketplaceName: "Travel Kit",
    },
    {
      id: 2,
      src: TentImg,
      type: "Tent Rental",
      price: "1500/day",
      rating: 4.6,
      marketplaceName: "EquipTrip",
    },
    {
      id: 3,
      src: GearImg,
      type: "Gear Rental",
      price: "2000/day",
      rating: 4.8,
      marketplaceName: "GearBase",
    },
    // Add more equipment data
  ];

  return (
    <div className="w-[82%] fixed right-2 bg-white rounded p-6 overflow-auto h-[87.5vh]">
      <div className="flex flex-col items-center">
        {/* Accommodations Section */}
        <div id="accommodation" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Accommodations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {accommodations.map((card) => (
              <div key={card.id} style={cardStyle}>
                <MarketplaceAccommodationCard
                  card={card}
                  handleSeeMoreClick={handleSeeMoreClick}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Restaurants Section */}
        <div id="restaurants" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Restaurants</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {restaurants.map((card) => (
              <div key={card.id} style={cardStyle}>
                <MarketplaceRestaurantCard
                  card={card}
                  handleSeeMoreClick={handleSeeMoreClick}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Rentals Section */}
        <div id="equipment-rental" className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Equipment Rentals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipments.map((card) => (
              <div key={card.id} style={cardStyle}>
                <MarketplaceEquipmentRentalCard
                  card={card}
                  handleSeeMoreClick={handleSeeMoreClick}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedCard && (
        <MarketplaceModal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          roomDetails={selectedCard}
        />
      )}
    </div>
  );
};

export default MpContent;
