import React, { useState } from "react";
import "../../assets/styles/form.css";
import cancelImg from "../../assets/img/cancel.png";
import HotelCardImg from "../../assets/img/hotel-card.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const TrHotelModal = ({ isOpen, onRequestClose, roomDetails = {} }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [userRating, setUserRating] = useState(0);

  if (!isOpen) return null;

  const {
    title = "Luxury Suite",
    description = "This luxurious suite offers stunning views of the city, a king-sized bed, a spacious bathroom with a jacuzzi, and complimentary breakfast.",
    price = "250",
    rating = "4.5",
  } = roomDetails;

  const placeholderImages = new Array(5).fill(HotelCardImg);

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

  return (
    <>
      <div className="modal-overlay" onClick={onRequestClose}>
        <div
          className="modal-content-trhotelmodal"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <h2 className="modal-title">{title}</h2>
            <div className="heading-line"></div>
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
                    href="https://m.me/yourpage"
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

export default TrHotelModal;
