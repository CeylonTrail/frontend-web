import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import Modal from "react-modal"; // Ensure you have react-modal installed
import "../../assets/styles/form.css";
import cancelImg from "../../assets/img/cancel.png";

const RatingComponent = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [totalRating, setTotalRating] = useState(15.0);
  const [numRatings, setNumRatings] = useState(3);
  const [review, setReview] = useState("");

  const navigate = useNavigate(); // Get the navigate function

  const handleClick = (value) => {
    if (rating === 0) {
      setTotalRating(totalRating + value);
      setNumRatings(numRatings + 1);
    } else {
      setTotalRating(totalRating - rating + value);
    }
    setRating(value);
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = () => {
    // Handle submission logic, e.g., save to a database
    console.log("Rating submitted:", rating);
    console.log("Review submitted:", review);
    setShowModal(false);
  };

  const averageRating =
    numRatings > 0 ? (totalRating / numRatings).toFixed(1) : 0;

  const renderStars = (rating, size) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const totalStars = 5;

    for (let i = 1; i <= totalStars; i++) {
      const starSize =
        size === "small"
          ? "w-4 h-4"
          : size === "medium"
          ? "w-6 h-6"
          : "w-8 h-8";
      const starColor =
        i <= fullStars || (i === fullStars + 1 && hasHalfStar)
          ? "#FFD700"
          : "#D3D3D3";

      stars.push(
        <svg
          key={i}
          className={`${starSize} ms-2 cursor-pointer`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: starColor }}
          viewBox="0 0 22 20"
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }
    return stars;
  };

  const handleSeeReviewsClick = () => {
    navigate("/sp-review"); // Navigate to the /sp-review page
  };

  return (
    <div className="lg:w-1/2 pr-8 lg:pl-0">
      <div className="flex flex-col items-start mt-4">
        <div className="flex flex-col items-start ml-2">
          {/* Small stars */}
          <div className="flex items-center">
            {renderStars(parseFloat(averageRating), "small")}
          </div>

          {/* Medium stars */}
          <div className="flex items-center mt-1">
            {renderStars(parseFloat(averageRating), "medium")}
          </div>

          {/* Large stars */}
          <div className="flex items-center mt-1">
            {renderStars(parseFloat(averageRating), "large")}
          </div>

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
    </div>
  );
};

export default RatingComponent;
