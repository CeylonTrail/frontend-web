import React from "react";

const RemovePostModal = ({ isOpen, onRequestClose, onConfirm }) => {
  if (!isOpen) return null;

  // Inline styles
  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const modalContentStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    width: "400px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  };

  const modalHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  };

  const modalTitleStyle = {
    fontSize: "20px",
    fontWeight: "600",
  };

  const modalBodyStyle = {
    marginBottom: "20px",
  };

  const modalFooterStyle = {
    display: "flex",
    justifyContent: "flex-end",
  };

  const buttonStyle = {
    padding: "10px 15px",
    borderRadius: "4px",
    marginLeft: "10px",
    cursor: "pointer",
    border: "none",
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#ccc",
    color: "#000",
  };

  const confirmButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#e63946",
    color: "#fff",
  };

  return (
    <div style={modalOverlayStyle} onClick={onRequestClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <div style={modalHeaderStyle}>
          <h2 style={modalTitleStyle}>Remove Post</h2>
        </div>
        <div style={modalBodyStyle}>
          <p>
            Are you sure you want to remove this post? This action cannot be
            undone.
          </p>
        </div>
        <div style={modalFooterStyle}>
          <button style={cancelButtonStyle} onClick={onRequestClose}>
            Cancel
          </button>
          <button style={confirmButtonStyle} onClick={onConfirm}>
            Remove Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemovePostModal;
