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
                <div><p>Here I can place a paragraph with some additional information, maybe a calendar/availability scheme or something to do with pricing...</p></div>
                </div>
  )
}

export default Leftbar