import React from "react";
import { useNavigate } from "react-router-dom";
import MarketPlaceBackgroundImg from "../../assets/img/MarketPlaceBackground.jpg";
import "../../assets/styles/SpRedirectPage.css"; // Import the CSS file
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import Header from "../../components/header.js";

const SpRedirectPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/set-market");
  };

  return (
    <>
      <Header type="serviceprovider" profilePic={HotelProfileImg} />

      <div className="bg-[#E7E7E7] flex items-center justify-center p-10 mt-16">
        <div
          className="sp-redirect-background"
          style={{ backgroundImage: `url(${MarketPlaceBackgroundImg})` }}
        >
          <div className="sp-redirect-card">
            <div className="sp-redirect-header">
              <h2 className="sp-redirect-title">Set Up a Market Place</h2>
              <button
                className="sp-redirect-button"
                onClick={handleButtonClick}
              >
                + Create Marketplace
              </button>
            </div>
            <p className="sp-redirect-description">
              Make Your Business Shine on{" "}
              <span className="highlight-text">CeylonTrail!</span> Customers
              love supporting original businesses. Tell them your story,
              showcase your unique offerings, and share your social media links.
              Let your authenticity shine through and connect with travelers in
              a meaningful way. Stand out and make your mark!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpRedirectPage;
