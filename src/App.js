import './App.css';
import Users from './components/Users';
import ProfileDashboard from './components/ProfileDashboard';
import { useState } from 'react';

function App() {
  const [isuser,setuser]=useState(false);
  const [userdata,setUserdata]=useState([])
  const [allusers,setallUsers]=useState([])
  const handleSelection=(user)=>{
    setUserdata(user)
    setuser(true);
  }
  const handlesignout=()=>{
    setuser(false)
    setUserdata([])
  }
  const handleUser=(users)=>{
    const all=users.map((user)=>({
      profilepicture:user.profilepicture,
      username:user.username
    }))
   setallUsers(all)
  }
  return (
    <div className="App">
     {!isuser &&(<Users onselect={handleSelection} userDetails={handleUser}/>)}
     {isuser &&( <ProfileDashboard user={userdata} signout={handlesignout} alluser={allusers}/>)}  
    </div>
  );
}

export default App;
