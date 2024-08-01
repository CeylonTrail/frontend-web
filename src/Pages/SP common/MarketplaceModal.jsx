import React, { useState } from "react";
import "../../assets/styles/form.css";
import cancelImg from "../../assets/img/cancel.png";
import DeluxeRoomImg from "../../assets/img/deluxeroom.png";
import DeluxeRoomImg1 from "../../assets/img/deluxeroom1.png";
import DeluxeRoomImg2 from "../../assets/img/deluxeroom2.png";
import DeluxeRoomImg3 from "../../assets/img/deluxeroom3.png";
import HotelProfileImg from "../../assets/img/hotel-profile.png"; // Import profile picture
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Use useNavigate for React Router v6+

const MarketplaceModal = ({ isOpen, onRequestClose, roomDetails = {} }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [userRating, setUserRating] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  if (!isOpen) return null;

  const {
    title = "Pearl of Lanka Inn",
    type = "Deluxe Rooms",
    description = "The Deluxe Rooms are perched on the fifth to seventh floors and combine the beauty and elegance of the charming city with meticulous design touches and sprawling spaces. Facing the Colombo cityscape, these Deluxe Rooms at The Kingsbury, one of the most luxurious 5 Star hotels in Colombo",
    price = "250",
    rating = "4.5",
  } = roomDetails;

  const placeholderImages = [
    DeluxeRoomImg,
    DeluxeRoomImg1,
    DeluxeRoomImg2,
    DeluxeRoomImg3,
  ];

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setLightboxOpen(true);
  };

  const handleLightboxClose = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  const handleRatingClick = (rate) => {
    console.log(`Selected rating: ${rate}`); // Debugging line
    setUserRating(rate);
  };

  const renderStars = (rating, size) => {
    return (
      <div className={`stars ${size}`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${userRating >= star ? "selected" : ""}`}
            onClick={() => handleRatingClick(star)}
            style={{ cursor: "pointer" }} // Add cursor pointer for better UX
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const handleProfilePicClick = () => {
    navigate("/hotel-tr-view"); // Redirect to the profile view page using navigate
  };

  return (
    <>
      <div className="modal-overlay" onClick={onRequestClose}>
        <div
          className="modal-content-trhotelmodal"
          onClick={(e) => e.stopPropagation()}
          style={{ position: "relative" }} // Position relative for absolute children
        >
          <div
            className="modal-header"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              marginRight: "45px"// Space below the profile section
            }}
          >
            <img
              src={HotelProfileImg}
              alt="Profile"
              onClick={handleProfilePicClick}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
                cursor: "pointer",
                marginLeft: "50px",
              }}
            />
            <div style={{ flex: 1 }}>
              <h2 className="modal-title">{title}</h2>
            </div>
            <img
              src={cancelImg}
              alt="Close"
              className="modal-close-icon"
              onClick={onRequestClose}
            />
          </div>
          <div className="modal-form">
            <div className="modal-body">
              <div className="form-group">
                <h3 className="form-label">Description</h3>
                <p className="form-text">{description}</p>
              </div>
              <div className="form-group">
                <h3 className="form-label">Type</h3>
                <p className="form-text">{type}</p>
              </div>
              <div className="form-group">
                <div
                  className="price-rating-container"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className="price-rating-details" style={{ flex: 1 }}>
                    <div className="form-row-start">
                      <h3 className="form-label">Price per Night:</h3>
                      <p className="form-text">${price}</p>
                    </div>
                    <div className="form-row-end">
                      <h3 className="form-label">Rating:</h3>
                      <p className="form-text">{rating} stars</p>
                    </div>
                  </div>
                  <div
                    className="rating-section"
                    style={{ marginLeft: "20px" }}
                  >
                    <h3 className="form-label">Rate this room:</h3>
                    {renderStars(userRating, "medium")}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <h3 className="form-label">Additional Images</h3>
                <div className="image-gallery">
                  {placeholderImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Room Image ${index + 1}`}
                      className="room-image"
                      onClick={() => handleImageClick(img)}
                    />
                  ))}
                </div>
              </div>
              <div className="form-group">
                <p
                  className="form-text"
                  style={{
                    textAlign: "center", // Center the text
                    marginBottom: "20px", // Space below the text
                  }}
                >
                  For inquiries, you can contact us via:
                </p>
                <div className="contact-info-trhotelmodal">
                  <a
                    href="mailto:contact@bluehills.com"
                    className="contact-link"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="lg"
                      className="fa-icon"
                    />{" "}
                    Email
                  </a>
                  <a
                    href="http://localhost:3000/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <FontAwesomeIcon
                      icon={faComments}
                      size="lg"
                      className="fa-icon"
                    />{" "}
                    Chat
                  </a>
                  <p className="form-text">
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      size="lg"
                      className="fa-icon"
                    />{" "}
                    +123 456 7890
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={handleLightboxClose}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="lightbox-image"
            />
            <img
              src={cancelImg}
              alt="Close"
              className="lightbox-close-icon"
              onClick={handleLightboxClose}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MarketplaceModal;
