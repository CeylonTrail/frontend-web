import React, { useState } from "react";
import "./form.css";
import cancelImg from "../assets/img/cancel.png";
import dropFileImg from "../assets/img/drop-file.png";


const HotelModal = ({ isOpen, onClose, onSubmit }) => {
  const [displayImage, setDisplayImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [fileError, setFileError] = useState("");
  const [isDisplayImageSelected, setIsDisplayImageSelected] = useState(false);
  const [isCropperOpen, setIsCropperOpen] = useState(false);
  const [tempImage, setTempImage] = useState(null);

  if (!isOpen) return null;

  const validateFile = (file) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    const maxSize = 15 * 1024 * 1024; // 15 MB

    if (!allowedTypes.includes(file.type)) {
      setFileError("Only JPEG, PNG, and GIF images are allowed.");
      return false;
    }

    if (file.size > maxSize) {
      setFileError("File size must be less than 15MB.");
      return false;
    }

    return true;
  };

  const handleDisplayImageChange = (event) => {
    const file = event.target.files[0];
    if (file && validateFile(file)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTempImage(e.target.result);
        setIsCropperOpen(true); // Open cropper
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdditionalImagesChange = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = [];

    files.forEach((file) => {
      if (validateFile(file)) {
        const reader = new FileReader();
        reader.onload = (e) => {
          validFiles.push(e.target.result);
          if (validFiles.length === files.length) {
            setAdditionalImages((prev) => [...prev, ...validFiles]);
            setFileError(""); // Clear any previous error
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleRemoveImage = (index, isDisplayImage) => {
    if (isDisplayImage) {
      setDisplayImage(null);
      setIsDisplayImageSelected(false);
    } else {
      setAdditionalImages((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleCropperClose = (croppedImage) => {
    if (croppedImage) {
      setDisplayImage(croppedImage);
      setIsDisplayImageSelected(true);
    }
    setIsCropperOpen(false);
  };

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Add Listing</h2>
            <div className="heading-line"></div>
            <img
              src={cancelImg}
              alt="Close"
              className="modal-close-icon"
              onClick={onClose}
            />
          </div>
          <form className="modal-form" onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                Room Type
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-input"
                placeholder="Enter title"
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
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="price" className="form-label">
                Price/night
              </label>
              <div className="price-input-container">
                <input
                  type="number"
                  id="price"
                  name="price"
                  className="form-input"
                  placeholder="Enter price"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="display-image" className="form-label">
                Display Image
              </label>
              <div className="w-full mb-4">
                <label htmlFor="display-image" className="dropzone-label">
                  <div className="mb-2 flex items-center justify-center">
                    <img
                      src={displayImage || dropFileImg}
                      alt="Drop File"
                      className="image-preview"
                    />
                  </div>
                  <h2 className="text-center text-gray-400 text-xs font-normal leading-4 mb-1">
                    PNG, JPG or PDF, smaller than 15MB
                  </h2>
                  <h4 className="text-center text-gray-900 text-sm font-medium leading-snug">
                    {displayImage ? "Change image" : "Upload image"}
                  </h4>
                  {fileError && (
                    <p className="text-red-500 text-sm text-center">
                      {fileError}
                    </p>
                  )}
                  <input
                    id="display-image"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleDisplayImageChange}
                    disabled={isDisplayImageSelected} // Disable input if image is selected
                  />
                </label>
                {displayImage && (
                  <button
                    type="button"
                    className="remove-image-button"
                    onClick={() => handleRemoveImage(null, true)}
                  >
                    Remove Image
                  </button>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="additional-images" className="form-label">
                Additional Images
              </label>
              <div className="w-full mb-4">
                <label htmlFor="additional-images" className="dropzone-label">
                  <div className="mb-2 flex items-center justify-center">
                    <img
                      src={dropFileImg}
                      alt="Drop File"
                      className="w-10 h-10"
                    />
                  </div>
                  <h2 className="text-center text-gray-400 text-xs font-normal leading-4 mb-1">
                    PNG, JPG or GIF, smaller than 15MB
                  </h2>
                  <h4 className="text-center text-gray-900 text-sm font-medium leading-snug">
                    Upload additional images
                  </h4>
                  {fileError && (
                    <p className="text-red-500 text-sm text-center">
                      {fileError}
                    </p>
                  )}
                  <input
                    id="additional-images"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    multiple
                    onChange={handleAdditionalImagesChange}
                  />
                </label>
              </div>
              <div className="additional-images-preview">
                {additionalImages.map((imgSrc, index) => (
                  <div key={index} className="additional-image-container">
                    <img
                      src={imgSrc}
                      alt={`Additional ${index + 1}`}
                      className="additional-image"
                    />
                    <button
                      type="button"
                      className="remove-image-button"
                      onClick={() => handleRemoveImage(index, false)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

    
    </>
  );
};

export default HotelModal;
