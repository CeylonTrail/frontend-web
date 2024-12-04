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
import PrivacyDropdown from "../../components/PrivacyDropdown";
import { capitalizeWords } from "../../Functions/FormatName";
import postAPI from "../../API/post";
import { SuccessAlert, WarningAlert } from "../../components/Alerts";
import { set } from "date-fns";

const TravellerCommunity = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [tripId, setTripId] = useState(0);
    const [selectedImages, setSelectedImages] = useState([]);
    const [images, setImages] = useState([]);
    const [content, setContent] = useState("");
    const [privacy, setPrivacy] = useState("public");
    const [showAlert, setShowAlert] = useState(false);
    const [alertData, setAlertData] = useState({ title: "", message: "" });
    const popupRef = useRef(null);
    const [postButton, setPostButton] = useState("Post");
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState(posts);

    const fetchPosts = async () => {
        try {
            const response = await postAPI.get_public_community_post();
            if (response.status === "success") {
                setPosts(response.data);
                setFilteredPosts(response.data);
            } else {
                console.error("Error in fetching posts");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handlePopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setImages([]); // Clear uploading images when closing popup
        setSelectedImages([]); // Clear images when closing popup
        setContent(""); // Clear content
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

    const createPost = async () => {
        setPostButton("Posting...");
        const formData = new FormData();
        
        // Append text fields
        formData.append("content", content);
        formData.append("tripId", tripId);
        formData.append("privacy", privacy.toUpperCase());
        
        // Append image files
        Array.from(images).forEach((image, index) => {
            formData.append(`images`, image); // Use `images` as the field name in the DTO.
        });
    
        try {
            const response = await postAPI.create_post(formData );
            if (response.status === "success") {
                setAlertData({ title: "Success", message: "Post created successfully" });
                setShowAlert(true);
                fetchPosts(); // Refresh posts
                closePopup(); // Close popup after successful post
            } else {
                setAlertData({ title: "Error", message: "Something went wrong. Please try again." });
                setShowAlert(true);
            }
        } catch (error) {
            setAlertData({ title: "Error", message: "Failed to create the post. Please check your network or try again later." });
            setShowAlert(true);
        } finally {
            setPostButton("Post"); // Reset the button text
        }
    };
    
    

    const handleImageChange = (e) => {
        setImages(e.target.files);
        const files = Array.from(e.target.files); // Convert FileList to array
        const imageUrls = files.map((file) => URL.createObjectURL(file)); // Create object URLs for images
        setSelectedImages((prevImages) => [...prevImages, ...imageUrls]); // Update the state with new images
    };

    const handleProfileClick = () => {
        window.location.href = "/profile";
    };

    return (
        <>
            <Header type={"traveller"} profilePic={Profile} funtion={handleProfileClick} />
            <div className="flex flex-row justify-around w-full">
                <FilterBar  posts={posts}
                filterPosts={(filtered) => setFilteredPosts(filtered)}/>
                <div className="flex flex-col items-center mt-24 w-full max-w-screen-md">
                    <span
                        className="bg-white p-4 flex flex-row gap-1 px-8 ml-4 mr-4 w-[704px] shadow-lg rounded-md mb-4 cursor-pointer"
                        onClick={handlePopup}
                    >
                        <img src={Profile} className="w-12" alt="Profile" />
                        <SimpleInput pholder={"Create a post"} className="w-full ml-4" />
                    </span>
                    <CommunityPost posts={filteredPosts || []} />
                </div>
                <div className="flex flex-col items-center mt-24 mx-auto gap-2 fixed right-0 bottom-0 top-0 mr-2 max-w-sm">
                    <Analytics />
                    <ChatWindow />
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div
                        ref={popupRef}
                        className="bg-white p-6 rounded-lg shadow-lg relative w-11/12 max-w-lg max-h-[80vh] overflow-auto"
                    >
                        <h2 className="text-2xl font-semibold mb-4 text-center text-primaryDark1 border-b">
                            Create Post
                        </h2>
                        <div className="flex items-center mb-4 justify-between">
                            <div className="flex flex-row items-center">
                                <img src={Profile} className="w-12 h-12 rounded-full" alt="Profile" />
                                <span className="ml-4 font-semibold">{capitalizeWords(localStorage.getItem("userName"))}</span>
                            </div>
                            <div className="w-48">
                                <PrivacyDropdown setPrivacy={setPrivacy} />
                            </div>
                        </div>
                        <textarea
                            placeholder="What's on your mind?"
                            className="w-full p-2 mb-4 border rounded h-32"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
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
                                <button className="p-2 rounded-full hover:bg-gray-200">
                                    <img src={TagIcon} alt="Tag" />
                                </button>
                            </div>
                            <PrimaryButton name={postButton} action={createPost} />
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
            {showAlert && alertData.title === "Success" && (
                <SuccessAlert
                    title={alertData.title}
                    message={alertData.message}
                    onclose={() => setShowAlert(false)}
                />
            )}

            {showAlert && alertData.title === "Error" && (
                <WarningAlert
                    title={alertData.title}
                    message={alertData.message}
                    onclose={() => setShowAlert(false)}
                />
            )}


        </>
    );
};

export default TravellerCommunity;
