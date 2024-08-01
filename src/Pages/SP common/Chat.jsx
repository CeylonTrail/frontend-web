import React, { useState } from "react";
import "../../assets/styles/Chat.css";
import { format } from "date-fns";
import {
  FaSearch,
  FaPaperPlane,
  FaFile,
  FaSmile,
  FaPhone,
  FaThumbtack,
  FaEnvelope,
  FaArrowLeft,
} from "react-icons/fa";
import HotelProfileImg from "../../assets/img/hotel-profile.png";
import Header from "../../components/header.js";


const Chat = () => {
  const contacts = [
    {
      id: 1,
      name: "Ramesh Perera",
      lastMessage: "Thank you for the information!",
      lastTime: "10:30 AM",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      chatHistory: [
        {
          sender: "Ramesh",
          message: "Hi, I would like to inquire about the hotel rates.",
          timestamp: "2024-07-28T09:00:00.000Z",
        },
        {
          sender: "Me",
          message: "Sure, I'll provide you with the details.",
          timestamp: "2024-07-28T09:05:00.000Z",
        },
        {
          sender: "Me",
          message: "Our standard room is $100 per night.",
          timestamp: "2024-07-28T09:06:00.000Z",
        },
        {
          sender: "Me",
          message: "The deluxe room is $150 per night.",
          timestamp: "2024-07-28T09:07:00.000Z",
        },
        {
          sender: "Ramesh",
          message: "Are there any discounts for longer stays?",
          timestamp: "2024-07-28T09:10:00.000Z",
        },
        {
          sender: "Me",
          message:
            "Yes, we offer a 10% discount for stays longer than 5 nights.",
          timestamp: "2024-07-28T09:15:00.000Z",
        },
        {
          sender: "Ramesh",
          message: "What amenities are included?",
          timestamp: "2024-07-28T09:20:00.000Z",
        },
        {
          sender: "Me",
          message:
            "All rooms include free Wi-Fi, breakfast, and access to the gym.",
          timestamp: "2024-07-28T09:25:00.000Z",
        },
        {
          sender: "Ramesh",
          message: "Is there a swimming pool?",
          timestamp: "2024-07-28T09:30:00.000Z",
        },
        {
          sender: "Me",
          message: "Yes, we have an outdoor swimming pool.",
          timestamp: "2024-07-28T09:35:00.000Z",
        },
        {
          sender: "Ramesh",
          message: "What are the check-in and check-out times?",
          timestamp: "2024-07-28T09:40:00.000Z",
        },
        {
          sender: "Me",
          message: "Check-in is at 2 PM and check-out is at 11 AM.",
          timestamp: "2024-07-28T09:45:00.000Z",
        },
        {
          sender: "Ramesh",
          message: "Thank you for the information!",
          timestamp: "2024-07-28T09:50:00.000Z",
        },
        {
          sender: "Me",
          message:
            "You're welcome! Let me know if you have any other questions.",
          timestamp: "2024-07-28T09:55:00.000Z",
        },
      ],
    },
    {
      id: 2,
      name: "Ahmed Mansoor",
      lastMessage: "Are we meeting today?",
      lastTime: "9:00 AM",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      chatHistory: [
        { sender: "Ahmed", message: "Are we meeting today?" },
        { sender: "Me", message: "Yes, at 3 PM." },
      ],
    },
    {
      id: 3,
      name: "Linda Smith",
      lastMessage: "Can you send the report?",
      lastTime: "8:45 AM",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
      chatHistory: [
        { sender: "Linda", message: "Can you send the report?" },
        { sender: "Me", message: "Sure, I'll send it by noon." },
      ],
    },
    {
      id: 4,
      name: "John Doe",
      lastMessage: "Let's catch up later.",
      lastTime: "Yesterday",
      avatar: "https://randomuser.me/api/portraits/men/7.jpg",
      chatHistory: [
        { sender: "John", message: "Let's catch up later." },
        { sender: "Me", message: "Absolutely, talk to you then!" },
      ],
    },
    {
      id: 5,
      name: "Emily Davis",
      lastMessage: "Happy Birthday!",
      lastTime: "Yesterday",
      avatar: "https://randomuser.me/api/portraits/women/8.jpg",
      chatHistory: [
        { sender: "Emily", message: "Happy Birthday!" },
        { sender: "Me", message: "Thank you so much!" },
      ],
    },
    {
      id: 6,
      name: "Daniel Lee",
      lastMessage: "See you tomorrow.",
      lastTime: "Yesterday",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
      chatHistory: [
        { sender: "Daniel", message: "See you tomorrow." },
        { sender: "Me", message: "Looking forward to it!" },
      ],
    },
    {
      id: 7,
      name: "Sarah Johnson",
      lastMessage: "Let's finalize the deal.",
      lastTime: "Yesterday",
      avatar: "https://randomuser.me/api/portraits/women/7.jpg",
      chatHistory: [
        { sender: "Sarah", message: "Let's finalize the deal." },
        { sender: "Me", message: "I'll send over the documents." },
      ],
    },
    {
      id: 8,
      name: "Michael Brown",
      lastMessage: "Can we reschedule our meeting?",
      lastTime: "2 days ago",
      avatar: "https://randomuser.me/api/portraits/men/8.jpg",
      chatHistory: [
        { sender: "Michael", message: "Can we reschedule our meeting?" },
        { sender: "Me", message: "Sure, how about Thursday?" },
      ],
    },
    {
      id: 9,
      name: "Jessica Wilson",
      lastMessage: "Thank you for your help.",
      lastTime: "2 days ago",
      avatar: "https://randomuser.me/api/portraits/women/9.jpg",
      chatHistory: [
        { sender: "Jessica", message: "Thank you for your help." },
        { sender: "Me", message: "You're welcome!" },
      ],
    },
    {
      id: 10,
      name: "David Martinez",
      lastMessage: "Happy Anniversary!",
      lastTime: "3 days ago",
      avatar: "https://randomuser.me/api/portraits/men/9.jpg",
      chatHistory: [
        { sender: "David", message: "Happy Anniversary!" },
        { sender: "Me", message: "Thank you, David!" },
      ],
    },
  ];

  const formatDate = (timestamp) => {
    return format(new Date(timestamp), "p"); // 'p' for localized time with AM/PM
  };

  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pinnedContacts = filteredContacts.slice(0, 3);
  const allMessagesContacts = filteredContacts.slice(3);

  const truncateMessage = (message, limit) => {
    return message.length > limit
      ? message.substring(0, limit - 5) + "..."
      : message;
  };

 
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <>
      <Header
        type="serviceprovider"
        profilePic={HotelProfileImg}
        funtion={() => {}}
      />
    <div className="messenger-container pt-10">
      <div className="messenger-sidebar">
        <div className="search-bar">
          <div className="search-input-wrapper flex items-center gap-x-3 mb-0.5">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search Messenger"
              className="search-input flex-1 rounded-md border-2 px-2.5 py-1 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#0F969C] focus:ring-[#0F969C] sm:text-xs sm:leading-4"
              style={{
                borderColor: "#6DA5C0",
                outlineColor: "#0F969C",
              }}
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="contact-section pinned-section">
          <div className="section-title">
            <FaThumbtack className="section-icon" />
            Pinned
          </div>
          <ul className="contact-list">
            {pinnedContacts.map((contact) => (
              <li
                key={contact.id}
                className={`contact-item ${
                  selectedContact.id === contact.id ? "active" : ""
                }`}
                onClick={() => setSelectedContact(contact)}
              >
                <img src={contact.avatar} alt="avatar" />
                <div className="contact-info">
                  <div className="contact-info-header">
                    <span className="contact-name">{contact.name}</span>
                    <span className="contact-last-time">
                      {contact.lastTime}
                    </span>
                  </div>
                  <span className="contact-last-message">
                    {truncateMessage(contact.lastMessage, 38)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="contact-section all-messages-section">
          <div className="section-title">
            <FaEnvelope className="section-icon" />
            All Messages
          </div>
          <ul className="contact-list">
            {allMessagesContacts.map((contact) => (
              <li
                key={contact.id}
                className={`contact-item ${
                  selectedContact.id === contact.id ? "active" : ""
                }`}
                onClick={() => setSelectedContact(contact)}
              >
                <img src={contact.avatar} alt="avatar" />
                <div className="contact-info">
                  <div className="contact-info-header">
                    <span className="contact-name">{contact.name}</span>
                    <span className="contact-last-time">
                      {contact.lastTime}
                    </span>
                  </div>
                  <span className="contact-last-message">
                    {truncateMessage(contact.lastMessage, 38)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="messenger-chat">
        <div className="chat-header">
          <div className="chat-header-info">
            <img src={selectedContact.avatar} alt="avatar" />
            <div>
              <span className="chat-header-name">{selectedContact.name}</span>
              <span className="chat-header-status">Last seen: 2 hours ago</span>
            </div>
          </div>
          <div onClick={handleBackClick} className="back-icon">
            <FaArrowLeft />
          </div>
        </div>

        <div className="chat-messages">
          {selectedContact.chatHistory.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.sender === "Me" ? "sent" : "received"
              }`}
            >
              {message.sender !== "Me" && (
                <img src={selectedContact.avatar} alt="avatar" />
              )}
              <p>{message.message}</p>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <FaFile className="file-icon" />
          <div className="input-wrapper">
            <FaSmile className="emoji-icon" />
            <input
              type="text"
              placeholder="Type a message..."
              className="input-field"
            />
            <button className="send-button">
              <FaPaperPlane className="send-icon" />
              Send
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Chat;
