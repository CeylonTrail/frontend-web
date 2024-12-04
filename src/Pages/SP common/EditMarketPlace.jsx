import React, { useState, useEffect } from "react";
import MarketPlaceImg from "../../assets/img/MarketPlace.png";
import { PrimaryButton } from "../../components/Button";
import "../../assets/styles/SetUpMarketPlace.css";
import { useNavigate, useParams } from "react-router-dom";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import Header from "../../components/header.js";
import { edit_marketplace, get_sp_profile } from "../../API/sp.js";

const EditMarketPlace = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/hotel-sp-view");
  };

  const [serviceName, setServiceName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState("");

  const fetchSP = async () => {
    try {
      const response = await get_sp_profile(id);

      if (response.status === 'success') {
        setServiceName(response.data.serviceName);
        setServiceType(response.data.serviceType);
        setDescription(response.data.description);
        setContactNumber(response.data.contactNumber);
        setAddress(response.data.address);
        setVerificationStatus(response.data.verificationStatus);
      } else if (response.status === 'unauthorized'){
        localStorage.clear()
        navigate('/login')
      } else 
        console.error(response.message);

    } catch (error) {
      console.error("Error fetching sp data:", error);
    }
  };
  
  useEffect(() => {
    fetchSP();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
  
    formData.append("description", description);
    formData.append("contactNumber", contactNumber);
    formData.append("address", address);
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }
    if (coverPicture) {
      formData.append("coverPicture", coverPicture);
    }
  
    try {
      await edit_marketplace(id, formData);
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

  return (
    <>
      <Header
        type="serviceprovider"
        profilePic={HotelProfileImg}
        funtion={() => {}}
      />
      <div className="relative mt-20 fixed right-2 overflow-auto h-[87.5vh]">
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
            method="PUT"
            className="w-full lg:w-2/3 bg-white p-5 rounded-xl shadow-lg border-2 border-[#6DA5C0]"
          >
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-10">
                <strong>Edit Service Provider Info</strong>
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

              {/* Marketplace Info */}
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
                    Service Name
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
                    value={serviceName}
                    className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4 bg-[#E7E7E7]"
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
                    value={serviceType}
                    className="flex-1 rounded-md bg-[#E7E7E7] border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                    placeholder="Edit description"
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
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                    placeholder="Edit phone number"
                  />
                </div>
                <div className="flex items-center gap-x-3 mb-0.5">
                  <label
                    htmlFor="shop-description"
                    className="w-1/3 text-sm font-semibold leading-4 text-gray-900"
                  >
                    Address
                  </label>
                  <textarea
                    id="shop-description"
                    name="shop-description"
                    rows={3}
                    style={{
                      borderColor: "#6DA5C0",
                      outlineColor: "#0F969C",
                    }}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
                    placeholder="Edit address"
                  />
                </div>
              </div>


              {/* Verification Status */}
              <div className="border-t border-gray-300 pt-4">
                <h3 className="text-lg font-bold mb-0.5">
                  <strong>Verification Status</strong>
                </h3>
                <div className="flex items-center gap-x-2">
                  <p className="text-sm text-gray-900">{verificationStatus}</p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4 mt-2">
                <PrimaryButton
                  name="Back"
                  action={handleBackClick}
                  isActive={false}
                />
                <PrimaryButton
                  name="Save"
                  action={handleSubmit}
                  isActive={true}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditMarketPlace;
