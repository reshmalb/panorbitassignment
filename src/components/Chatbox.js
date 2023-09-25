

import React from 'react';
import './Chatbox.css';

const Chatbox = ({ users, onUserSelect }) => {
  return (
    <div className="sub-chatbox">
      <div className="chat-user-list">
        {users.map((user) => (
          <div
            key={user.id}
            className="chat-user-item"
            onClick={() => onUserSelect(user)}
          >
            <img
              className="chat-user-avatar"
              src={user.profilePicture}
              alt={user.name}
            />
            <div className="chat-user-details">
              <h3 className="chat-user-name">{user.name}</h3>
              <p className={`chat-user-status ${user.online ? 'online' : 'offline'}`}>
                {user.online ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatbox;
