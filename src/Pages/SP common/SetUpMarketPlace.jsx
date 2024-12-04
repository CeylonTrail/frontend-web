import React, { useState } from "react";
import MarketPlaceImg from "../../assets/img/MarketPlace.png";
import { PrimaryButton } from "../../components/Button";
import "../../assets/styles/SetUpMarketPlace.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {set_marketplace} from "../../API/sp.js";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Header from "../../components/header.js";
import HotelProfileImg from "../../assets/img/hotel-profile.png";

const SetUpMarketPlace = () => {
  const navigate = useNavigate();

  const serviceName = localStorage.getItem('serviceName');
  const serviceType = localStorage.getItem('serviceType');

  const [description, setDescription] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [selectedDays, setSelectedDays] = useState({});
  const [selectedSocialMedia, setSelectedSocialMedia] = useState([]);
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);
  const [verificationDoc, setVerificationDoc] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const transformOpeningHours = () => {
      return Object.entries(selectedDays)
        .filter(([day, times]) => times)
        .map(([day, times]) => ({
          day,
          startTime: times.from,
          endTime: times.to,
        }));
    };
  
    const formData = new FormData();
  
    formData.append("description", description);
    formData.append("contactNumber", contactNumber);
    formData.append("address", address);
    formData.append("openingHours", JSON.stringify(transformOpeningHours()));
    formData.append("socialMediaLinks", JSON.stringify(selectedSocialMedia));
  
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }
    if (coverPicture) {
      formData.append("coverPicture", coverPicture);
    }
    if (verificationDoc) {
      formData.append("verificationDoc", verificationDoc);
    }
  
    try {
      await set_marketplace(formData);
      if (serviceType === 'ACCOMMODATION') {
        navigate('/hotel-sp-view')
    } else if (serviceType === 'RESTAURANT') {
        navigate('/rest-sp-view')
    } else if (serviceType === 'EQUIPMENT') {
        navigate('/equip-sp-view')
    } else {
        navigate('/hotel-sp-view')
    }
    } catch (error) {
      console.error("Error submitting marketplace data", error);
    }
  };
  

  const handleClear = () => {
    navigate("/sp-setup");
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file)
    }
  };

  const handleCoverPictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverPicture(file)
    }
  };

  const handleVerificationDocChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVerificationDoc(file)
    }
  };

  const handleDayChange = (day) => {
    setSelectedDays((prev) => {
      if (prev[day]) {
        const updatedDays = { ...prev };
        delete updatedDays[day];
        return updatedDays;
      } else {
        return {
          ...prev,
          [day]: { from: "", to: "" },
        };
      }
    });
  };

  const handleTimeChange = (day, field, value) => {
    setSelectedDays((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }));
  };

  const handleSocialMediaChange = (socialMedia) => {
    const existingIndex = selectedSocialMedia.findIndex(
      (item) => item.name === socialMedia.name
    );
    if (existingIndex !== -1) {
      setSelectedSocialMedia(
        selectedSocialMedia.filter((_, index) => index !== existingIndex)
      );
    } else {
      setSelectedSocialMedia([
        ...selectedSocialMedia,
        { name: socialMedia.name, link: "" },
      ]);
    }
  };

  const handleSocialMediaLinkChange = (socialMedia, link) => {
    setSelectedSocialMedia((prevSelected) =>
      prevSelected.map((item) =>
        item.name === socialMedia.name ? { ...item, link: link } : item
      )
    );
  };

  const socialMediaOptions = [
    { name: "Facebook", icon: faFacebook, color: "#3b5998" },
    { name: "Instagram", icon: faInstagram, color: "#E1306C" },
    { name: "Twitter", icon: faTwitter, color: "#1DA1F2" },
    { name: "LinkedIn", icon: faLinkedin, color: "#0077b5" },
    { name: "YouTube", icon: faYoutube, color: "#FF0000" },
    { name: "Website", icon: faGlobe, color: "#000000" },
  ];

  return (
    <>
      <Header
        type="serviceprovider"
        profilePic={HotelProfileImg}
        funtion={() => {}}
      />

      <div className="isolate bg-[#E7E7E7] px-5 py-18 lg:px-6 mt-20 mb-4">
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
            onSubmit={handleSubmit}
            className="w-full lg:w-2/3 bg-white p-5 rounded-xl shadow-lg border-2 border-[#6DA5C0]"
          >
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-10">
                <strong>Setup Service Provider</strong>
              </h2>
            </div>

            <div className="space-y-6">
              {/* Profile Image Upload */}
              <div className="flex items-center gap-x-3 mb-0">
                <label
                  htmlFor="profile-picture"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900 mb-0"
                >
                  <strong>Profile Picture</strong>
                </label>
                <input
                  id="profile-picture"
                  name="profile-picture"
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
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
                  htmlFor="cover-picture"
                  className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                >
                  <strong>Cover Picture</strong>
                </label>
                <input
                  id="cover-picture"
                  name="cover-picture"
                  type="file"
                  accept="image/*"
                  onChange={handleCoverPictureChange}
                  style={{
                    borderColor: "#6DA5C0",
                    outlineColor: "#0F969C",
                  }}
                  className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                  placeholder="Upload a cover image"
                />
              </div>
              <p className="text-sm text-gray-600 ml-60">
                *Upload a cover image to make your shop more appealing. This
                image will be prominently displayed on your shop's page.
              </p>

              {/* Marketplace  Info */}
              <div className="border-t border-gray-300 pt-4">
                <h3 className="text-lg font-bold mb-0.5">
                  <strong>Shop Info</strong>
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
                    value={serviceName}
                    autoComplete="organization"
                    style={{
                      borderColor: "#6DA5C0",
                      outlineColor: "#0F969C",
                    }}
                    className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                    placeholder="Enter shop name"
                    readOnly
                  />
                </div>

                <div className="flex items-center gap-x-3 mb-0.5">
                  <label
                    htmlFor="shop-type"
                    className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                  >
                    Service Type
                  </label>
                  <input
                    id="shop-type"
                    name="shop-type"
                    type="text"
                    value={serviceType}
                    autoComplete="organization"
                    style={{
                      borderColor: "#6DA5C0",
                      outlineColor: "#0F969C",
                    }}
                    className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4 bg-[#E7E7E7]"
                    placeholder="Restaurant"
                    readOnly
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    style={{
                      borderColor: "#6DA5C0",
                      outlineColor: "#0F969C",
                    }}
                    className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                    placeholder="Describe your shop"
                    required
                  />
                </div>
                <div className="flex items-center gap-x-3 mb-0.5">
                  <label
                    htmlFor="shop-contact-number"
                    className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                  >
                    Contact Number
                  </label>
                  <input
                    id="shop-contact-number"
                    name="shop-contact-number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    type="tel"
                    autoComplete="tel"
                    style={{
                      borderColor: "#6DA5C0",
                      outlineColor: "#0F969C",
                    }}
                    className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                    placeholder="Enter contact number"
                  />
                </div>
                <div className="flex items-center gap-x-3 mb-0.5">
                  <label
                    htmlFor="shop-description"
                    className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                  >
                    Physical Adress
                  </label>
                  <textarea
                    id="adress"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={3}
                    style={{
                      borderColor: "#6DA5C0",
                      outlineColor: "#0F969C",
                    }}
                    className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                    placeholder="Add your address here"
                  />
                </div>
              </div>

              {/* Opening Hours */}
              <div className="border-t border-gray-300 pt-4">
                <h3 className="text-lg font-bold mb-0.5">
                  <strong>Opening Hours</strong>
                </h3>
                <div className="space-y-2">
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day) => (
                    <div key={day} className="flex items-center gap-x-3 mb-0.5">
                      <label
                        htmlFor={`day-${day}`}
                        className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                      >
                        {day}
                      </label>
                      <input
                        id={`day-${day}`}
                        name={`day-${day}`}
                        type="checkbox"
                        checked={!!selectedDays[day]}
                        onChange={() => handleDayChange(day)}
                        className="h-4 w-4 border-gray-300 rounded text-[#0F969C] focus:ring-[#0F969C]"
                      />
                      {selectedDays[day] && (
                        <>
                          <input
                            type="time"
                            value={selectedDays[day].from}
                            onChange={(e) =>
                              handleTimeChange(day, "from", e.target.value)
                            }
                            className="border border-gray-300 rounded-md px-2 py-1"
                          />
                          <span>to</span>
                          <input
                            type="time"
                            value={selectedDays[day].to}
                            onChange={(e) =>
                              handleTimeChange(day, "to", e.target.value)
                            }
                            className="border border-gray-300 rounded-md px-2 py-1"
                          />
                        </>
                      )}
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-300 pt-4 mt-4">
                  <h4 className="text-md font-bold mb-1">Social Media Links</h4>
                  <div className="space-y-2">
                    {socialMediaOptions.map(({ name, icon, color }) => (
                      <div
                        key={name}
                        className="flex items-center gap-x-3 mb-0.5"
                      >
                        <input
                          id={`social-${name}`}
                          name={`social-${name}`}
                          type="checkbox"
                          checked={selectedSocialMedia.some(
                            (item) => item.name === name
                          )}
                          onChange={() =>
                            handleSocialMediaChange({ name, icon, color })
                          }
                          className="h-4 w-4 border-gray-300 rounded text-[#0F969C] focus:ring-[#0F969C]"
                        />
                        <label
                          htmlFor={`social-${name}`}
                          className="flex items-center text-sm font-semibold leading-4 text-gray-900"
                        >
                          <FontAwesomeIcon
                            icon={icon}
                            className="mr-2"
                            style={{ color }}
                          />
                          {name}
                        </label>
                        {selectedSocialMedia.some(
                          (item) => item.name === name
                        ) && (
                          <input
                            type="url"
                            name={`${name}-link`}
                            value={
                              selectedSocialMedia.find(
                                (item) => item.name === name
                              )?.link || ""
                            }
                            onChange={(e) =>
                              handleSocialMediaLinkChange(
                                { name, icon, color },
                                e.target.value
                              )
                            }
                            style={{
                              borderColor: "#6DA5C0",
                              outlineColor: "#0F969C",
                            }}
                            className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                            placeholder={`Enter ${name} link`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Section with a separating line at the top */}
              <div className="pt-4 mb-4 border-t border-black">
                {/* Verification Document Upload */}
                <div className="flex items-center gap-x-3 mb-4">
                  <label
                    htmlFor="verification-doc"
                    className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                  >
                    <strong>Verification</strong>
                  </label>
                  <input
                    id="verification-doc"
                    name="verification-doc"
                    type="file"
                    accept="image/*"
                    onChange={handleVerificationDocChange}
                    style={{
                      borderColor: "#6DA5C0",
                      outlineColor: "#0F969C",
                    }}
                    className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                    placeholder="Upload a document verifying your marketplace"
                  />
                </div>
                <p className="text-sm text-gray-600 ml-60">
                  *Upload a document or photo that verifies your association
                  with this marketplace.
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4 mt-2">
                <PrimaryButton
                  name="Clear"
                  action={handleClear}
                  isActive={true}
                />
                <PrimaryButton
                  name="Submit"
                  action={handleSubmit}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SetUpMarketPlace;
