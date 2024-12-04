import React, { useState, useEffect } from "react";
import "../../assets/styles/SubscriptionPlan.css"; // Import the CSS file
import { PrimaryButton } from "../../components/Button"; // Import the PrimaryButton component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Import the arrow icon
import { useNavigate } from "react-router-dom";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import Header from "../../components/header.js";
import { get_subscriptions } from "../../API/sp.js";
import Loading from "../loading.js";

const SubscriptionPlan = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const [data, setData] = useState([]);

  const fetchSubscriptions = async () => {
    try {
      const response = await get_subscriptions();
      if (response.status === "success") {
        setData(response.data);
      } else if (response.status === "unauthorized") {
        localStorage.clear();
        navigate("/login");
      } else console.error(response.message);
    } catch (error) {
      console.error("Error fetching sp data:", error);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

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

  if (!data) {
    return <Loading />;
  }
  const plans = data;

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
                } ${plan.subscriptionId === 1 ? "disabled" : ""}`}
                onClick={
                  plan.subscriptionId !== 1
                    ? () => handleCardClick(plan.name.toLowerCase())
                    : undefined
                }
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
                    <span> LKR {plan.price} </span>
                    <span2>/Month</span2>
                  </div>
                  <p className="pricing-card-description">{plan.description}</p>
                </div>
                <div className="pricing-card-features">
                  <ul role="list" className="space-y-6">
                    <li className="flex items-start">
                      <p className="pricing-card-feature">
                        <span className="feature-icon">✔</span>
                        {plan.adCount} Publish Advertisements
                      </p>
                    </li>
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
