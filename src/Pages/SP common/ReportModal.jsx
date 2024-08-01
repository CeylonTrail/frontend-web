import React, { useState } from "react";
import "../../assets/styles/form.css";
import cancelImg from "../../assets/img/cancel.png";

const ReportModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [reportReason, setReportReason] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [fileError, setFileError] = useState("");

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

  const handleReasonChange = (event) => {
    setReportReason(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setAdditionalDetails(event.target.value);
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter(validateFile);

    if (validFiles.length) {
      setAttachedFiles((prev) => [...prev, ...validFiles]);
      setFileError(""); // Clear any previous error
    }
  };

  const handleRemoveFile = (index) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!reportReason.trim()) {
      setFileError("Please select a reason for your report.");
      return;
    }
    const reportData = {
      reason: reportReason,
      details: additionalDetails,
      files: attachedFiles,
    };
    onSubmit(reportData);
  };

  return (
    <>
      <div className="modal-overlay " onClick={onRequestClose}>
        <div className="report-modal-content h-2" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title">Report Profile</h2>
            <div className="heading-line"></div>
            <img
              src={cancelImg}
              alt="Close"
              className="modal-close-icon"
              onClick={onRequestClose}
            />
          </div>
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="report-reason" className="form-label">
                Reason for Reporting
              </label>
              <select
                id="report-reason"
                name="report-reason"
                className="form-select"
                value={reportReason}
                onChange={handleReasonChange}
                required
              >
                <option value="">Select a reason</option>
                <option value="Inappropriate Content">
                  Inappropriate Content
                </option>
                <option value="Harassment">Harassment</option>
                <option value="Spam">Spam</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {reportReason === "Other" && (
              <div className="form-group">
                <label htmlFor="additional-details" className="form-label">
                  Type valid reason for reporting
                </label>
                <textarea
                  id="additional-details"
                  name="additional-details"
                  className="form-textarea"
                  rows="4"
                  placeholder="Enter additional details"
                  value={additionalDetails}
                  onChange={handleDetailsChange}
                ></textarea>
              </div>
            )}
            <div className="form-group">
              <label htmlFor="attach-files" className="form-label">
                Attach Files (optional)
              </label>
              <input
                id="attach-files"
                type="file"
                className="form-input"
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />
              {fileError && (
                <p className="text-red-500 text-sm text-center">{fileError}</p>
              )}
            </div>
            {attachedFiles.length > 0 && (
              <div className="file-preview">
                {attachedFiles.map((file, index) => (
                  <div key={index} className="file-preview-item">
                    <span className="file-name">{file.name}</span>
                    <button
                      type="button"
                      className="remove-file-button"
                      onClick={() => handleRemoveFile(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="modal-footer">
              <button type="submit" className="submit-button">
                Submit Report
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReportModal;
