import React, { useState } from "react";
import "../../assets/styles/form.css";
import cancelImg from "../../assets/img/cancel.png";
import imageIcon from "../../assets/img/imageIcon.svg";
import { create_ad } from "../../API/sp";

const HotelModal = ({ isOpen, onRequestClose }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rateType, setRateType] = useState("");
  const [rate, setRate] = useState("");

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    setImages(e.target.files);
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => [...prevImages, ...imageUrls]);
};

const Submit = async () => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("rateType", rateType);
  formData.append("rate", parseFloat(rate));
  Array.from(images).forEach((image, index) => {
    formData.append(`images`, image);
  });

  try {
    const response = await create_ad(formData);
    console.log("Response:", response);
    if (response.status === "success") {
      alert("Advertisement created successfully");
      onRequestClose();
    } else {
      alert("Failed to create the advertisement");
      console.error("Failed to create the advertisement");
    }
  } catch (error) {
    console.error(error);
  } 
}

const onClose = (e) => {
  e.preventDefault();
  setTitle("");
  setDescription("");
  setRateType("");
  setRate("");
  setSelectedImages([]);
  setImages([]);
  onRequestClose();
}

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title">Add Advertisement</h2>
            <div className="heading-line"></div>
            <img
              src={cancelImg}
              alt="Close"
              className="modal-close-icon"
              onClick={onClose}
            />
          </div>
          <form className="modal-form" onSubmit={Submit}>
            {/* Form fields */}
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-input"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="form-textarea"
                rows="4"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="rateType" className="form-label">
                  Rate Type
                </label>
                <select
                  id="rateType"
                  name="rateType"
                  className="form-input"
                  value={rateType}
                  onChange={(e) => setRateType(e.target.value)}
                  required
                >
                  <option value="">Select rate type</option>
                  <option value="FIXED">FIXED</option>
                  <option value="HOUR">Per Hour</option>
                  <option value="NIGHT">Per Night</option>
                  <option value="DAY">Per Day</option>
                  <option value="WEEK">Per Week</option>
                  <option value="MONTH">Per Month</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="rate" className="form-label">
                  Enter Rate
                </label>
                <input
                  type="number"
                  id="rate"
                  name="rate"
                  className="form-input"
                  placeholder="Enter rate"
                  min="0.01"
                  step="0.01"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  disabled={!rateType}
                  required
                />
              </div>
            <div className="form-group">
            <label htmlFor="rate" className="form-label">
                  Upload Images
                </label>
            {selectedImages.length > 0 && (
                            <div className="mb-4 grid grid-cols-2 gap-2">
                                {selectedImages.map((image, index) => (
                                    <img key={index} src={image} alt={`Selected ${index}`} className="w-full h-auto rounded" />
                                ))}
                            </div>
                        )}
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-4">
                                <label className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                                    <img src={imageIcon} alt="Upload" />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        className="hidden"
                                        onChange={handleImageChange}
                                    />
                                </label>
                            </div>
                </div>

            </div>
            <div className="modal-footer">
              <button type="submit" className="submit-button">
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HotelModal;
