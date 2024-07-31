import Header from "../../components/header";
import FilterBar from "../../components/sidebarFilters";
import CommunityPost from "../../components/communityPost";
import { SimpleInput } from "../../components/inputFields";
import Profile from "../../assets/img/Profile.svg";
import { useState, useRef, useEffect } from "react";
import TagIcon from "../../assets/img/TagIcon.svg";
import imageIcon from "../../assets/img/imageIcon.svg";
import { PrimaryButton } from "../../components/Button";
import Analytics from "../../components/TravellerAnalytics";
import ChatWindow from "../../components/TravellerChatWindow";

export default () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const popupRef = useRef(null);

    const handlePopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setSelectedImage(null); // Clear the selected image when the popup is closed
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                closePopup();
            }
        };

        if (showPopup) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showPopup]);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    return (
        <>
            <Header type={"traveller"} />
            <div className="flex flex-row justify-around">
                <FilterBar />
                <div className="flex flex-col items-center mt-24 w-full max-w-screen-md mx-auto ml-80">
                    <span
                        className="bg-white p-4 flex flex-row gap-1 px-8 ml-4 mr-4 w-[704px] shadow-lg rounded-md mb-4 cursor-pointer"
                        onClick={handlePopup}
                    >
                        <img src={Profile} className="w-12" alt="Profile" />
                        <SimpleInput pholder={"Create a post"} className="w-full ml-4" />
                    </span>
                    <CommunityPost />
                </div>

                <div className="flex flex-col items-center mt-24  mx-auto gap-2 fixed right-0 bottom-0 top-0 mr-2">
                    <Analytics />
                    <ChatWindow />
                </div>

            </div>
            

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div ref={popupRef} className="bg-white p-6 rounded-lg shadow-lg relative w-11/12 max-w-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-center text-primaryDark1 border-b">Create Post</h2>
                        <div className="flex items-center mb-4">
                            <img src={Profile} className="w-12 h-12 rounded-full" alt="Profile" />
                            <span className="ml-4 font-semibold">Travel Enthusiast 2</span>
                        </div>
                        <textarea
                            placeholder="What's on your mind?"
                            className="w-full p-2 mb-4 border rounded h-32"
                        ></textarea>
                        {selectedImage && (
                            <div className="mb-4">
                                <img src={selectedImage} alt="Selected" className="w-full h-auto rounded" />
                            </div>
                        )}
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-4">
                                <label className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                                    <img src={imageIcon} alt="Upload" />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageChange}
                                    />
                                </label>
                                <button className="p-2 rounded-full hover:bg-gray-200">
                                    <img src={TagIcon} alt="Tag" />
                                </button>
                            </div>
                            <PrimaryButton name={"Post"} action={closePopup} />
                        </div>
                        <button
                            className="absolute top-2 right-2 text-gray-500"
                            onClick={closePopup}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
