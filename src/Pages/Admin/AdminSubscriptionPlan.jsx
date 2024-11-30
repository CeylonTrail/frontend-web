import React, { useState } from "react";
import "../../assets/styles/AdminSubscriptionPlan.css"; // Import the CSS file
import { PrimaryButton } from "../../components/Button.js"; // Import the PrimaryButton component
import { useNavigate } from "react-router-dom";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import Header from "../../components/header.js";
import PlusImg from "../../assets/img/plus.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Import the FontAwesome arrow icon
import SidebarComponentAdmin from "./SidebarComponentAdmin"; // Import the Sidebar component

const AdminSubscriptionPlan = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null); // Track hovered/touched card

  const handleCardHover = (cardName) => {
    setHoveredCard(cardName);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleNextClick = () => {
    navigate("/admin-addplan");
  };

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleEditClick = (plan) => {
    navigate("/admin-editplan");
  };

  const handleDeleteClick = (plan) => {
    console.log(`Delete clicked for ${plan.name}`);
  };

  const plans = [
    {
      name: "Bronze",
      price: "LKR 00",
      features: [
        "2 ad slots/month",
        "Profile visibility to travelers",
        "Ability to follow and be followed",
        "Access to analytics",
      ],
      description:
        "Get started with basic visibility and essential features to connect with travelers easily and efficiently.",
    },
    {
      name: "Silver",
      price: "LKR 9,500",
      features: [
        "5 ad slots/month",
        "Profile visibility to travelers",
        "Access to analytics",
        "Can offer promotions",
      ],
      description:
        "Increase your visibility and engagement with more ad slots and promotional opportunities.",
    },
    {
      name: "Gold",
      price: "LKR 17,500",
      features: [
        "20 ad slots/month",
        "Profile visibility to travelers",
        "Access to analytics",
        "Can offer promotions",
      ],
      description:
        "Maximize your exposure and customer interaction with enhanced ad slots and advanced features.",
    },
  ];

 return (
   <div className="flex flex-col min-h-screen">
     <Header type="admin" profilePic={HotelProfileImg} funtion={() => {}} />
     <div className="flex flex-1 mt-14">
       <SidebarComponentAdmin />
       <div className="admin-subscription-plan-container relative ml-80 mt-6 overflow-auto h-[87.5vh] ml-6 w-[80%] fixed right-2">
         <div className="admin-subscription-plan-box">
           <div className="admin-title-container flex items-center mb-4">
             <button
               className="back-button flex items-center text-blue-500 hover:text-blue-700 transition duration-200"
               onClick={handleBackClick}
             >
               <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
             </button>
             <p className="admin-title-text ml-4">Current Plans are here!</p>
           </div>

           {/* Add New Plan Button - Positioned Absolutely */}
           <div className="absolute top-4 right-8">
             <div
               className="add-plan-card flex items-center cursor-pointer px-4 py-2 text-center"
               onClick={handleNextClick}
             >
               <img
                 style={{ width: "40px", height: "40px" }} // Adjust size if necessary
                 className="mr-2"
                 src={PlusImg}
                 alt="Add New Plan"
               />
               <span className="text-lg font-bold">ADD NEW PLAN</span>
             </div>
           </div>

           <div className="admin-pricing-cards flex flex-wrap gap-4 justify-center items-center mt-12">
             {plans.map((plan) => (
               <div
                 key={plan.name}
                 className={`admin-pricing-card relative ${
                   hoveredCard === plan.name ? "admin-pricing-card-hovered" : ""
                 }`}
                 onMouseEnter={() => handleCardHover(plan.name)}
                 onMouseLeave={handleCardLeave}
                 onClick={() => handleCardHover(plan.name)}
               >
                 <div className="admin-pricing-card-header">
                   <a
                     href="#"
                     aria-describedby={`tier-${plan.name.toLowerCase()}`}
                     className="admin-pricing-card-design"
                   >
                     {plan.name}
                   </a>
                 </div>
                 <div className="admin-pricing-card-inner admin-pricing-card-inner-sm">
                   <div className="admin-pricing-card-price">
                     <span>{plan.price}</span>
                     <span2>/month</span2>
                   </div>
                   <p className="admin-pricing-card-description">
                     {plan.description}
                   </p>
                 </div>
                 <div className="admin-pricing-card-features">
                   <ul role="list" className="space-y-6">
                     {plan.features.map((feature, index) => (
                       <li key={index} className="flex items-start">
                         <p className="admin-pricing-card-feature">
                           <span className="admin-feature-icon">✔</span>
                           {feature}
                         </p>
                       </li>
                     ))}
                   </ul>
                 </div>
                 {hoveredCard === plan.name && (
                   <div className="admin-pricing-card-buttons flex flex-col items-center gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
                     <PrimaryButton
                       name="Edit"
                       action={() => handleEditClick(plan)}
                       isActive={false}
                     />
                     <PrimaryButton
                       name="Delete"
                       action={() => handleDeleteClick(plan)}
                       isActive={true}
                     />
                   </div>
                 )}
               </div>
             ))}
           </div>
         </div>
       </div>
     </div>
   </div>
 );

};

export default AdminSubscriptionPlan;
