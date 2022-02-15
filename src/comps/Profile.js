import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../App.css';


const Profile = () => {

    const { user, isAuthenticated } = useAuth0();



  return (
      isAuthenticated && (
    <div>
        <img src={user.picture} alt={user.name}/>
        <p>username: {user.name} email: {user.email}</p>
        {/* {JSON.stringify(user,null, 2)} */}
        
        Profile</div>)
  )
}
export default Profile;