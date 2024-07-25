import React, { useState } from "react";

const SpHotelListing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="relative">
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
      >
        Open Pop-up
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Pop-up Window</h2>
            <p className="mb-4">This is the content of the pop-up window.</p>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpHotelListing;
