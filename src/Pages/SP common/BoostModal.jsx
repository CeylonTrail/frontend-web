import React from "react";
import "../../assets/styles/form.css";
import cancelImg from "../../assets/img/cancel.png";

const BoostModal = ({ isOpen, onRequestClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onRequestClose}>
      <div className="boost-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Boost your post</h2>
          <div className="heading-line"></div>
          <img
            src={cancelImg}
            alt="Close"
            className="modal-close-icon"
            onClick={onRequestClose}
          />
        </div>
        <form
          className="modal-form"
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission here
            onRequestClose();
          }}
        >
          <div className="form-group">
            <p>Increase your post’s visibility to community by boosting it.</p>
          </div>
          <div className="form-group">
            <label htmlFor="duration" className="form-label">
              Duration for boosting
            </label>
            <select
              id="duration"
              name="duration"
              className="form-input"
              required
            >
              <option value="1 day">1 Day - LKR 300</option>
              <option value="3 days">3 Days - LKR 500</option>
              <option value="1 week">1 Week - LKR 1000</option>
              <option value="1 month">1 Month - LKR 3000</option>
            </select>
          </div>
          <div className="modal-footer">
            <button type="submit" className="submit-button">
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BoostModal;
