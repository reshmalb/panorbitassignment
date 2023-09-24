import React,{useState} from "react";
import "./ProfileDashboard.css";
import Profile  from './Profile'
import Post from './Post'
import Gallery from './Gallery'
import ToDO from './ToDO'
import Details from "./Details";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';


const ProfileDashboard = ({user}) => {

  const[profile,setProfile]=useState(true);
  const [profiledata,setProfileData]=useState(user||[])
  const [post,setPost]=useState(false)
  const [gallery,setGallery]=useState(false)
  const [todo,setTodo]=useState(false)
  const [activeButton, setActiveButton] = useState('profile'); 
  console.log("singledata",user,profiledata)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

   
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


  return (
   <div className="dashboard-container">
    <div className="profile-left-section">
    <div
        onClick={handleProfile}
        className={`buttonlist ${activeButton === 'profile' ? 'active' : ''}`}
      >
        Profile
      </div>
      <hr></hr>
      <div
        onClick={handlePost}
        className={`buttonlist ${activeButton === 'post' ? 'active' : ''}`}
      >
        Post
      </div>
      <hr></hr>

      <div
        onClick={handleGallery}
        className={`buttonlist ${activeButton === 'gallery' ? 'active' : ''}`}
      >
        Gallery
      </div>
      <hr></hr>

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
                      Profile
                    </div>
                    <div className="profile-header-right">
                       <img className="profile-small-image" src={user? user[0].profilepicture:'#'} onClick={openModal}>
                         </img>
                          <h6>{user[0].name}</h6>
                    </div>                  
          </div>
         

          <div className="profile-details">
             {profile &&(<Profile user={user}/>)}
             {todo  &&(<ToDO/>)}
             {post &&(<Post/>)}
             {gallery&&(<Gallery/>)}
        
            </div>
            {isModalOpen && (<Details
       name={user[0].name}
        email={user[0].email} 
        profilepic={user[0].profilepicture}
         onClose={closeModal}/>)}
      
          </div>
      
    </div>
  );
};

export default ProfileDashboard;
