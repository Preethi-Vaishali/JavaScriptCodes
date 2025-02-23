import React from 'react';
import './ChatWindow.css';

function ChatWindow({ messages }){
    return(
        <div className='chat-window'>
            {messages.map((msg, index) =>{
                <div key={index} className='chat-message'>{msg}</div>
            })}
        </div>
    );
}

export default ChatWindow;