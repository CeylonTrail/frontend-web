import React, { useState } from "react";
import "./SubscriptionPlan.css"; // Import the CSS file

const SubscriptionPlan = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
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
        "550+ Unique Story Structures",
        "100 AI Tokens/Month",
        "Unlimited AI Assistance",
        "Fine-Tuned Story Models",
      ],
    },
    {
      name: "Silver",
      price: "LKR 500",
      features: [
        "1000+ Unique Story Structures",
        "200 AI Tokens/Month",
        "Unlimited AI Assistance",
        "Fine-Tuned Story Models",
      ],
    },
    {
      name: "Gold",
      price: "LKR 1000",
      features: [
        "1500+ Unique Story Structures",
        "300 AI Tokens/Month",
        "Unlimited AI Assistance",
        "Fine-Tuned Story Models",
      ],
    },
    {
      name: "Platinum",
      price: "LKR 1500",
      features: [
        "2000+ Unique Story Structures",
        "400 AI Tokens/Month",
        "Unlimited AI Assistance",
        "Fine-Tuned Story Models",
      ],
    },
  ];

  return (
    <div className="subscription-plan-container">
      <div className="subscription-plan-box">
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
                <p className="pricing-card-description">
                  Get started with basic visibility and essential features to
                  connect with travelers.
                </p>
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
          <button className="next-button" onClick={handleNextClick}>
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
