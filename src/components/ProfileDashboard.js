import React,{useState} from "react";
import "./ProfileDashboard.css";
import Profile  from './Profile'
import Post from './Post'
import Gallery from './Gallery'
import ToDO from './ToDO'


const ProfileDashboard = () => {

  const[profile,setProfile]=useState(true);
  const [post,setPost]=useState(false)
  const [gallery,setGallery]=useState(false)
  const [todo,setTodo]=useState(false)



   
  const handlePost=(e)=>{
    e.preventDefault();
    setGallery(false)
    setPost(true)
    setProfile(false)
    setTodo(false)

  }
  const handleProfile=(e)=>{
    e.preventDefault();
    setGallery(false)
    setPost(false)
    setProfile(true)
    setTodo(false)
  }
  const handleGallery=(e)=>{
    e.preventDefault();
    setGallery(true)
    setPost(false)
    setProfile(false)
    setTodo(false)

  }
   const handleTodo=(e)=>{
    e.preventDefault();
    setGallery(false)
    setPost(false)
    setProfile(false)
    setTodo(true)

  }
  return (
   <div className="dashboard-container">
      <div className="profile-left-section">
           <button onClick={handleProfile} className="buttonlist">Profie</button>
           <div class="line-horizontal"></div>
           <button onClick={handlePost} className="buttonlist">Post</button>
           <div class="line-horizontal"></div>
           <button onClick={handleGallery} className="buttonlist">Gallery</button>
           <div class="line-horizontal"></div>
           <button onClick={handleTodo} className="buttonlist">To Do</button>

      </div>
      <div className="profile-right-section">
        
           <div className="profile-header-section">
                    <div className="profile-header-left"> 
                      Profile
                    </div>
                    <div className="profile-header-right">
                       <img className="profile-small-image" src="">

                         </img>
                          <h6>Name</h6>
                    </div>                  
          </div>

          <div className="profile-details">
             {profile &&(<Profile/>)}
             {todo  &&(<ToDO/>)}
             {post &&(<Post/>)}
             {gallery&&(<Gallery/>)}
        
            </div>
      
          </div>
      
    </div>
  );
};

export default ProfileDashboard;
