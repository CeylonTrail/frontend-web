import React from 'react';
import PostsSection from '../../components/TravellerProfilecontent';
import ProfileSection from '../../components/TravellerProfileDetail';
import Header from '../../components/header';
import Profile from '../../assets/img/picskel.png';

// Main component
const MainContent = () => {

    const handleProfileClick = () => {
        window.location.href = "/profile";
    }

    
    return (
        <div className="bg-gray-100 min-h-screen">
            <Header type={"traveller"} profilePic={Profile} funtion={handleProfileClick} />
            <div className=" mx-auto py-8 px-4 sm:px-6 lg:px-8 flex space-x-4  w-full">
                <div className="w-1/3 fixed left-2 bottom-2 ">
                    <ProfileSection pic={Profile} />
                </div>
                <div className="w-[65%] fixed right-2">
                    <PostsSection />
                </div>
            </div>
        </div>
    );
};

export default MainContent;
