import React, { useEffect } from 'react';
import { useState } from 'react';
import './Student_dashboard.css';
import { useSelector, useDispatch} from 'react-redux';
import {useNavigate , Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import {reset, freelogin} from '../features/auth/authSlice';
import Spinner from '../Spinner/Spinner';

function FreelancingLoginIn({setFreeAuthToken}) {

    const [freelancerlogin, setFreelancerLogin] = useState({
        email:"",
        password:""
      });
    const navigate = useNavigate()
    const dispatch = useDispatch();
    function FreeLoginChange({currentTarget:input}){
        setFreelancerLogin({...freelancerlogin,[input.name]:input.value})
    } 

    const handleFreeLogin = (e)=>{
        e.preventDefault();
        dispatch(freelogin(freelancerlogin));
    }
    const {user, isError, isLoading, isSuccess, message} = useSelector((state)=> state.auth)
    console.log(user)
    // console.log(user.token);
 
    console.log(freelancerlogin);
    useEffect((()=>{
        if(isError){
          toast.error(message);
        }
        if(isSuccess && user){
          console.log(user.token)
          setFreeAuthToken(user.token);
          
          navigate('/freelancerhome')
        }
        dispatch(reset());
      }),[user, isError, isLoading, isSuccess, message]);
      if(isLoading){
        <Spinner/>
      }
  return (
    <div className='freelancing-sign'>
    <div className='free-sign-left'>
            <h2>---Become a Seller</h2>
            <h1>Design, Code, </h1>
            <h3>Success</h3>
            <Link to='/freelancingsign'>
            <button>Sign Up</button>
            </Link>
            
          
              
    </div>
    <div className='free-sign-right'>
      
        <form action="" className='free-login' >
            <h2>Login Now</h2>
            <div className='free-login-email'>
                <label htmlFor="">Email*</label>
                <input type="text" placeholder='Email...' name='email' value={freelancerlogin.email} onChange={FreeLoginChange} />
            </div>
            <div className='free-login-password'>
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Password...' name='password' value={freelancerlogin.password} onChange={FreeLoginChange}/>
            </div>
            <button onClick={handleFreeLogin} className='free-login-btn' >Login Now ---</button>
      </form>
       
    </div>
</div>
  )
}

export default FreelancingLoginIn;
