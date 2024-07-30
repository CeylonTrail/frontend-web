// // ReviewModal.js
// import React, { useState } from "react";
// import Modal from "react-modal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import "../../assets/styles/form.css";

// Modal.setAppElement("#root"); // For accessibility

// const ReviewModal = ({
//   isOpen,
//   onRequestClose,
//   handleSubmit,
//   rating,
//   setRating,
//   review,
//   setReview,
//   renderStars,
// }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={toggleModal}
//       contentLabel="Rating Modal"
//       className="modal-overlay"
//       overlayClassName="modal-overlay-bg"
//     >
//       <div className="boost-modal-content" onClick={(e) => e.stopPropagation()}>
//         <div className="modal-title">
//           <h2>Rate and Review</h2>
//           <div className="heading-line"></div>
//           <img
//             src={cancelImg}
//             alt="Close"
//             className="modal-close-icon"
//             onClick={toggleModal}
//           />
//         </div>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleSubmit();
//             onRequestClose();
//           }}
//         >
//           <div className="form-group">{renderStars(rating, "medium")}</div>
//           <textarea
//             className="form-textarea"
//             rows="4"
//             placeholder="Write your review here..."
//             value={review}
//             onChange={(e) => setReview(e.target.value)}
//           />
//           <button type="submit" className="submit-button">
//             Submit
//           </button>
//         </form>
//       </div>
//     </Modal>
//   );
// };

// export default ReviewModal;
