
import React, { useState } from "react";
import "../../assets/styles/SPViewReviews.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import ReviewImg from "../../assets/img/review.png";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import Header from "../../components/header.js";

const initialReviews = [
  {
    id: 1,
    name: "Kumar Sangakkara",
    img: "https://i.pravatar.cc/100?img=7",
    text: "Excellent hotel with superb amenities and very friendly staff. The rooms were clean and well-maintained. Would love to visit again!",
    rating: 4,
    replies: [{ name: "Me", text: "Thank you for your wonderful feedback!" }],
  },
  {
    id: 2,
    name: "Muthumani Rajapakse",
    img: "https://i.pravatar.cc/100?img=8",
    text: "Had a wonderful stay. The food was delicious, and the service was top-notch. Highly recommended!",
    rating: 4,
    replies: [
      {
        name: "Me",
        text: "We appreciate your kind words and look forward to hosting you again!",
      },
    ],
  },
  {
    id: 3,
    name: "Priya Kumar",
    img: "https://i.pravatar.cc/100?img=9",
    text: "The stay was enjoyable. The location is perfect, and the amenities were just what we needed for a relaxing vacation.",
    rating: 5,
    replies: [
      {
        name: "Me",
        text: "Glad to hear you enjoyed your stay! We hope to see you again soon.",
      },
    ],
  },
  {
    id: 4,
    name: "Arjun Patel",
    img: "https://i.pravatar.cc/100?img=10",
    text: "Not a great experience. The room was noisy, and the service was lacking. I expected better.",
    rating: 2,
    replies: [
      {
        name: "Me",
        text: "We’re sorry to hear about your experience. Your feedback is important, and we’ll work on improving these issues.",
      },
    ],
  },
  {
    id: 5,
    name: "Sanya Iyer",
    img: "https://i.pravatar.cc/100?img=11",
    text: "A decent place to stay. The staff was friendly, but the cleanliness of the room could have been better.",
    rating: 3,
    replies: [
      {
        name: "Me",
        text: "Thank you for your feedback. We’ll address the cleanliness concerns to ensure a better experience in the future.",
      },
    ],
  },
  {
    id: 6,
    name: "Ravi Menon",
    img: "https://i.pravatar.cc/100?img=12",
    text: "Amazing experience! The hotel exceeded our expectations. Wonderful staff, great facilities, and very comfortable rooms.",
    rating: 5,
    replies: [
      {
        name: "Me",
        text: "Thank you for the fantastic review! We’re thrilled to hear you had a great stay.",
      },
    ],
  },
  {
    id: 7,
    name: "Ananya Reddy",
    img: "https://i.pravatar.cc/100?img=13",
    text: "Good value for money. The hotel is well-located, and the rooms are nice. Would stay here again.",
    rating: 4,
    replies: [
      {
        name: "Me",
        text: "We’re glad you found good value in your stay. Looking forward to welcoming you back!",
      },
    ],
  },
  {
    id: 8,
    name: "Nikhil Sharma",
    img: "https://i.pravatar.cc/100?img=14",
    text: "The experience was just average. Nothing stood out, and the overall service could use some improvement.",
    rating: 3,
    replies: [
      {
        name: "Me",
        text: "Thank you for your feedback. We’ll review your comments and strive to improve our service.",
      },
    ],
  },
];


const SPViewReviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [replyText, setReplyText] = useState("");
  const [activeReply, setActiveReply] = useState(null);

  const handleReplyClick = (id) => {
    setActiveReply(id);
  };

  const handleReplySubmit = (reviewId) => {
    const newReviewList = reviews.map((review) => {
      if (review.id === reviewId) {
        return {
          ...review,
          replies: [...review.replies, { name: "Me", text: replyText }],
        };
      }
      return review;
    });

    setReviews(newReviewList);
    setReplyText("");
    setActiveReply(null); // Hide reply form after submission
  };

  return (
    <>
      <Header
        type="serviceprovider"
        profilePic={HotelProfileImg}
        funtion={() => {}}
      />
    <div className="spview-reviews-container">
      <h1 className="spreview-reviews-heading">Customer Reviews</h1>
      <div className="spview-reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="spview-review-card">
            <div className="spview-review-header">
              <div className="spview-review-img">
                <img src={review.img} alt={review.name} />
              </div>
              <div className="spview-review-author">
                <h6>{review.name}</h6>
                <div className="spview-review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="spview-review-text">{review.text}</p>
            <div className="spview-review-replies">
              {review.replies.map((reply, index) => (
                <div key={index} className="spview-review-reply">
                  <strong>{reply.name}:</strong> {reply.text}
                </div>
              ))}
              {activeReply === review.id && (
                <div className="spview-review-reply-form">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Write your reply..."
                  ></textarea>
                  <button
                    onClick={() => handleReplySubmit(review.id)}
                    className="spview-reply-submit"
                  >
                    Submit
                  </button>
                </div>
              )}
              {activeReply !== review.id && (
                <button
                  onClick={() => handleReplyClick(review.id)}
                  className="spview-reply-button"
                >
                  <FontAwesomeIcon icon={faReply} /> Reply
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
      </>
  );
};

export default SPViewReviews;


