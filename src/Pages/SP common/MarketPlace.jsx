import React, { useState } from "react";
import SidebarComponentMP from "../SP common/SidebarComponentMP";
import MpContent from "../SP common/MpContent";
import MarketplaceModal from "./MarketplaceModal"; // Import the modal component
import Header from "../../components/header";

const MarketPlace = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSeeMoreClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="flex flex-col">
      <Header type="traveller" />
      <div className="flex flex-1 mt-20">
        <SidebarComponentMP onCategoryChange={setSelectedCategory} />
        <MpContent
          category={selectedCategory}
          onSeeMoreClick={handleSeeMoreClick}
        />
      </div>

      {isModalOpen && (
        <MarketplaceModal
          card={selectedCard}
          isOpen={isModalOpen}
          onRequestClose={closeModal} // Pass the closeModal function here
        />
      )}
    </div>
  );
};

export default MarketPlace;
