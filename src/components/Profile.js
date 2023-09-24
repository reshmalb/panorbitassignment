import React from 'react'
import './Profile.css'

const Profile = ({user}) => {

  return (
    <div className='individual-profile-details'>
      <section className='basic-profile-details'>
         <div className='profile1'>
          <img className="profile-pic-big" src={user?user[0].profilepicture:"#"} alt='profilepic'></img>
          <div id='name'>{user ? user[0].name:'NA'}</div>
          <div className='display-list'>
          <div className='user-labels'>Username</div><div className='colon'>:</div><div className='span-user'> {user ?user[0].username:'NA'}</div>
          </div>
          <div className='display-list'>
          <div  className='user-labels'>E-mail</div><div className='colon'>:</div><div className='span-user'> {user ? user[0].email:"NA"}</div>
          </div>
          <div className='display-list'>
          <div  className='user-labels'>Phone</div><div className='colon'>:</div><div className='span-user'> {user ? user[0].phone:'NA'}</div>
          </div>
          <div className='display-list'>
          <div  className='user-labels'>Website</div><div className='colon'>:</div><div className='span-user'> {user? user[0].website:'NA'}</div>
          </div>        
         </div>

         <hr className='line-horizontal'></hr>
         <div className='profile1'>
            <div id='company'> Company</div>
          <div className='display-list'>
            <div className='user-labels'>Name</div><div className='colon'>:</div><div className='span-user'> {user? user[0].company.name:'NA'}</div>
            </div>
          <div className='display-list'>
            <div className='user-labels'>Catchphrase</div ><div className='colon'>:</div><div className='span-user'> {user? user[0].company.catchPhrase:"NA"}</div>
            </div>
          <div className='display-list'>
            <div className='user-labels'>bs</div><div className='colon'>:</div><div className='span-user'> {user? user[0].company.bs:"NA"}</div>
            </div>
         </div>

      </section>
      <div className='line-vertical'>.</div>
      <section className='profile-address'>
            <div className='profile2'>
            <div id='address'> Address:</div>
          <div className='display-list'>
            <div className='user-labels'>Street</div><div className='colon'>:</div><div className='span-user'> {user? user[0].address.street:'NA'}</div>
            </div>
          <div className='display-list'>
            <div className='user-labels'>Suit</div><div className='colon'>:</div><div className='span-user'> {user? user[0].address.suite:"NA"}</div>
            </div>
          <div className='display-list'>
            <div className='user-labels'>City</div><div className='colon'>:</div><div className='span-user'> {user? user[0].address.city:"NA"}</div>
            </div>
             <div className='display-list'>
            <div className='user-labels'>Zipcode</div><div className='colon'>:</div><div className='span-user'> {user? user[0].address.zipcode:"NA"}</div>
            </div>
         </div>
         <div className='profile-map'>

         </div>

      </section>



    </div>
  )
}

export default Profile