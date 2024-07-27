import React, { useState, useEffect } from "react";
import MarketPlaceImg from "../../assets/img/MarketPlace.png";
import { PrimaryButton } from "../../components/Button.js";
import "../../assets/styles/SetUpMarketPlace.css";

const EditMarketPlace = () => {
  // Sample state initialization for form values
  const [formData, setFormData] = useState({
    profileImage: null,
    coverImage: null,
    shopName: "",
    shopDescription: "",
    shopType: "",
    shopOwnerName: "",
    shopEmail: "",
    phoneNumber: "",
    physicalAddress: "",
    openingHoursStart: "",
    openingHoursEnd: "",
    verificationDoc: null,
  });

  // Load existing data (mocked here)
  useEffect(() => {
    // Mock function to fetch data
    const fetchData = async () => {
      // Replace this with actual data fetching logic
      const existingData = {
        profileImage: "existing-profile-image.png",
        coverImage: "existing-cover-image.png",
        shopName: "Existing Shop",
        shopDescription: "This is an existing shop description.",
        shopType: "Restaurant",
        shopOwnerName: "Owner Name",
        shopEmail: "owner@example.com",
        phoneNumber: "123-456-7890",
        physicalAddress: "123 Existing St, City, Country",
        openingHoursStart: "08:00",
        openingHoursEnd: "17:00",
        verificationDoc: "existing-verification-doc.png",
      };

      setFormData(existingData);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const [docUploaded, setDocUploaded] = useState(false);
  const [document, setDocument] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDocument(file);
      setDocUploaded(true);
    }
  };

  const handleEdit = () => {
    setDocUploaded(false);
    setDocument(null);
  };

  return (
    <div className="isolate px-5 py-18 sm:py-6 lg:px-6">
      <div className="flex flex-col lg:flex-row mx-auto mt-0 max-w-6xl">
        {/* Image Section */}
        <div className="w-full lg:w-2/4 flex justify-center items-center mb-5">
          <img
            src={MarketPlaceImg}
            style={{
              position: "fixed",
              width: "43vw",
              height: "90vh",
              left: "0vw",
              top: "10vh",
            }}
            alt="Market Place"
            className="w-auto h-auto" // Adjust the negative margin-top as needed
          />
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-2/3 bg-white p-5 rounded-xl shadow-lg border-2 border-[#6DA5C0]"
        >
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-10">
              <strong>Edit Market Place</strong>
            </h2>
          </div>

          <div className="space-y-6">
            {/* Profile Image Upload */}
            <div className="flex items-center gap-x-3 mb-0">
              <label
                htmlFor="profile-image"
                className="w-1/3 text-sm font-semibold leading-4 text-gray-900 mb-0"
              >
                <strong>Profile Image</strong>
              </label>
              <input
                id="profile-image"
                name="profileImage"
                type="file"
                onChange={handleChange}
                style={{
                  borderColor: "#6DA5C0",
                  outlineColor: "#0F969C",
                }}
                className="flex-1 rounded-md mt-1 border-2 px-2.5 py-0.5 text-gray-900 shadow-sm bg-[#E7E7E7] placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4 mb-"
                placeholder="Upload an image (e.g., logo)"
              />
            </div>

            <p className="text-sm text-gray-600 ml-60">
              *Add a logo or an image that represents your brand to help
              travelers recognize your shop.
            </p>

            {/* Cover Image Upload */}
            <div className="flex items-center gap-x-3 mb-0.5">
              <label
                htmlFor="cover-image"
                className="w-1/3 text-sm font-semibold leading-4 text-gray-900 "
              >
                <strong>Cover Image</strong>
              </label>
              <input
                id="cover-image"
                name="coverImage"
                type="file"
                onChange={handleChange}
                style={{
                  borderColor: "#6DA5C0",
                  outlineColor: "#0F969C",
                }}
                className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm bg-[#E7E7E7] placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                placeholder="Upload a cover image"
              />
            </div>
            <p className="text-sm text-gray-600 ml-60">
              *Upload a cover image to make your shop more appealing. This image
              will be prominently displayed on your shop's page.
            </p>

            {/* Basic Info */}
            <div className="border-t border-gray-300 pt-4">
              <h3 className="text-lg font-bold mb-0.5">
                <strong>Basic Info</strong>
              </h3>
              {/* Shop Name */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="shop-name"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Shop Name
                </label>
                <input
                  id="shop-name"
                  name="shopName"
                  type="text"
                  value={formData.shopName}
                  onChange={handleChange}
                  autoComplete="organization"
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 bg-[#E7E7E7] focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  placeholder="Enter shop name"
                />
              </div>

              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="shop-description"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Shop Description
                </label>
                <textarea
                  id="shop-description"
                  name="shopDescription"
                  rows={3}
                  value={formData.shopDescription}
                  onChange={handleChange}
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm bg-[#E7E7E7] placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  placeholder="Describe your shop"
                />
              </div>

              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="shop-type"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Shop Type
                </label>
                <input
                  id="shop-type"
                  name="shopType"
                  type="text"
                  value={formData.shopType}
                  onChange={handleChange}
                  autoComplete="organization"
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="border-t border-gray-300 pt-4">
              <h3 className="text-lg font-bold mb-0.5">
                <strong>Contact Info</strong>
              </h3>
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="shop-owner-name"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Shop Owner Name
                </label>
                <input
                  id="shop-owner-name"
                  name="shopOwnerName"
                  type="text"
                  value={formData.shopOwnerName}
                  onChange={handleChange}
                  autoComplete="name"
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm  bg-[#E7E7E7] placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  placeholder="Enter owner name"
                />
              </div>

              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="shop-email"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Shop Email
                </label>
                <input
                  id="shop-email"
                  name="shopEmail"
                  type="email"
                  value={formData.shopEmail}
                  onChange={handleChange}
                  autoComplete="email"
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm bg-[#E7E7E7] placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  placeholder="Enter email address"
                />
              </div>

              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="phone-number"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Phone Number
                </label>
                <input
                  id="phone-number"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  autoComplete="tel"
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm bg-[#E7E7E7] placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  placeholder="Enter phone number"
                />
              </div>

              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="physical-address"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Physical Address
                </label>
                <input
                  id="physical-address"
                  name="physicalAddress"
                  type="text"
                  value={formData.physicalAddress}
                  onChange={handleChange}
                  autoComplete="street-address"
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm bg-[#E7E7E7] placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  placeholder="Enter physical address"
                />
              </div>
            </div>

            {/* Opening Hours */}
            <div className="border-t border-gray-300 pt-4">
              <h3 className="text-lg font-bold mb-0.5">
                <strong>Opening Hours</strong>
              </h3>
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="opening-hours-start"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900 "
                >
                  Start Time
                </label>
                <input
                  id="opening-hours-start"
                  name="openingHoursStart"
                  type="time"
                  value={formData.openingHoursStart}
                  onChange={handleChange}
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm bg-[#E7E7E7] placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                />
              </div>

              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="opening-hours-end"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  End Time
                </label>
                <input
                  id="opening-hours-end"
                  name="openingHoursEnd"
                  type="time"
                  value={formData.openingHoursEnd}
                  onChange={handleChange}
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm bg-[#E7E7E7] placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                />
              </div>
            </div>

            <div className="pt-4 mb-4 border-t border-black">
              <h3 className="text-lg font-bold mb-2">
                <strong>Verification Document</strong>
              </h3>
              <div className="flex items-center gap-x-3 mb-4">
                <label
                  htmlFor="verification-doc"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  <strong>Verification</strong>
                </label>
                <input
                  id="verification-doc"
                  name="verificationDoc"
                  type="file"
                  onChange={handleFileChange}
                  disabled={docUploaded}
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  placeholder="Upload a document verifying your marketplace"
                />
              </div>
              {docUploaded && (
                <div className="flex items-center gap-x-3 mb-4">
                  <p className="text-sm text-gray-600">
                    Document uploaded: {document.name}
                  </p>
                  <button
                    onClick={handleEdit}
                    className="ml-4 bg-[#0F969C] text-white py-1 px-2 rounded hover:bg-[#0D8A8C] focus:outline-none focus:ring-2 focus:ring-[#0F969C]"
                  >
                    Edit
                  </button>
                </div>
              )}
              <p className="text-sm text-gray-600 ml-60">
                *Upload a document or photo that verifies your association with
                this marketplace.
              </p>
            </div>

            {/* Save Changes Button */}
            <div className="flex justify-end space-x-4">
              <PrimaryButton
                name="Back"
                // action={handleSubscribeClick}
                isActive={false}
              />
              <PrimaryButton
                name="Save changes"
                // action={editProfileClicked}
                isActive={true}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMarketPlace;
