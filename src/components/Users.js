import React,{useState,useEffect} from 'react'
import './Users.css'
import axios from 'axios'
import ProfileDashboard from './ProfileDashboard'
const fetchUsers=  async()=>{
  try{
    const response=  await  axios.get('https://panorbit.in/api/users.json')
    console.log(response.data)
    return response.data;
  }
  catch(error){
    console.log(error.message)
  }

}

const Users = () => {
  const[userlist,setUserList]=useState([]);
  const [singleUser,setSingleUser]=useState([])



useEffect(()=>{
  const getUsers = async () => {
    try {
      const usersData = await fetchUsers();
      setUserList(usersData.users || []);
    } catch (error) {
      console.error(error.message);
    }
  };
  getUsers();

},[])


const handleUserSelecttion=(id)=>{

  const userdata= userlist.filter((item)=>item.id===id)
  console.group("userdat",userdata)
  setSingleUser(userdata||[]);

}

  return (
    <>
    {singleUser.length===0?(<div className='user-container'>
      <div className='user-heading'>
         Select An Account  
          

         </div>
        <div className='users'> 
        {userlist?.map((user)=>(
          <div className='user-list' key={user.id} onClick={(e)=>handleUserSelecttion(user.id)} >
             <img className='user-profile-pic' src={user.profilepicture} alt="profilepic"></img>
             <span className='user-name'> {user.name}</span>
             
            </div>
        )

        )}
            
        </div>

      </div>):
      (<ProfileDashboard  user={singleUser}/>)}
    </>
  
  )
}

export default Users