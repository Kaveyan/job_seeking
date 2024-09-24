import React from 'react'
import './Student_dashboard.css'
import {AiFillSetting} from 'react-icons/ai';
import {CiLocationOn} from 'react-icons/ci';
import {MdNotificationsNone} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {logout} from '../features/auth/authSlice';



function Navbar({studentMain,setStudentMain,setProfileData,profileData}) {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const {user} = useSelector((state)=> state.auth);
  const onChange = ()=>{
      localStorage.removeItem('user');
      dispatch(logout(user));
      setProfileData(null)
      console.log("From Navabar",profileData)
      navigate('/');
  }
  const handleNavClick = (props) =>{
    console.log('Click')
    setStudentMain(props);
  }
  return (

    <>
      <ul>
        <li className='logo'>
            <h2>NeuroWizards</h2>
        </li>
        <li className='headers'>
                <ul className='headers-list'>
                    <li onClick={()=>{
                      handleNavClick('findjob')
                    }}>Find job</li>
                    <li onClick={()=>{
                      handleNavClick('leaderboard')
                    }}>Leaderboard</li>
                    <li onClick={()=>{
                      
                      handleNavClick('message')
                    }}>Messages</li>

                </ul>
        </li>
        <li className='location'>
                <CiLocationOn className='loc'/>
                <h2>New York, NY</h2>
        </li>
        <li className='profile'>
                <img src="./" alt="#" className='profile-img' onClick={()=>{
                   handleNavClick('profile')
                }} />
                <AiFillSetting className='settings'/>
                <MdNotificationsNone className='notification'/>
        </li>
        <li className='logout'>
                <button onClick={onChange} className='logout-btn'>Logout</button>
        </li>
      </ul>
    </>
  )
}

export default Navbar
