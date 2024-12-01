import React, { useState, useEffect } from "react";
import { PrimaryButton } from "../../components/Button.js";
import "../../assets/styles/SetUpMarketPlace.css";
import { useNavigate, useParams } from "react-router-dom";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import Header from "../../components/header.js";
import SidebarComponentAdmin from "./SidebarComponentAdmin";

const AdminEditSubscriptionPlan = () => {
  const navigate = useNavigate();
  const { planId } = useParams(); // Get plan ID from URL params

  const [features, setFeatures] = useState([
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4",
  ]);
  const [formData, setFormData] = useState({
    planName: "Basic Plan",
    amount: 9.99,
    description: "Basic subscription for essential features.",
  });

  const [initialData, setInitialData] = useState({}); // Store initial data for comparison

  useEffect(() => {
    // Simulate fetching existing plan data (replace with actual API call)
    setInitialData({
      planName: "Basic Plan",
      amount: 9.99,
      description: "Basic subscription for essential features.",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    });
  }, [planId]);

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

    // Check for changes before sending update request
    const hasChanged =
      JSON.stringify(initialData) !== JSON.stringify(submissionData);

    if (hasChanged) {
      // Replace with your actual API call to update plan data
      fetch(`/api/plans/${planId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Updated Data:", data);
          alert("Subscription Plan Updated Successfully!");
        })
        .catch((error) => {
          console.error("Error updating plan:", error);
          alert("An error occurred. Please try again.");
        });
    } else {
      alert("No changes detected. Nothing to update.");
    }
  };

  return (
    <>
      <Header type="admin" profilePic={HotelProfileImg} funtion={() => {}} />
      <div className="relative flex items-center justify-center h-[87.5vh]">
        <SidebarComponentAdmin />
        <div className="w-full lg:w-2/3 bg-white p-5 rounded-xl shadow-lg border-2 border-[#6DA5C0] max-w-3xl mt-40">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-4">
              <strong>Edit Subscription Plan</strong>
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

export default AdminEditSubscriptionPlan;
