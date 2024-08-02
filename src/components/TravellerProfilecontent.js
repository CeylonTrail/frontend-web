
import { PrimaryButton as Button } from './Button';
import CommunityPost from './communityPost';
import { SimpleInput } from './inputFields';
import Profile from '../assets/img/Profile.svg';
import TripCard from './TripCardCommunity';
import ImageGallery from './imageGallery';
import { useState, useEffect } from 'react';
import postAPI from '../API/post';

const PostsSection = () => {

    const [posts, setPosts] = useState(null);

    const fetchPosts = async () => {
        try {
            const response = await postAPI.get_public_community_post();
            console.log("Response:", response);
            if (response.status === "success") {
                setPosts(response.data);
            } else {
                console.error("Error in fetching posts");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // Using useEffect to call fetchPosts only once when the component mounts
    useEffect(() => {
        fetchPosts();
    }, []);

    // const posts = [
    //     {
    //         title: "What is SaaS? Software as a Service Explained",
    //         desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature...",
    //         imgs: [
    //             "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    //             "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    //             "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    //         ],
    //         authorLogo: Profile,
    //         authorName: "Sidi dev",
    //         date: "Jan 4 2022",
    //         href: "javascript:void(0)"
    //     },
    //     // Add more posts here...
    // ];

    const trips = [
        {
            title: "Trip to Jaffna",
            days: 3,
            places: [
                "Jaffna Fort",
                "Nagadeepa Temple",
                "Dutch Fort",
                "Elephantpass",
                "Nallur Hindu Temple"
            ],
            description: "It's the smells I remember most from Dave's place: the powerful aromas of curry leaves and mustard seeds, of turmeric and chilli powder, scents that seemed to have soaked into the walls of that house. Dave's mum always had something bubbling away on the stove when we came..."
        },
        // Add more trips here if needed
    ];

    const [showPopup, setShowPopup] = useState(false);
    const [activeTab, setActiveTab] = useState('post');

    const handlePopup = () => {
        setShowPopup(true);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="bg-white p-4 rounded shadow-md w-full mt-12 flex flex-col items-center h-[38rem]">
            <div className="my-4 flex space-x-2">
                <Button name="Posts" action={() => handleTabClick('post')} isActive={activeTab === 'post'} />
                <Button name="Trips" action={() => handleTabClick('trip')} isActive={activeTab === 'trip'} />
                <Button name="Photos" action={() => handleTabClick('photo')} isActive={activeTab === 'photo'} />
            </div>
            {activeTab === "post" && <>
                <span
                    className="bg-white p-4 flex flex-row gap-1 px-8  w-[704px] shadow-lg rounded-md mb-4 cursor-pointer"
                    onClick={handlePopup}
                >
                    <img src={Profile} className="w-12" alt="Profile" />
                    <SimpleInput pholder={"Create a post"} className="w-full ml-4" />
                </span>
                <div className="overflow-auto h-full w-full">
                    <CommunityPost posts={posts} />
                </div>
            </>}

            {activeTab === "trip" && <>
                <div className='flex justify-end w-4/5 mb-4'>
                    <Button name={"Plan a Trip"} />
                </div>
                <div className="overflow-auto h-full w-4/5 mx-4">
                    <TripCard trips={trips} />
                </div>
            </>}

            {activeTab === "photo" && <>
                <div className="overflow-auto h-full w-full">
                    <ImageGallery />
                </div>
            </>}
        </div>
    );
};

export default PostsSection;
