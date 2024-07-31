import React, { useState } from "react";
import{ PrimaryButton} from "./Button";

const chatsData = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: "Hey there! How are you?",
  },
  {
    id: 2,
    name: "Jane Smith",
    lastMessage: "Are we still on for tonight?",
  },
  {
    id: 3,
    name: "Alice Johnson",
    lastMessage: "I'll send you the documents soon.",
  },
  // Add more chat data here
];

function ChatList() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chatId) => {
    setSelectedChat(chatId);
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-4 h-full mb-2">
      {/* <h2 className="text-xl font-bold mb-4">Chats</h2> */}
      <div className="flex flex-row ">
        <PrimaryButton name={"Trail"} />
        <PrimaryButton name={"Chats"} />
      </div>
      <ul>
        {chatsData.map((chat) => (
          <li
            key={chat.id}
            onClick={() => handleChatClick(chat.id)}
            className={`flex items-center p-2 mb-2 cursor-pointer rounded ${
              selectedChat === chat.id ? "bg-blue-100" : "hover:bg-gray-100"
            }`}
          >
            <div className="flex-1">
              <h3 className="font-semibold">{chat.name}</h3>
              <p className="text-gray-600">{chat.lastMessage}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatList;
