import React, { useState } from "react";
import "../../assets/styles/SubscriptionPlan.css"; // Import the CSS file
import { PrimaryButton } from "../../components/Button"; // Import the PrimaryButton component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Import the arrow icon
import { useNavigate } from "react-router-dom";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import Header from "../../components/header.js";

const SubscriptionPlan = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleArrowClick = () => {
    navigate("/hotel-sp-view");
  };

  const handleNextClick = () => {
    // Handle the action for the Next button
    console.log("Next button clicked");
  };

  const plans = [
    {
      name: "Bronze",
      price: "LKR 00",
      features: [
        "2 ad slots/month",
        "Profile visibility to travelers",
        "Ability to follow and be followed",
        "Can get rated by traveller",
      ],
      description:
        "Get started with basic visibility and essential features to connect with travelers easily and efficiently.",
    },
    {
      name: "Silver",
      price: "LKR 2000",
      features: [
        "1000+ Unique Story Structures",
        "Profile visibility to travelers",
        "Ability to follow and be followed",
        "Can get rated by traveller",
      ],
      description:
        "Increase your visibility and engagement with more ad slots and promotional opportunities.",
    },
    {
      name: "Gold",
      price: "LKR 3000",
      features: [
        "1500+ Unique Story Structures",
        "Profile visibility to travelers",
        "Ability to follow and be followed",
        "Can get rated by traveller",
      ],
      description:
        " Maximize your exposure and customer interaction with very enhanced ad slots and advanced features.",
    },
    {
      name: "Platinum",
      price: "LKR 5500",
      features: [
        "2000+ Unique Story Structures",
        "Profile visibility to travelers",
        "Ability to follow and be followed",
        "Can get rated by traveller",
      ],
      description:
        "Achieve top-tier visibility and engagement with the highest number of ad slots and exclusive features.",
    },
  ];

  return (
    <>
      <Header
        type="serviceprovider"
        profilePic={HotelProfileImg}
        funtion={() => {}}
      />
      <div className="subscription-plan-container relative mt-20 fixed overflow-auto h-[87.5vh] ml-6 ">
        <div className="subscription-plan-box">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="back-arrow"
            onClick={handleArrowClick}
          />
          <p className="step-text">STEP 1 OF 2</p>
          <p className="title-text">Choose the plan that’s right for you!</p>
          <div className="pricing-cards">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card ${
                  selectedCard === plan.name.toLowerCase() ? "selected" : ""
                }`}
                onClick={() => handleCardClick(plan.name.toLowerCase())}
              >
                <div className="pricing-card-header">
                  <a
                    href="#"
                    aria-describedby={`tier-${plan.name.toLowerCase()}`}
                    className="pricing-card-design"
                  >
                    {plan.name}
                  </a>
                </div>
                <div className="pricing-card-inner pricing-card-inner-sm">
                  <div className="pricing-card-price">
                    <span> {plan.price} </span>
                    <span2>/month</span2>
                  </div>
                  <p className="pricing-card-description">{plan.description}</p>
                </div>
                <div className="pricing-card-features">
                  <ul role="list" className="space-y-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <p className="pricing-card-feature">
                          <span className="feature-icon">✔</span>
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="next-button-container">
            <PrimaryButton
              name="NEXT"
              action={handleNextClick}
              isActive={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPlan;
