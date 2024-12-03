import React, { useState, useEffect } from "react";
import "../../assets/styles/form.css";
import cancelImg from "../../assets/img/cancel.png";
import { get_ad, update_ad } from "../../API/sp";
import { useNavigate } from "react-router-dom";

const EditHotelModal = ({ isOpen, onRequestClose, onSubmit, id }) => {

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rateType, setRateType] = useState("");
  const [rate, setRate] = useState("");


  const fetchAd = async () => {
    try {
      const response = await get_ad(id);
      if (response.status === 'success') {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setRateType(response.data.rateType);
        setRate(String(response.data.rate));
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
    if (!isOpen) return;
    fetchAd();
  }, [isOpen]);

  if (!isOpen) return null;
  
  const Submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("rateType", rateType);
    formData.append("rate", parseFloat(rate));

    try {
      const response = await update_ad(id, formData);
      if (response.status === "success") {
        alert("Advertisement updated successfully");
        onRequestClose();
      } else {
        alert("Failed to update the advertisement");
        console.error("Failed to update the advertisement");
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
    onRequestClose();
  }

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title">Edit Advertisement</h2>
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
                placeholder="Edit title"
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
                placeholder="Edit description"
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
                  Rate
                </label>
                <input
                  type="number"
                  id="rate"
                  name="rate"
                  className="form-input"
                  placeholder="Edit rate"
                  min="0.01"
                  step="0.01"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  disabled={!rateType}
                  required
                />
              </div>
            <div className="modal-footer">
              <button type="submit" className="submit-button">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditHotelModal;
