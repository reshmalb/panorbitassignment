import './App.css';
import Users from './components/Users';
import ProfileDashboard from './components/ProfileDashboard';
import { useState } from 'react';

function App() {
  const [isuser,setuser]=useState(false);
  const [userdata,setUserdata]=useState([])

  const handleSelection=(user)=>{
    setUserdata(user)
    setuser(true);
  }
  const handlesignout=()=>{
    setuser(false)
    setUserdata([])
  }
  return (
    <div className="App">
     {!isuser &&(<Users onselect={handleSelection}/>)}
     {isuser &&( <ProfileDashboard user={userdata} signout={handlesignout}/>)}  
    </div>
  );
}

export default App;
