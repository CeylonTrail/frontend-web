/* eslint-disable import/no-anonymous-default-export */
import Header from "../../components/header";
// import FilterBar from "../../components/sidebarFilters";
import CommunityPost from "../../components/communityPost";
import Profile from "../../assets/img/picskel.png";
import { useState, useEffect } from "react";
import postAPI from "../../API/post";
import Loading from "../loading.js";

export default () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        setLoading(true); // Start the loader

        try {
            const response = await postAPI.get_public_community_post();
           
            if (response.status === 'success' ) {
                setPosts(response.data);
            } else {
                console.error("Error in fetching posts");
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false); // Stop the loader after data is fetched
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleProfileClick = () => {
        window.location.href = "/signup";
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Header type={"public"} profilePic={Profile} funtion={handleProfileClick} />
                    <div className="flex flex-row justify-around">
                        {/* <FilterBar /> */}
                        <div className="flex flex-col items-center mt-24 w-full max-w-screen-md">
                            <CommunityPost posts={posts} type="public" />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
