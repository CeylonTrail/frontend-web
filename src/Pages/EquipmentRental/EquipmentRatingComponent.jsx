import React, { useState } from "react";

const EquipmentRatingComponent = () => {
  // Initial total rating and number of ratings
  const initialTotalRating = 22.5; // Example initial total rating (sum of ratings)
  const initialNumRatings = 5; // Example initial number of ratings

  const [rating, setRating] = useState(0); // Current user's rating
  const [hoverRating, setHoverRating] = useState(0); // Rating being hovered
  const [showRating, setShowRating] = useState(false); // Show rating stars
  const [totalRating, setTotalRating] = useState(initialTotalRating);
  const [numRatings, setNumRatings] = useState(initialNumRatings);

  const handleClick = (value) => {
    if (rating === 0) {
      // If no rating has been given yet, add the new rating
      setTotalRating(totalRating + value);
      setNumRatings(numRatings + 1);
    } else {
      // If a rating has already been given, update the total rating
      setTotalRating(totalRating - rating + value);
    }
    setRating(value);
    setShowRating(false); // Hide stars after rating is given
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const toggleRating = () => {
    setShowRating(!showRating); // Toggle stars visibility
  };

  // Calculate the average rating based on totalRating and numRatings
  const averageRating =
    numRatings > 0 ? (totalRating / numRatings).toFixed(1) : 0;

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const totalStars = 5;

    for (let i = 1; i <= totalStars; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="lg:w-1/2 pr-8 lg:pl-0">
      <div
        className="text-4xl font-semibold"
        style={{ fontWeight: "400", fontSize: "40px" }}
      >
        Equipments Rental Shop
      </div>
      <div
        className="text-xl font-light italic mt-2"
        style={{ fontSize: "20px", fontWeight: "300" }}
      >
        Best ever service
      </div>
      <div className="flex items-center mt-2">
        <div className="flex items-center">
          {renderStars(parseFloat(averageRating))}
          <span className="text-lg ml-2">{averageRating}</span>
        </div>
        <div className="flex items-center ms-4">
          <button onClick={toggleRating} className="text-blue-500 underline">
            {rating === 0 ? "Give your rating" : "Edit your rating"}
          </button>
          {showRating && (
            <div className="flex items-center ms-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <svg
                  key={value}
                  className="w-5 h-5 ms-1 cursor-pointer"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    fill:
                      value <= (hoverRating || rating) ? "#FFD700" : "#D3D3D3",
                  }}
                  viewBox="0 0 22 20"
                  onClick={() => handleClick(value)}
                  onMouseEnter={() => handleMouseEnter(value)}
                  onMouseLeave={handleMouseLeave}
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EquipmentRatingComponent;
