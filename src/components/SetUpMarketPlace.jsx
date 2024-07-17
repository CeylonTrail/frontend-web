import React from "react";
import MarketPlaceImg from "../assets/img/MarketPlace.png";

const SetUpMarketPlace = () => {
  return (
    <div className="isolate bg-[#E7E7E7] px-5 py-18 sm:py-6 lg:px-6">
      <div className="flex flex-col lg:flex-row mx-auto mt-0 max-w-6xl">
        {/* Image Section */}
        <div className="w-full lg:w-2/4 flex justify-center items-center mb-5">
          <img
            src={MarketPlaceImg}
            style={{ position: "fixed", width: "43vw", height: "90vh",left:'0vw', top:'10vh' }}
            alt="Market Place"
            className="w-auto h-auto " // Adjust the negative margin-top as needed
          />
        </div>

        {/* Form Section */}
        <form
          action="#"
          method="POST"
          className="w-full lg:w-2/3 bg-white p-5 rounded-xl shadow-lg border-2 border-[#6DA5C0]"
        >
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-10">
              <strong>Set up a Market Place</strong>
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
                name="profile-image"
                type="file"
                style={{
                  borderColor: "#6DA5C0",
                  outlineColor: "#0F969C",
                }}
                className="flex-1 rounded-md mt-1 border-2 px-2.5 py-0.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4 mb-"
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
                className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
              >
                <strong>Cover Image</strong>
              </label>
              <input
                id="cover-image"
                name="cover-image"
                type="file"
                style={{
                  borderColor: "#6DA5C0",
                  outlineColor: "#0F969C",
                }}
                className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
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
                  name="shop-name"
                  type="text"
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
                  name="shop-description"
                  rows={3}
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
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
                  name="shop-type"
                  type="text"
                  autoComplete="organization"
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  placeholder="e.g., Cafe, Boutique"
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
                  name="shop-owner-name"
                  type="text"
                  autoComplete="name"
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  placeholder="Enter your name"
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
                  name="shop-email"
                  type="email"
                  autoComplete="email"
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  placeholder="you@example.com"
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
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  placeholder="123-456-7890"
                />
              </div>

              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="physical-address"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Physical Address
                </label>
                <textarea
                  id="physical-address"
                  name="physical-address"
                  rows={3}
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  placeholder="123 Main St, City, Country"
                />
              </div>
            </div>

            {/* Location */}
            <div className="border-t border-gray-300 pt-4">
              <h3 className="text-lg font-bold mb-0.5">
                <strong>Opening hours</strong>
              </h3>
              <div className="flex flex-col gap-y-3 mb-0.5">
                <div className="flex items-center gap-x-3 mb-0.5">
                  <span className="text-sm font-semibold leading-4 text-gray-900 w-1/3">
                    From
                  </span>
                  <input
                    id="opening-hours-start"
                    name="opening-hours-start"
                    type="time"
                    style={{
                      borderColor: "#6DA5C0",
                      outlineColor: "#0F969C",
                    }}
                    className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  />
                </div>
                <div className="flex items-center gap-x-3 mb-2">
                  <span className="text-sm font-semibold leading-4 text-gray-900 w-1/3">
                    To
                  </span>
                  <input
                    id="opening-hours-end"
                    name="opening-hours-end"
                    type="time"
                    style={{
                      borderColor: "#6DA5C0",
                      outlineColor: "#0F969C",
                    }}
                    className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-3">
            <button className="bg-[#0F969C] hover:bg-[#0D8A8C] text-white font-bold py-1.5 px-3.5 rounded-full">
              Reset
            </button>
            <button className="bg-[#0F969C] hover:bg-[#0D8A8C] text-white font-bold py-1.5 px-3.5 rounded-full">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetUpMarketPlace;
