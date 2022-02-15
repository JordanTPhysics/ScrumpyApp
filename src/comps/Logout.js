import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../App.css';


const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
  <button className='button' onClick={() => logout()}>
      Logout
  </button>
  ));
}

export default Logout;

