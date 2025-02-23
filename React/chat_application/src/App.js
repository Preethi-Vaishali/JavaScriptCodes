import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import './App.css';

const socket = io('http://localhost:3001');

function App(){
  const [messages, setMessages] = useState([]);

  useEffect(() =>{
    socket.on('message', (newMessage) =>{
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
  }, []);
  const sendMessage =(message) =>{
    if(message.trim()){
      socket.emit('message', message);
    }
  };

  return(
    <div className = "app-container">
      <h1>React Chat App</h1>
      <ChatWindow messages={messages} />
      <MessageInput sendMessage ={sendMessage}/>
    </div>
  );
  
}
export default App;