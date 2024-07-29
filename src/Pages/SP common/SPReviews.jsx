import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Ravi Kumar",
    role: "Car Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    review:
      "The quality of these seat covers is outstanding. They fit perfectly and add a touch of luxury to my car's interior. Highly recommend!",
    socialLink: "https://twitter.com/ravikumar/status/1234567890",
    // icon: "fab fa-twitter",
  },
  {
    id: 2,
    name: "Anjali Sharma",
    role: "Marketing Professional",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    review:
      "I love the customizable designs! I was able to choose the perfect color to match my car's interior. The material feels very durable.",
    socialLink: "https://www.instagram.com/p/1234567890",
    icon: "fab fa-instagram",
  },
  {
    id: 3,
    name: "Vijay Singh",
    role: "Software Developer",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    review:
      "These seat covers are a game-changer for long drives. The added padding and ergonomic design make a huge difference in comfort.",
    socialLink: "https://www.facebook.com/vijaysingh/posts/1234567890",
    icon: "fab fa-facebook",
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "Mobile Developer",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "The installation was super easy, and the instructions were clear. My car looks and feels much more upscale now.",
    socialLink: "https://twitter.com/priyapatel/status/1234567890",
    icon: "fab fa-twitter",
  },
  {
    id: 5,
    name: "Arjun Mehta",
    role: "Manager",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    review:
      "Great value for money. The seat covers have a premium feel and have significantly improved the look of my car's interior.",
    socialLink: "https://www.instagram.com/p/1234567890",
    icon: "fab fa-instagram",
  },
  {
    id: 6,
    name: "Sneha Rao",
    role: "Product Designer",
    avatar: "https://randomuser.me/api/portraits/women/19.jpg",
    review:
      "Absolutely love these seat covers. They're stylish, comfortable, and were really easy to install. My car interior looks brand new!",
    socialLink: "https://www.facebook.com/sneharao/posts/1234567890",
    icon: "fab fa-facebook",
  },
];

const shuffleArray = (array) => {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const SPReviews = () => {
  const [currentReviews, setCurrentReviews] = useState(reviews);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentReviews((prevReviews) => shuffleArray(prevReviews));
    }, 5000); // Swap every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="pb-12 mx-auto md:pb-20 max-w-7xl mt-6">
      <div className="py-4 text-center md:py-8">
        <h4 className="text-base font-bold tracking-wide text-center uppercase text-teal-600">
          Reviews
        </h4>
        <p className="mt-2 tracking-tight text-gray-900 text-xl md:text-2xl">
          We have some fans.
        </p>
      </div>

      <div className="gap-8 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3">
        {currentReviews.map((review) => (
          <motion.div
            key={review.id}
            className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10"
            drag
            whileHover={{ scale: 0.85 }}
            transition={{ duration: 0.01 }}
            dragConstraints={{ left: 0, top: 0, right: 300, bottom: 300 }}
          >
            <div className="flex gap-4 items-start">
              <img
                className="w-12 h-12 rounded-full"
                src={review.avatar}
                alt="user avatar"
                width="200"
                height="200"
                loading="lazy"
              />
              <div className="flex-1 flex justify-between items-start">
                <div>
                  <h6 className="text-lg font-medium text-gray-700">
                    {review.name}
                  </h6>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
                <a
                  href={review.socialLink}
                  className="text-blue-500 hover:text-blue-600 ml-4"
                >
                  <i className={review.icon}></i>
                </a>
              </div>
            </div>
            <p className="mt-8">{review.review}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SPReviews;
