import React, { useState, useEffect } from "react";
import Like from "../assets/img/like.svg";
import Comment from "../assets/img/comment.svg";
import Share from "../assets/img/share.svg";

const CommunityPost = ({ posts }) => {
    const [like, setLike] = useState(0);
    const [comment, setComment] = useState(0);
    const [share, setShare] = useState(0);
    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const handleClose = () => {
        setSelectedPost(null);
    };

    const handleOutsideClick = (e) => {
        if (e.target.id === 'popup') {
            handleClose();
        }
    };

    useEffect(() => {
        if (selectedPost) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [selectedPost]);

    if (!posts) {
        return <div>No posts available</div>;
    }

    return (
        <section className="mx-auto max-w-screen-md md:px-8">
            <div className="gap-2">
                {posts.map((item, key) => (
                    <article
                        className="w-full mx-auto mt-4 shadow rounded-md duration-300 hover:shadow-sm p-4 bg-white cursor-pointer"
                        key={key}
                        onClick={() => handlePostClick(item)}
                    >
                        <div>
                            <div className="flex items-center mt-2 ml-4 mr-2">
                                <div className="flex-none w-10 h-10 rounded-full">
                                    <img src={item.user.profilePictureUrl} className="w-full h-full rounded-full" alt={item.user.username} />
                                </div>
                                <div className="ml-3">
                                    <span className="block text-gray-900">{item.user.username}</span>
                                    <span className="block text-gray-400 text-sm">{item.createdAt}</span>
                                </div>
                            </div>
                            <div className="pt-3 ml-4 mr-2 mb-3">
                                <p className="text-gray-400 text-sm mt-1">{item.content}</p>
                            </div>
                            <div className="grid grid-cols-3 gap-2 ml-4 mr-2">
                                {item.images.slice(0, 2).map((image) => (
                                    <img src={image} loading="lazy" alt="Post Image" className="w-full h-48 rounded" />
                                ))}
                                {item.images.length > 2 && (
                                    <div className="relative w-full h-48 rounded bg-SecondaryLight flex items-center justify-center text-xl text-gray-700">
                                        +{item.images.length - 2}
                                    </div>
                                )}
                            </div>
                            <div className="border-t border-primary mt-5 flex flex-row justify-around pt-4">
                                <div className="flex flex-row items-center">
                                    <img src={Like} alt="Like" className="w-8 h-8 text-primary" />
                                    {like} Likes
                                </div>
                                <div className="flex flex-row items-center">
                                    <img src={Comment} alt="Comment" className="w-8 h-8 text-primary" />
                                    {comment} Comments
                                </div>
                                <div className="flex flex-row items-center">
                                    <img src={Share} alt="Share" className="w-8 h-8 text-primary" />
                                    {share} Shares
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {selectedPost && (
                <div
                    id="popup"
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    onClick={handleOutsideClick}
                >
                    <div className="bg-white p-6 rounded-lg max-w-xl mx-auto h-4/5 overflow-auto">
                        <div className="flex items-center my-4 ml-2 mr-2">
                            <div className="flex-none w-10 h-10 rounded-full">
                                <img src={selectedPost.user.profilePictureUrl} className="w-full h-full rounded-full" alt={selectedPost.user.useraname} />
                            </div>
                            <div className="ml-3">
                                <span className="block text-gray-900">{selectedPost.user.useraname}</span>
                                <span className="block text-gray-400 text-sm">{selectedPost.createdAt}</span>
                            </div>
                        </div>
                        <p className="mb-4">{selectedPost.content}</p>
                        <div className="grid grid-cols-1 gap-2">
                            {selectedPost.images.map((image) => (
                                <img src={image} loading="lazy" alt="Post Image" className="w-full rounded" />
                            ))}
                        </div>
                        <div className="mt-4 flex flex-row justify-around">
                            <div className="flex flex-row items-center">
                                <img src={Like} alt="Like" className="w-8 h-8 text-primary" />
                                {like} Likes
                            </div>
                            <div className="flex flex-row items-center">
                                <img src={Comment} alt="Comment" className="w-8 h-8 text-primary" />
                                {comment} Comments
                            </div>
                            <div className="flex flex-row items-center">
                                <img src={Share} alt="Share" className="w-8 h-8 text-primary" />
                                {share} Shares
                            </div>
                        </div>
                        <button onClick={handleClose} className="mt-4 bg-primary text-white py-2 px-4 rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CommunityPost;
