import React, { useState } from "react";
import MarketPlaceImg from "../../assets/img/MarketPlace.png";
import { PrimaryButton } from "../../components/Button";
import "../../assets/styles/SetUpMarketPlace.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faCheckCircle,
  faClock,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";


const EditMarketPlace = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/hotel-sp-view");
  };

  const handleBackClick = () => {
    console.log("Back button clicked");
    navigate("/hotel-sp-view");
  };

  
  const initialDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const initialSocialMedia = [
    { name: "Facebook", icon: faFacebook, color: "#3b5998" },
    { name: "Instagram", icon: faInstagram, color: "#E1306C" },
    { name: "Twitter", icon: faTwitter, color: "#1DA1F2" },
    { name: "LinkedIn", icon: faLinkedin, color: "#0077b5" },
    { name: "YouTube", icon: faYoutube, color: "#FF0000" },
    { name: "Website", icon: faGlobe, color: "#000000" },
  ];

  const [selectedDays, setSelectedDays] = useState(["Monday", "Wednesday"]); // Preselected days
  const [selectedSocialMedia, setSelectedSocialMedia] = useState([
    "Facebook",
    "Instagram",
  ]); // Preselected social media

  const [daysTimes, setDaysTimes] = useState({
    Monday: { from: "09:00", to: "17:00" },
    Wednesday: { from: "09:00", to: "17:00" },
  }); // Prefilled data

  const [socialMediaLinks, setSocialMediaLinks] = useState({
    Facebook: "https://facebook.com/example",
    Instagram: "https://instagram.com/example",
  }); // Prefilled data

  const handleDayChange = (day, field, value) => {
    setDaysTimes({
      ...daysTimes,
      [day]: { ...daysTimes[day], [field]: value },
    });
  };

  const handleSocialMediaUrlChange = (name, url) => {
    setSocialMediaLinks({
      ...socialMediaLinks,
      [name]: url,
    });
  };

  const handleDayCheckboxChange = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSocialMediaCheckboxChange = (name) => {
    setSelectedSocialMedia((prev) =>
      prev.includes(name) ? prev.filter((sm) => sm !== name) : [...prev, name]
    );
  };

  const renderVerificationIcon = (status) => {
    switch (status) {
      case "Verified":
        return (
          <FontAwesomeIcon icon={faCheckCircle} className="verified-icon" />
        );
      case "Pending":
        return <FontAwesomeIcon icon={faClock} className="pending-icon" />;
      case "Rejected":
        return (
          <FontAwesomeIcon icon={faTimesCircle} className="rejected-icon" />
        );
      default:
        return null;
    }
  };

  const [verificationStatus, setVerificationStatus] = useState("Verified"); // Verification status

  return (
    <div className="isolate bg-[#E7E7E7] px-5 py-18 lg:px-6 mt-16 mb-4">
      <div className="flex flex-col lg:flex-row mx-auto mt-0 max-w-6xl ">
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
            className="w-auto h-auto"
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

            {/* Marketplace Info */}
            <div className="border-t border-gray-300 pt-4">
              <h3 className="text-lg font-bold mb-0.5">
                <strong>Marketplace Info</strong>
              </h3>
              {/* Shop Name */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="shop-name"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Name
                </label>
                <input
                  id="shop-name"
                  name="shop-name"
                  type="text"
                  autoComplete="organization"
                  readOnly
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4 bg-[#E7E7E7]"
                  placeholder="Enter shop name"
                  defaultValue="My Market Place"
                />
              </div>

              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="shop-description"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Description
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
                  placeholder="Enter shop description"
                  defaultValue="We offer a wide range of products to meet all your needs."
                />
              </div>

              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="service-type"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Service Type
                </label>
                <input
                  id="service-type"
                  name="service-type"
                  type="text"
                  readOnly
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md bg-[#E7E7E7] border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  placeholder="Enter service type"
                  defaultValue="Retail"
                />
              </div>

              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="address"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Email
                </label>
                <input
                  id="emsil"
                  name="email"
                  type="text"
                  readOnly
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 bg-[#E7E7E7] rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  placeholder="Enter email address"
                  defaultValue="bluehills@gmail.com"
                />
              </div>

              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="phone"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Contact Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  placeholder="Enter phone number"
                  defaultValue="+1 (555) 555-5555"
                />
              </div>
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="shop-description"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Physical Address
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
                  placeholder="Enter shop description"
                  defaultValue="No 35,Pereira lane, Col 6."
                />
              </div>
            </div>

            <div className="border-t border-gray-300 pt-4">
              <h3 className="text-lg font-bold mb-0.5">
                <strong>Service Provider Info</strong>
              </h3>

              {/* First Name */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="first-name"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  First Name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  placeholder="Enter first name"
                  defaultValue="John" // Prefilled value
                />
              </div>

              {/* Last Name */}
              <div className="flex items-center gap-x-3 mb-0.5">
                <label
                  htmlFor="last-name"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4 mb-4 mt-4"
                  placeholder="Enter last name"
                  defaultValue="Doe" // Prefilled value
                />
              </div>

              {/* Change Password */}
              <div className="border-t border-gray-300 pt-4">
                <h3 className="text-lg font-bold mb-0.5">
                  <strong>Change Password</strong>
                </h3>

                {/* Current Password */}
                <div className="flex items-center gap-x-3 mb-0.5">
                  <label
                    htmlFor="current-password"
                    className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                  >
                    Current Password
                  </label>
                  <input
                    id="current-password"
                    name="current-password"
                    type="password"
                    autoComplete="current-password"
                    style={{
                      borderColor: "#6DA5C0",
                      outlineColor: "#0F969C",
                    }}
                    className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                    placeholder="Enter current password"
                  />
                </div>

                {/* New Password */}
                <div className="flex items-center gap-x-3 mb-0.5">
                  <label
                    htmlFor="new-password"
                    className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                  >
                    New Password
                  </label>
                  <input
                    id="new-password"
                    name="new-password"
                    type="password"
                    autoComplete="new-password"
                    style={{
                      borderColor: "#6DA5C0",
                      outlineColor: "#0F969C",
                    }}
                    className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                    placeholder="Enter new password"
                  />
                </div>

                {/* Confirm New Password */}
                <div className="flex items-center gap-x-3 mb-0.5">
                  <label
                    htmlFor="confirm-password"
                    className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    autoComplete="new-password"
                    style={{
                      borderColor: "#6DA5C0",
                      outlineColor: "#0F969C",
                    }}
                    className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                    placeholder="Confirm new password"
                  />
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="border-t border-gray-300 pt-4">
              <h3 className="text-lg font-bold mb-0.5">
                <strong>Opening Hours</strong>
              </h3>
              {initialDays.map((day) => (
                <div key={day} className="flex items-center gap-x-3 mb-0.5">
                  <input
                    type="checkbox"
                    checked={selectedDays.includes(day)}
                    onChange={() => handleDayCheckboxChange(day)}
                    className="form-checkbox"
                  />
                  <label
                    htmlFor={`opening-hours-${day}`}
                    className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                  >
                    {day}
                  </label>
                  {selectedDays.includes(day) && (
                    <>
                      <input
                        id={`opening-hours-${day}-from`}
                        type="time"
                        value={daysTimes[day]?.from || ""}
                        onChange={(e) =>
                          handleDayChange(day, "from", e.target.value)
                        }
                        style={{
                          borderColor: "#6DA5C0",
                          outlineColor: "#0F969C",
                        }}
                        className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                      />
                      <span>-</span>
                      <input
                        id={`opening-hours-${day}-to`}
                        type="time"
                        value={daysTimes[day]?.to || ""}
                        onChange={(e) =>
                          handleDayChange(day, "to", e.target.value)
                        }
                        style={{
                          borderColor: "#6DA5C0",
                          outlineColor: "#0F969C",
                        }}
                        className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                      />
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="border-t border-gray-300 pt-4">
              <h3 className="text-lg font-bold mb-0.5">
                <strong>Social Media Links</strong>
              </h3>
              {initialSocialMedia.map(({ name, icon }) => (
                <div key={name} className="flex items-center gap-x-3 mb-0.5">
                  <input
                    type="checkbox"
                    checked={selectedSocialMedia.includes(name)}
                    onChange={() => handleSocialMediaCheckboxChange(name)}
                    className="form-checkbox"
                  />
                  <label
                    htmlFor={`social-media-${name}`}
                    className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                  >
                    {name}
                  </label>
                  {selectedSocialMedia.includes(name) && (
                    <input
                      id={`social-media-${name}`}
                      type="url"
                      value={socialMediaLinks[name] || ""}
                      onChange={(e) =>
                        handleSocialMediaUrlChange(name, e.target.value)
                      }
                      style={{
                        borderColor: "#6DA5C0",
                        outlineColor: "#0F969C",
                      }}
                      className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                      placeholder={`Enter ${name} URL`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Verification Status */}
            <div className="border-t border-gray-300 pt-4">
              <h3 className="text-lg font-bold mb-0.5">
                <strong>Verification Status</strong>
              </h3>
              <div className="flex items-center gap-x-2">
                {renderVerificationIcon(verificationStatus)}
                <p className="text-sm text-gray-900">{verificationStatus}</p>
              </div>
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMarketPlace;
