import React from "react";
import { useState } from "react";
import './MessageInput.css';

function MessageInput({sendMessage}){
    const [message, setMessage] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        sendMessage(message);
        setMessage('');
    };

    return(
        <form className="message-input" onSubmit={handleSubmit}>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message"/>
            <button type="submit">Send</button>
        </form>
    );
}

export default MessageInput;