import React, { useState } from "react";
import Slider from "react-slick";
import "../../assets/styles/SPReviews.css"; // Import the CSS file
import "../../assets/styles/form.css"; // Import the CSS file

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfAlt, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Modal from "react-modal";
import cancelImg from "../../assets/img/cancel.png"; // Adjust path as needed
import { useNavigate } from "react-router-dom"; // Use useNavigate hook

const reviews = [
  {
    name: "Kumar Sangakkara",
    img: "https://i.pravatar.cc/100?img=7",
    text: "Excellent hotel with superb amenities and very friendly staff. The rooms were clean and well-maintained. Would love to visit again!",
    rating: 4,
  },
  {
    name: "Muthumani Rajapakse",
    img: "https://i.pravatar.cc/100?img=8",
    text: "Had a wonderful stay. The food was delicious, and the service was top-notch. Highly recommended!",
    rating: 4,
  },
  {
    name: "Chamari Atapattu",
    img: "https://i.pravatar.cc/100?img=9",
    text: "A great place to relax and unwind. The spa services were fantastic. The overall experience was very satisfying.",
    rating: 4,
  },
  {
    name: "Namal Perera",
    img: "https://i.pravatar.cc/100?img=10",
    text: "Loved the ambiance and the hospitality. The location is perfect, and the staff was very courteous. Will definitely come back.",
    rating: 5,
  },
  {
    name: "Dilshan Gunawardene",
    img: "https://i.pravatar.cc/100?img=11",
    text: "A truly luxurious experience. The rooms are spacious and the view is breathtaking. The staff went out of their way to make our stay comfortable.",
    rating: 5,
  },
  {
    name: "Shanika Fernando",
    img: "https://i.pravatar.cc/100?img=12",
    text: "Great value for money. The facilities were excellent, and the staff was very helpful. Had a pleasant stay.",
    rating: 5,
  },
  {
    name: "Hiruni Ratnayake",
    img: "https://i.pravatar.cc/100?img=13",
    text: "One of the best hotels I've stayed at. The food, the service, everything was perfect. Highly recommend it to everyone.",
    rating: 5,
  },
  {
    name: "Sunil Wijesinghe",
    img: "https://i.pravatar.cc/100?img=14",
    text: "Amazing experience! The rooms are clean, and the staff is very friendly. Would definitely recommend this hotel.",
    rating: 5,
  },
];

const NextArrow = ({ onClick }) => (
  <div className="spreview-arrow spreview-next" onClick={onClick}>
    &gt;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="spreview-arrow spreview-prev" onClick={onClick}>
    &lt;
  </div>
);

const StarRating = ({ rating, onRatingChange }) => {
  return (
    <div className="spreview-star-rating">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`spreview-star ${index < rating ? "filled" : ""}`}
          onClick={() => onRatingChange(index + 1)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const SPReviews = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = () => {
    console.log("Rating:", rating);
    console.log("Review:", review);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const goBackButtonClick = () => {
    navigate("/hotel-tr-view"); // Use navigate for redirection
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="spreview-container">
      <div className="spreview-back-button" onClick={goBackButtonClick}>
        <FontAwesomeIcon icon={faArrowLeft} size="2x" color="#0F969C" />
      </div>
      <div className="spreview-card-container">
        <div className="spreview-content">
          <div className="spreview-header">
            <h1 className="spreview-heading">What people are saying.</h1>
            <h3 className="spreview-subheading">
              Check out our guests' reviews and discover their memorable
              experiences!
            </h3>
            <div className="spreview-separator">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`spreview-review-card ${
                  expandedIndex === index ? "expanded" : ""
                }`}
                onClick={() => handleCardClick(index)}
              >
                <div className="spreview-review-header">
                  <div className="spreview-review-img">
                    <img src={review.img} alt={review.name} />
                  </div>
                  <div className="spreview-review-author">
                    <h6>{review.name}</h6>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <div className="spreview-review-text">
                  <p>{review.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="spreview-floating-button">
        <a
          aria-label="Leave Feedback"
          onClick={toggleModal}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faStarHalfAlt} size="2x" color="#ffffff" />
          <span className="review-text">Give your review</span>
        </a>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={toggleModal}
        contentLabel="Rating Modal"
        className="modal-overlay"
        overlayClassName="modal-overlay-bg"
      >
        <div
          className="boost-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <h2 className="modal-title">Rate and Review</h2>
            <div className="heading-line"></div>
            <img
              src={cancelImg}
              alt="Close"
              className="modal-close-icon"
              onClick={toggleModal}
            />
          </div>
          <form
            className="modal-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
              toggleModal();
            }}
          >
            <div className="form-group center-stars">
              <div className="flex items-center mb-4">
                <StarRating
                  rating={rating}
                  onRatingChange={handleRatingChange}
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                className="form-textarea"
                rows="4"
                placeholder="Write your review here..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
            </div>
            <div className="modal-footer">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default SPReviews;
