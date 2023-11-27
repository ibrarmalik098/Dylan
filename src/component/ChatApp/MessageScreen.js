import { useEffect, useContext, useState } from "react";
import Message from "./Message";
import { db } from "../fireBase";
import { doc, onSnapshot } from "firebase/firestore";
import { ChatContext } from "../context/ChatContext";
import './index.css'
import { Avatar, TextField, Button } from "@mui/material";
// import { Button } from "react-bootstrap";

function MessageScreen() {
  const [messages, setMessages] = useState([
    'Hi',
    'Hello',
    'How are you',
    'Hello ???',
    'You hear Me ???',
    'Fine😒',
    'ok Bye',
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="message-container">
        {messages.map((message, index) => (
          <>
            <div
              key={index}
              className={`message ${message.sender === 'user' ? 'user' : 'other'}`}
            >
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2BdsfTZeFHeksuXsnuaIrvzXx55kIpHLCQsW8TYi&s" className="avatar" />
              <p className="show_message">{message}</p>
            </div>
            <div
              key={index}
              className={`message ${message.sender === 'other' ? 'other' : 'user'}`}
            >
              <p className="show_message2">{message}</p>
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Fv57MIWNWS3M643RMbR9ylTfHIuC8tuJGFyJRf2l&s" className="avatar" />
            </div>
          </>
        ))}
      </div>

    </div>
  );
}

export default MessageScreen;
