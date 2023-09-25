import React, { useState } from "react";
import "./ProfileDashboard.css";
import Profile from "./Profile";
import Post from "./Post";
import Gallery from "./Gallery";
import ToDO from "./ToDO";

import Overlay from "./Overlay";
import Chatbox from "./Chatbox";
import Chat from "./Chat";
import DummyUserData from "./DummyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const ProfileDashboard = ({ user, signout, alluser }) => {
  const [profile, setProfile] = useState(true);
  const [profiledata, setProfileData] = useState(user || []);
  const [post, setPost] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [todo, setTodo] = useState(false);
  const [activeButton, setActiveButton] = useState("profile");
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isChatboxOpen, setChatboxOpen] = useState(false);
  const handlePost = (e) => {
    e.preventDefault();
    setGallery(false);
    setPost(true);
    setProfile(false);
    setTodo(false);
    setActiveButton("post");
  };
  const handleProfile = (e) => {
    e.preventDefault();
    setGallery(false);
    setPost(false);
    setProfile(true);
    setTodo(false);
    setActiveButton("profile");
  };
  const handleGallery = (e) => {
    e.preventDefault();
    setGallery(true);
    setPost(false);
    setProfile(false);
    setTodo(false);
    setActiveButton("gallery");
  };
  const handleTodo = (e) => {
    e.preventDefault();
    setGallery(false);
    setPost(false);
    setProfile(false);
    setTodo(true);
    setActiveButton("todo");
  };
  const handleSignout = () => {
    signout(true);
  };
  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setChatboxOpen(true);
  };

  const handleCloseChat = (user) => {
    setSelectedUser(null);
    setChatboxOpen(false);
  };

  const toggleChatbox = () => {
    setChatboxOpen(!isChatboxOpen);
  };
  const chatboxStyle = {
    transform: isChatboxOpen ? "translateY(10%)" : "translateY(100%)",
  };

  return (
    <div className="dashboard-container">
      {/* Displaying Modal */}
      <Overlay
        isOpen={isOverlayOpen}
        onClose={() => setOverlayOpen(!isOverlayOpen)}
      >
        <img
          className="overlay-image"
          src={user[0].profilepicture}
          alt="overlay-image"
        />
        <div className="overlay-name">{user[0].name}</div>
        <div className="overlay-email">{user[0].username}</div>
        <div className="other-users-list">          
          {alluser.map((auser)=>(<div className="over-container">
                           <img  className="overlay-other-user-image" src={alluser.profilepicture} alt="over-image"/>
            <div className="over-username">{auser.username}
            </div>
             </div>))}
          </div>
        <button className="overlay-signout-button" onClick={handleSignout}>
          Signout
        </button>
      </Overlay>

      {/* Displaying chatbox */}
      <div className={`chatbox-container ${isChatboxOpen ? "open" : ""}`}>
        <div
          className="chatbox-header-image"
          onClick={toggleChatbox}
          style={chatboxStyle}
        >
          <FontAwesomeIcon
            icon={faComment}
            style={{ fontSize: "2rem", paddingLeft: "5px" }}
          />
        </div>
        <Chatbox
          users={DummyUserData}
          onUserSelect={handleUserSelect}
          onClick={toggleChatbox}
          style={chatboxStyle}
        />
        {selectedUser && (
          <>
            <div className="chatbox-header-image">
              <FontAwesomeIcon icon={faComment} style={{ fontSize: "2rem" }} />
              {selectedUser.name}
            </div>
            {/* Displaying individual chatbox */}
            <Chat user={selectedUser} onClose={handleCloseChat} />
          </>
        )}
      </div>
      {/* Display list of pages ,Posts,todo,profilr,Gallery */}
      <div className="profile-left-section">
        <div
          onClick={handleProfile}
          className={`buttonlist ${activeButton === "profile" ? "active" : ""}`}
        >
          Profile
        </div>
        <hr className="hr-left"></hr>
        <div
          onClick={handlePost}
          className={`buttonlist ${activeButton === "post" ? "active" : ""}`}
        >
          Post
        </div>
        <hr className="hr-left"></hr>

        <div
          onClick={handleGallery}
          className={`buttonlist ${activeButton === "gallery" ? "active" : ""}`}
        >
          Gallery
        </div>
        <hr className="hr-left"></hr>

        <div
          onClick={handleTodo}
          className={`buttonlist ${activeButton === "todo" ? "active" : ""}`}
        >
          To Do
        </div>
      </div>
    {/* Displaying detailed profile with Company address and location */}
      <div className="profile-right-section">
        <div className="profile-header-section">
          <div className="profile-header-left">
            {profile && "Profile"}
            {todo && "Todo"}
            {post && "Posts"}
            {gallery && "Gallery"}
          </div>
          <div className="profile-header-right">
            <img
              className="profile-small-image"
              src={user ? user[0].profilepicture : "#"}
              onClick={() => setOverlayOpen(!isOverlayOpen)}
            ></img>
            <div id="login-id" onClick={() => setOverlayOpen(!isOverlayOpen)}>
              {" "}
              {user[0].name}
            </div>
          </div>
        </div>

        <div className="profile-details">
          {profile && <Profile user={user} />}
          {todo && <ToDO />}
          {post && <Post />}
          {gallery && <Gallery />}
        </div>
      </div>
  
    </div>
  );
};

export default ProfileDashboard;
