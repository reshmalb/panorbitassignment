import React,{useState} from "react";
import "./ProfileDashboard.css";
import Profile  from './Profile'
import Post from './Post'
import Gallery from './Gallery'
import ToDO from './ToDO'

import Overlay from "./Overlay";


const ProfileDashboard = ({user,signout}) => {

  const[profile,setProfile]=useState(true);
  const [profiledata,setProfileData]=useState(user||[])
  const [post,setPost]=useState(false)
  const [gallery,setGallery]=useState(false)
  const [todo,setTodo]=useState(false)
  const [activeButton, setActiveButton] = useState('profile'); 
  console.log("singledata",user,profiledata)
  const [isOverlayOpen, setOverlayOpen] = useState(false);
   
  const handlePost=(e)=>{
    e.preventDefault();
    setGallery(false)
    setPost(true)
    setProfile(false)
    setTodo(false)
    setActiveButton('post');
  }
  const handleProfile=(e)=>{
    e.preventDefault();
    setGallery(false)
    setPost(false)
    setProfile(true)
    setTodo(false)
    setActiveButton('profile');

  }
  const handleGallery=(e)=>{
    e.preventDefault();
    setGallery(true)
    setPost(false)
    setProfile(false)
    setTodo(false)
    setActiveButton('gallery');


  }
   const handleTodo=(e)=>{
    e.preventDefault();
    setGallery(false)
    setPost(false)
    setProfile(false)
    setTodo(true)
    setActiveButton('todo');


  }
  const handleSignout=()=>{
    signout(true);
  }


  return (
   <div className="dashboard-container">
        <Overlay isOpen={isOverlayOpen} onClose={()=>setOverlayOpen(!isOverlayOpen)}>
              <img className="overlay-image" src={user[0].profilepicture}/>
               <div className="overlay-name">{user[0].name}</div>
               <div className="overlay-email">{user[0].email}</div>
               <button className="overlay-signout-button" onClick={handleSignout}>Signout</button>

            </Overlay>

    <div className="profile-left-section">
    <div
        onClick={handleProfile}
        className={`buttonlist ${activeButton === 'profile' ? 'active' : ''}`}
      >
        Profile
      </div>
      <hr className="hr-left"></hr>
      <div
        onClick={handlePost}
        className={`buttonlist ${activeButton === 'post' ? 'active' : ''}`}
      >
        Post
      </div>
      <hr className="hr-left"></hr>


      <div
        onClick={handleGallery}
        className={`buttonlist ${activeButton === 'gallery' ? 'active' : ''}`}
      >
        Gallery
      </div>
      <hr className="hr-left"></hr>


      <div
        onClick={handleTodo}
        className={`buttonlist ${activeButton === 'todo' ? 'active' : ''}`}
      >
        To Do
      </div>
    </div>
      
    
      <div className="profile-right-section">
    
        
           <div className="profile-header-section">
                    <div className="profile-header-left"> 
                      {profile &&('Profile')}
                      {todo&& ('Todo')}
                      {post &&('Posts')}
                      {gallery &&('Gallery')}
                    </div>
                    <div className="profile-header-right" >
                        <img className="profile-small-image" src={user? user[0].profilepicture:'#'}  onClick={()=>setOverlayOpen(!isOverlayOpen)}>
                         </img>
                         <div id='login-id' onClick={()=>setOverlayOpen(!isOverlayOpen)}> {user[0].name}</div> 
                    </div>                  
          </div>
         

          <div className="profile-details">
             {profile &&(<Profile user={user}/>)}
             {todo  &&(<ToDO/>)}
             {post &&(<Post/>)}
             {gallery&&(<Gallery/>)}
        
            </div>
       
      
          </div>
      
    </div>
  );
};

export default ProfileDashboard;
