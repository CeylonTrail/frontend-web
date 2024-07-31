import React, { useState } from "react";
import { PrimaryButton } from "./Button";
import FloatingChat from "./FloatingChat";

const chatsData = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: "Hey there! How are you?",
    messages: ["Hey there!", "How are you?", "I'm good, thanks!"],
  },
  {
    id: 2,
    name: "Jane Smith",
    lastMessage: "Are we still on for tonight?",
    messages: ["Are we still on for tonight?", "Yes, see you at 8!"],
  },
  {
    id: 3,
    name: "Alice Johnson",
    lastMessage: "I'll send you the documents soon.",
    messages: ["I'll send you the documents soon.", "Great, thanks!"],
  },
  // Add more chat data here
];

function ChatList() {
  const [view, setView] = useState("trail"); // "trail" or "chats"
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chatId) => {
    setSelectedChat(chatId);
    setView("chatWindow");
  };

  const handleViewChange = (view) => {
    setView(view);
    setSelectedChat(null);
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-4 h-full mb-2">
      <div className="flex flex-row mb-4">
        <PrimaryButton
          name={"Trail"}
          action={() => handleViewChange("trail")}
        />
        <PrimaryButton
          name={"Chats"}
          action={() => handleViewChange("chats")}
        />
      </div>

      {view === "trail" && (
        <div>
          <h2 className="text-s font-bold mb-4">Trail Chat</h2>
          <p>This is the conversation type chat window for Trail.</p>
          <div className="flex pt-56">
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 border rounded-lg p-2 mr-2 "
            />
            <PrimaryButton name={"Send"} />
          </div>
        </div>
      )}

      {view === "chats" && (
        <ul>
          {chatsData.map((chat) => (
            <li
              key={chat.id}
              onClick={() => handleChatClick(chat.id)}
              className={`flex items-center p-2 mb-2 cursor-pointer rounded ${
                selectedChat === chat.id ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
            >
              <div className="flex-1 border-b">
                <h3 className="font-semibold">{chat.name}</h3>
                <p className="text-gray-600">{chat.lastMessage}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {view === "chatWindow" && selectedChat && (
        <div>
          <h2 className="text-s font-bold mb-4">
            {chatsData.find((chat) => chat.id === selectedChat).name}
          </h2>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            {chatsData
              .find((chat) => chat.id === selectedChat)
              .messages.map((message, index) => (
                <p key={index} className="mb-2">
                  {message}
                </p>
              ))}
          </div>
          <div className="flex pt-36">
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 border rounded-lg p-2 mr-2 "
            />
            <PrimaryButton name={"Send"} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatList;
