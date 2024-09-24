import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';

function DashTop() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.auth);
  const HandleLogout =()=>{
      localStorage.removeItem('user');
      dispatch(logout(user));
      navigate('/')
  }

  return (
    <div className='dash-top'>
        <input type="text" placeholder='Search...' className='dash-top-search'/>
        <div className='dash-date'>
            <span>Monday, 6th March</span>
        </div>
        <div className='dash-btn'>
            <button className='dash-logout' onClick={HandleLogout}>Logout</button>
        </div>
    </div>
  )
}

export default DashTop