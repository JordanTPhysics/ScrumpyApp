import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import '../App.css';


function Leftbar() {
  return (
    <div className='leftbar'>
        <div>
                <Login/>
                <Logout/>
                <Profile/>
                </div>
                </div>
  )
}

export default Leftbar