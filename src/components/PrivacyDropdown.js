import React from "react";

const PrivacyDropdown = ({ setPrivacy }) => {
    const handlePrivacyChange = (event) => {
        setPrivacy(event.target.value);
    };

    return (
        <div className="relative w-72 max-w-full mx-auto">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
            </svg>
            <select
                className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2"
                onChange={handlePrivacyChange}
            >
                <option value="public">Public</option>
                <option value="followers">Followers</option>
                <option value="only_me">Only me</option>
            </select>
        </div>
    );
};

export default PrivacyDropdown;
