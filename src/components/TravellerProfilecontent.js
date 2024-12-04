import { PrimaryButton as Button } from './Button';
import CommunityPost from './communityPost';
import { SimpleInput } from './inputFields';
import Profile from '../assets/img/Profile.svg';
import TripCard from './TripCardCommunity';
import ImageGallery from './imageGallery';
import { useState, useEffect } from 'react';
import profileAPI from '../API/profile';

const PostsSection = () => {
    const [profile, setProfile] = useState(null);

    const fetchProfile = async () => {
        try {
            const response = await profileAPI.get_user_profile();
            console.log(response.data);
            if (response.status === "success") {
                setProfile(response.data);
            } else {
                console.error("Error in fetching profile");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

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
                    {profile ? (
                        <CommunityPost posts={profile.posts} />
                    ) : (
                        <p>Loading posts...</p>
                    )}
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
