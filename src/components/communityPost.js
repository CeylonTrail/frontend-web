import React, { useState, useEffect } from "react";
import Like from "../assets/img/like.svg";
import Comment from "../assets/img/comment.svg";
import Share from "../assets/img/share.svg";
import fromatDate from "../Functions/FormatDate";
import { capitalizeWords } from "../Functions/FormatName";
import profilePic from "../assets/img/picskel.png";
import noContent from "../assets/img/cactus_no_content.gif";
import dots from "../assets/img/threeDots.svg";
import post from "../API/post";
import { PrimaryButton } from "./Button";
import cross from "../assets/img/cancel.png";
import { SuccessAlert,WarningAlert } from "./Alerts";

const CommunityPost = ({ posts, type }) => {
    const [like, setLike] = useState(false);
    
    const [comment, setComment] = useState(false);
    const [share, setShare] = useState(0);
    const [selectedPost, setSelectedPost] = useState(null);
    const [showDotMenu, setShowDotMenu]=useState(false);
    const [showReportWindow,setShowReportWindow]=useState(false);
    // const [showReportModal, setShowReportModal] = useState(false);
    const [reportReason, setReportReason] = useState("");
    const[selectedPostId,setSelectedPostId]=useState();
    const [issuccess, setIsSucsess]=useState(false);
    const[isWarning,setIsWarning]=useState(false);
    const [successMessage,setSuccessMessage]=useState("");
    const [warningMessage,setWarningMessage]=useState("")
   


    const handlePostClick = (post) => {
        setSelectedPost(post);
        setSelectedPostId(post.postId);
    };

    const handleLike=async()=>{
        if (like){
            setLike(false);
            try{
                const response = await post.remove_like_post(selectedPostId);
                if (response.status === "success") {
                    //decrease like count by 1
                    
                } else {
                    setIsSucsess(false);
                    setIsWarning(true);
                    setSuccessMessage(response.message)
                }
            } catch (error) {
                setIsSucsess(false);
                    setIsWarning(true);
                    
                
            }
        }
        else{
            setLike(true);
            try{
                const response = await post.add_like_post(selectedPostId);
                if (response.status === "success") {
                    //increrase like count by 1
                    
                } else {
                    setIsSucsess(false);
                    setIsWarning(true);
                    setSuccessMessage(response.message)
                }
            } catch (error) {
                setIsSucsess(false);
                    setIsWarning(true);
                    
                
            }
        }
        
    }

    const handleComment=async()=>{
        try{
            const response = await post.add_like_post(selectedPostId);
            if (response.status === "success") {
                //increrase like count by 1
                
            } else {
                setIsSucsess(false);
                setIsWarning(true);
                setSuccessMessage(response.message)
            }
        } catch (error) {
            setIsSucsess(false);
                setIsWarning(true);
                
            
        }
    }


    const handleDotMenu=()=>{
        if (showDotMenu){
            setShowDotMenu(false)
        }
        else{
            setShowDotMenu(true);
        }
    }

    const handleReportSubmit = async() => {
        const reason={reason:reportReason}
        try {
            const response = await post.report_post(selectedPostId,reason);
    
            if (response.status === "success") {
                setIsSucsess(true);
                setIsWarning(false);
                setShowReportWindow(false);
                setShowDotMenu(false);
                setReportReason("")
                setSuccessMessage("Post reported successfully.")
                
            } else {
                setIsSucsess(false);
                setIsWarning(true);
                setShowReportWindow(false);
                setShowDotMenu(false);
                setReportReason("")

                setSuccessMessage(response.message)
            }
        } catch (error) {
            setIsSucsess(false);
                setIsWarning(true);
                setShowReportWindow(false);
                setShowDotMenu(false);
                setSuccessMessage("Something went wrong. Please try again.");
                setReportReason("")
            
        }

        // API call to report the post
        // Example: postAPI.reportPost({ postId: selectedPost.id, reason: reportReason });

        setShowReportWindow(false);
        setShowDotMenu(false);
    };

    const handleReportPost=()=>{
        setShowReportWindow(true)
    }
    const handleClose = () => {
        setSelectedPost(null);
        setShowReportWindow(false);
        setShowDotMenu(false)
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

    if (posts === null || posts.length == 0) {
        console.log("Posts:", posts);
        return <div className="flex justify-center flex-col items-center pt-16">
            <img src={noContent} alt="noContent" className="w-3/5" />
            <p>No Posts Available</p>
        </div>;
    } else {
        return (
            <>
            <section className={`mx-auto  ${type === "public" ? "w-full ml-10" : "w-[704px]"}`}>
                <div className="gap-2">
                    {posts.map((item, key) => (
                        <article
                            className="w-full mx-auto mt-4 shadow rounded-md duration-300 hover:shadow-sm p-4 bg-white cursor-pointer"
                            key={key}
                            onClick={() => handlePostClick(item)}
                        >
                            <div>
                                <div>
                                 
                                    <div className="flex items-center mt-2 ml-4 mr-2">
                                        <div className="flex-none w-10 h-10 rounded-full">
                                            <img src={item.user.profilePictureUrl || profilePic} className="w-full h-full rounded-full" alt={item.user.username} />
                                        </div>
                                        <div className="ml-3">
                                            <span className="block text-gray-900">{capitalizeWords(item.user.username)}</span>
                                            <span className="block text-gray-400 text-sm">{fromatDate(item.createdAt)}</span>
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
                                            <div className=" w-full h-48 rounded bg-SecondaryLight flex items-center justify-center text-xl text-gray-700">
                                                +{item.images.length - 2}

                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="border-t border-primary mt-5 flex flex-row justify-around pt-4">
                                    <button className="flex flex-row items-center"
                                    onClick={handleLike}>
                                        <img src={Like} alt="Like" className="w-8 h-8 text-primary" />
                                        {item.likeCount} Likes
                                    </button>
                                    <button className="flex flex-row items-center"
                                    onClick={handleComment}>
                                        <img src={Comment} alt="Comment" className="w-8 h-8 text-primary" />
                                        {item.commentCount} Comments
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>


                {/* Post Pop Up */}
                {selectedPost && (
                    <div
                        id="popup"
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 "
                        onClick={handleOutsideClick}
                    >
                        <div className="bg-white p-6 rounded-lg w-[44rem] mx-auto max-h-3/5 overflow-auto h-fit min-h-[22rem] flex flex-col justify-evenly">
                            <div className="flex items-center my-4 ml-2 mr-2 justify-between">
                                <div className="flex items-center ">
                                    <div className="flex-none w-10 h-10 rounded-full">
                                        <img src={selectedPost.user.profilePictureUrl || profilePic} className="w-full h-full rounded-full" alt={selectedPost.user.useraname} />
                                    </div>
                                    <div className="ml-3">
                                        <span className="block text-gray-900">{capitalizeWords(selectedPost.user.username)}</span>
                                        <span className="block text-gray-400 text-sm">{fromatDate(selectedPost.createdAt)}</span>
                                    </div>
                                </div>
                                <div>
                                    <button>
                                        <img src={dots} onClick={handleDotMenu}></img>
                                    </button>
                                    {showDotMenu && 
                                    <ul
                                    role="menu"
                                    data-popover="menu"
                                    data-popover-placement="bottom"
                                    className="absolute z-10 min-w-[180px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg shadow-sm focus:outline-none"
                                    >
                                        <li
                                            role="menuitem"
                                            className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-hoverGray focus:bg-slate-100 active:bg-slate-100"
                                            onClick={handleReportPost}
                                        >
                                            {`Report Post`}
                                        </li>
                                
                                    </ul>}
                                </div>
                            </div>
                            <p className="mb-4">{selectedPost.content}</p>
                            <div className="grid grid-cols-1 gap-2">
                                {selectedPost.images.map((image) => (
                                    <img src={image} loading="lazy" alt="Post Image" className="w-full rounded" />
                                ))}
                            </div>
                            <div className="mt-4 flex flex-row justify-around">
                            <button className="flex flex-row items-center"
                                    onClick={handleLike}>
                                        <img src={Like} alt="Like" className="w-8 h-8 text-primary" />
                                        {selectedPost.likeCount} Likes
                                    </button>
                                    <button className="flex flex-row items-center"
                                    onClick={handleComment}>
                                        <img src={Comment} alt="Comment" className="w-8 h-8 text-primary" />
                                        {selectedPost.commentCount} Comments
                                    </button>
                              
                            </div>
                            <button onClick={handleClose} className="mt-4 bg-primary text-white py-2 px-4 rounded">
                                Close
                            </button>
                        </div>
                    </div>
                )}


                {/* Post report */}
                {showReportWindow && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
                        <div className="flex justify-between">
                            <h2 className="text-xl font-semibold mb-4">Report Post</h2>
                            <button
                            onClick={handleClose}>
                                <img src={cross} className="h-fit" />
                            </button>
                        </div>
                        
                        <textarea
                            className="w-full border rounded p-2 mb-4"
                            placeholder="Enter the reason for reporting this post"
                            value={reportReason}
                            onChange={(e) => setReportReason(e.target.value)}
                        />
                        <div className="flex justify-end space-x-4">
                            
                            <PrimaryButton
                                name={'Submit'}
                                action={handleReportSubmit}
                                isActive={false}
                            />
                        
                        
                        </div>
                    </div>
                </div>
                )}
            </section>

            {issuccess &&
                <SuccessAlert message={successMessage} onclose={setIsSucsess(false)}/>
            }

            {isWarning && 
                <WarningAlert title={"Error"} message={warningMessage} onclose={setIsWarning(false)}/>
            }
            </>
            
        );
    }


};

export default CommunityPost;
