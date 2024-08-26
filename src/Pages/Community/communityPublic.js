import Header from "../../components/header";
import FilterBar from "../../components/sidebarFilters";
import CommunityPost from "../../components/communityPost";
import Profile from "../../assets/img/picskel.png";
import { useState, useEffect } from "react";
import postAPI from "../../API/post";

export default () => {
    const [posts, setPosts] = useState(null);

    const fetchPosts = async () => {
        try {
            const response = await postAPI.get_public_community_post();
            console.log("Response:", response);
            if (response.status === 'success') {
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

    const handleProfileClick = () => {
        window.location.href = "/signup";
    }

    return (
        <>
            <Header type={"public"} profilePic={Profile} funtion={handleProfileClick} />
            <div className="flex flex-row justify-around">
                {/* <FilterBar /> */}
                <div className="flex flex-col items-center mt-24 w-full max-w-screen-md">
                    <CommunityPost posts={posts} type="public" />
                </div>
            </div>
        </>
    );
};
