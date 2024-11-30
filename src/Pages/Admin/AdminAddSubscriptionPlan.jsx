import React, { useState } from "react";
import { PrimaryButton } from "../../components/Button.js";
import "../../assets/styles/SetUpMarketPlace.css";
import { useNavigate } from "react-router-dom";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import Header from "../../components/header.js";

const AdminAddSubscriptionPlan = () => {
  const navigate = useNavigate();
  const [features, setFeatures] = useState([""]);
  const [formData, setFormData] = useState({
    planName: "",
    amount: "",
    description: "",
  });

  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...features];
    updatedFeatures[index] = value;
    setFeatures(updatedFeatures);
  };

  const addFeature = () => setFeatures([...features, ""]);

  const removeFeature = (index) => {
    const updatedFeatures = features.filter((_, i) => i !== index);
    setFeatures(updatedFeatures);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = { ...formData, features };
    console.log("Submitted Data:", submissionData);
    alert("Subscription Plan Created Successfully!");
  };

  return (
    <>
      <Header
        type="serviceprovider"
        profilePic={HotelProfileImg}
        funtion={() => {}}
      />
      <div className="relative flex items-center justify-center h-[87.5vh]">
        <div className="w-full lg:w-2/3 bg-white p-5 rounded-xl shadow-lg border-2 border-[#6DA5C0] max-w-3xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-4">
              <strong>Create New Subscription Plan</strong>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Plan Name */}
            <div className="flex items-center gap-x-3 mb-2">
              <label
                htmlFor="plan-name"
                className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
              >
                Plan Name
              </label>
              <input
                id="plan-name"
                name="planName"
                type="text"
                className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-white shadow-sm sm:text-xs"
                value={formData.planName}
                onChange={handleChange}
                placeholder="Enter plan name"
                required
              />
            </div>

            {/* Amount */}
            <div className="flex items-center gap-x-3 mb-2">
              <label
                htmlFor="amount"
                className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
              >
                Amount ($)
              </label>
              <input
                id="amount"
                name="amount"
                type="number"
                className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-white shadow-sm sm:text-xs"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                required
              />
            </div>

            {/* Description */}
            <div className="flex items-center gap-x-3 mb-2">
              <label
                htmlFor="description"
                className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-white shadow-sm sm:text-xs"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter description"
                rows="3"
                required
              ></textarea>
            </div>

            {/* Features */}
            <div className="border-t border-gray-300 pt-4">
              <label className="block text-sm font-semibold leading-4 text-gray-900 mb-2">
                Features
              </label>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-x-2 mb-2">
                  <input
                    type="text"
                    className="flex-1 rounded-md border-2 border-[#6DA5C0] px-2.5 py-1 text-gray-900 bg-white shadow-sm sm:text-xs"
                    placeholder={`Feature ${index + 1}`}
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700 text-sm"
                    onClick={() => removeFeature(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="text-blue-500 hover:text-blue-700 text-sm mt-2"
                onClick={addFeature}
              >
                + Add Feature
              </button>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 mt-2">
              <PrimaryButton
                name="Back"
                action={handleBackClick}
                isActive={true}
              />
              <PrimaryButton
                name="Save"
                action={handleButtonClick}
                isActive={false}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminAddSubscriptionPlan;
