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
          <label  className='user-labels'>E-mail:<span></span>  <span></span><span className='span-user'> {user ? user[0].email:"NA"}</span></label>
          <label  className='user-labels'>Phone: <span></span><span></span><span className='span-user'> {user ? user[0].phone:'NA'}</span></label>
          <label  className='user-labels'>Website:<span></span><span></span><span></span><span></span><span className='span-user'> {user? user[0].website:'NA'}</span></label>
         </div>

         <hr className='line-horizontal'></hr>
         <div className='profile1'>
            <label id='company'> Company</label>
            <label className='user-labels'>Name:{user? user[0].company.name:'NA'}</label>
            <label className='user-labels'>Catchphrase:{user? user[0].company.catchPhrase:"NA"}</label>
            <label className='user-labels'>bs:{user? user[0].company.bs:"NA"}</label>


         </div>

      </section>
      <section className='profile-address'>
      <div className='profile1'>
            <label id='address'> Address</label>
            <label className='user-labels'>Street:{user? user[0].address.street:'NA'}</label>
            <label className='user-labels'>Suit:{user? user[0].address.suite:"NA"}</label>
            <label className='user-labels'>City:{user? user[0].address.city:"NA"}</label>
            <label className='user-labels'>Zipcode:{user? user[0].address.zipcode:"NA"}</label>
         </div>
         <div className='profile-map'>

         </div>

      </section>



    </div>
  )
}

export default Profile