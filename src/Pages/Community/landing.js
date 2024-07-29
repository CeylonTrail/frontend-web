import Header from "../../components/header";
import FilterBar from "../../components/sidebarFilters";
import CommunityPost from "../../components/communityPost";
import {SimpleInput} from "../../components/inputFields";
import Profile from "../../assets/img/Profile.svg";
import { useState } from "react";

export default () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <Header />
            <div className="flex flex-row justify-around">
                <FilterBar />
                <div className="flex flex-col items-center mt-24 w-full max-w-screen-md mx-auto">
                    <span className="bg-white p-4 flex flex-row gap-1 px-8 ml-4 mr-4 w-[704px] shadow-lg rounded-md mb-4" onClick={setShowPopup('true')}>
                        {console.log(showPopup)}
                        <img src={Profile} className="w-12" alt="Profile" />
                        <SimpleInput pholder={"Create a post"} className="w-full ml-4" />
                    </span>
                    <CommunityPost />
                </div>
            </div>
        </>
    );
};