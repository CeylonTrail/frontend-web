import React from 'react';
// import PostsSection from '../../components/TravellerProfilecontent';
// import ProfileSection from '../../components/TravellerProfileDetail';
import Header from '../../components/header';
import Profile from '../../assets/img/picskel.png';
import Edit from '../../components/profileEdit';

// Main component
const MainContent = () => {

    const handleProfileClick = () => {
        window.location.href = "/profile";
    }


    return (
        <div className="bg-gray-100 min-h-screen">
            <Header type={"traveller"} profilePic={Profile} funtion={handleProfileClick} />
            <div className=" mt-28 w-3/5 bg-white rounded mx-auto">
                {/* <div className="w-1/3 fixed left-2 bottom-2 ">
                    <ProfileSection pic={Profile} />
                </div> */}
                <div >
                    <Edit />
                </div>
            </div>
        </div>
    );
};

export default MainContent;
