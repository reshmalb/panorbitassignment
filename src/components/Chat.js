
import React from 'react';
import './Chat.css';

const Chat = ({ user, onClose }) => {
  return (
    <div className="single-chat">
      <div className="single-chat-header">
        <div className="single-chat-user-details">
          <img
            className="single-chat-user-avatar"
            src={user.profilePicture}
            alt={user.name}
          />
          <h3 className="single-chat-user-name">{user.name}</h3>
        </div>
        <button className="single-chat-close-button" onClick={() => onClose(user)}>
          Close
        </button>
      </div>
    
    </div>
  );
};

export default Chat;
