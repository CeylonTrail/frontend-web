import React, { useState } from "react";

const RestaurantRatingComponent = () => {
  const initialTotalRating = 35.0;
  const initialNumRatings = 7;

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [showRating, setShowRating] = useState(false);
  const [totalRating, setTotalRating] = useState(initialTotalRating);
  const [numRatings, setNumRatings] = useState(initialNumRatings);

  const handleClick = (value) => {
    if (rating === 0) {
      setTotalRating(totalRating + value);
      setNumRatings(numRatings + 1);
    } else {
      setTotalRating(totalRating - rating + value);
    }
    setRating(value);
    setShowRating(true);
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const averageRating = totalRating / numRatings;
  const starRating = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        {starRating.map((star) => (
          <svg
            key={star}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(star)}
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 ${
              star <= (hoverRating || rating)
                ? "text-yellow-400"
                : "text-gray-400"
            } cursor-pointer transition-colors duration-300`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.049 2.927C11.293 2.352 11.686 2 12 2s.707.352.951.927l1.362 2.697c.084.168.215.306.379.395l2.982.292c.377.037.715.22.866.548.15.328.103.734-.117 1.022l-2.069 2.021a.62.62 0 00-.16.56l.49 2.855c.078.45-.251.877-.674.986l-2.688.85a.645.645 0 00-.384.331l-1.388 2.445a.615.615 0 01-1.104-.462l.453-2.732a.635.635 0 00-.162-.545l-1.831-1.793a.596.596 0 00-.594-.143l-3.122.56c-.383.067-.722.344-.896.722L2.67 8.94a.645.645 0 01-.167.849l2.982-.292c.164-.089.295-.227.379-.395l1.362-2.697z"
            />
          </svg>
        ))}
        <span className="ml-2 text-xl font-semibold">
          {showRating ? rating : averageRating.toFixed(1)}
        </span>
      </div>
      <div className="mt-2 text-sm">
        <a href="#" className="text-blue-600 hover:underline">
          Edit your rating
        </a>
      </div>
    </div>
  );
};

export default RestaurantRatingComponent;
