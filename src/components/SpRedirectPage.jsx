import React from "react";
import { useNavigate } from "react-router-dom";
import MarketPlaceBackgroundImg from "../assets/img/MarketPlaceBackground.jpg";

const SpRedirectPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/set-market");
  };

  return (
    <div className="bg-[#E7E7E7] flex items-center justify-center p-10 pt-32">
      <div
        className="bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${MarketPlaceBackgroundImg})`,
          height: "585px",
          width: "1500px",
        }}
      >
        <div
          className="absolute bg-white border border-[#0C7075] rounded-lg"
          style={{
            height: "230px",
            width: "650px",
            top: "150px",
            left: "78px",
            borderWidth: "4px",
            padding: "20px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2
                  className="text-[#0F969C] text-4xl font-extrabold"
                  style={{ fontFamily: "Poppins" }}
                >
                  Set Up a Market Place
                </h2>
                <button
                  className="bg-[#0F969C] hover:bg-[#0D8A8C] text-white text-sm font-bold py-1 px-3 rounded-full transition-colors"
                  onClick={handleButtonClick}
                >
                  + Create Marketplace
                </button>
              </div>
              <p
                className="text-gray-700 mt-2"
                style={{ fontFamily: "Poppins" }}
              >
                Make Your Business Shine on{" "}
                <span className="text-[#0F969C]">CeylonTrail!</span> Customers
                love supporting original businesses. Tell them your story,
                showcase your unique offerings, and share your social media
                links. Let your authenticity shine through and connect with
                travelers in a meaningful way. Stand out and make your mark!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpRedirectPage;
