import React from 'react'
import './Profile.css'

const Profile = ({user}) => {

  return (
    <div className='individual-profile-details'>
      <section className='basic-profile-details'>
         <div className='profile1'>
          <img className="profile-pic-big" src={user?user[0].profilepicture:"#"} alt='profilepic'></img>
          <label id='name'>{user ? user[0].name:'NA'}</label>
          <label className='user-labels'>Username:<span className='span-user'> {user ?user[0].username:'NA'}</span></label>
          <label  className='user-labels'>E-mail:<span></span> <span></span><span className='span-user'> {user ? user[0].email:"NA"}</span></label>
          <label  className='user-labels'>Phone: <span></span><span></span><span className='span-user'> {user ? user[0].phone:'NA'}</span></label>
          <label  className='user-labels'>Website:<span></span><span></span><span></span><span></span><span className='span-user'> {user? user[0].website:'NA'}</span></label>
         </div>

         <hr className='line-horizontal'></hr>
         <div className='profile1'>
            <label id='company'> Company</label>
            <label className='user-labels'>Name:<span className='span-user'> {user? user[0].company.name:'NA'}</span></label>
            <label className='user-labels'>Catchphrase:<span className='span-user'> {user? user[0].company.catchPhrase:"NA"}</span></label>
            <label className='user-labels'>bs:<span className='span-user'> {user? user[0].company.bs:"NA"}</span></label>


         </div>

      </section>
      <div className='line-vertical'>.</div>
      <section className='profile-address'>
            <div className='profile2'>
            <label id='address'> Address:</label>
            <label className='user-labels'>Street:<span className='span-user'> {user? user[0].address.street:'NA'}</span></label>
            <label className='user-labels'>Suit:<span className='span-user'> {user? user[0].address.suite:"NA"}</span></label>
            <label className='user-labels'>City:<span className='span-user'> {user? user[0].address.city:"NA"}</span></label>
            <label className='user-labels'>Zipcode:<span className='span-user'> {user? user[0].address.zipcode:"NA"}</span></label>
         </div>
         <div className='profile-map'>

         </div>

      </section>



    </div>
  )
}

export default Profile