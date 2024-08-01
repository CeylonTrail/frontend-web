import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeartRegular,
  faHeart as faHeartSolid,
  faBookmark as faBookmarkRegular,
  faBookmark as faBookmarkSolid,
} from "@fortawesome/free-solid-svg-icons";

const MarketplaceRentalCard = ({ card, handleSeeMoreClick }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg object-cover h-48 w-full"
          src={card.src}
          alt={card.type}
        />
      </a>
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              {card.marketplaceName}
            </p>
            <p className="text-md font-medium text-gray-700 dark:text-gray-400">
              ⭐ {card.rating}
            </p>
          </div>
          <div className="text-md font-semibold text-gray-800 dark:text-gray-300 text-right">
            <h5 className="mb-2">{card.type}</h5>
            <p>{card.price}</p>
          </div>
        </div>
        <button
          onClick={() => handleSeeMoreClick(card)}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#0F969C] rounded-lg hover:bg-[#0F969C] focus:ring-4 focus:outline-none focus:ring-[#0F969C]"
        >
          See more
          <svg
            className="w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>

      <div
        className="absolute bottom-2 right-2 z-10 flex items-center cursor-pointer p-2"
        onClick={handleLikeClick}
      >
        <div className="bg-white p-1 rounded-full shadow-md">
          <FontAwesomeIcon
            icon={isLiked ? faHeartSolid : faHeartRegular}
            className={`text-xl ${
              isLiked ? "text-[#0F969C]" : "text-gray-500"
            }`}
          />
        </div>
        <span className="ml-1 text-gray-700 dark:text-gray-300">
          {likeCount}
        </span>
      </div>

      <div
        className="absolute top-2 right-2 z-10 flex items-center cursor-pointer p-2"
        onClick={handleSaveClick}
      >
        <div className="bg-white p-1 rounded-full shadow-md">
          <FontAwesomeIcon
            icon={isSaved ? faBookmarkSolid : faBookmarkRegular}
            className={`text-xl ${
              isSaved ? "text-[#0F969C]" : "text-gray-500"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default MarketplaceRentalCard;
